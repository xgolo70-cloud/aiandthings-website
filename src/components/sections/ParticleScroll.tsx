'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
  alpha: number;
  speed: number;
}

export default function ParticleScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration
    // Optimization: Dynamic particle count based on screen area to prevent lag on laptops/mobiles.
    const isMobile = window.innerWidth < 768;
    const baseCount = isMobile ? 600 : 1500; 
    const particleCount = baseCount; 
    const particles: Particle[] = [];
    const colors = ['#3b82f6', '#10b981', '#6366f1', '#ffffff']; // Blue, Green, Indigo, White

    // Resize handler
    const setSize = () => {
      // Optimization: Cap pixel ratio at 2 to avoid excessive rendering load on high-DPI screens
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Initialize Particles (Cloud State)
    // Use logical width/height for positioning, not physical canvas size (which is scaled)
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          targetX: x,
          targetY: y,
          size: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.05 + 0.02
        });
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        // Move towards target
        p.x += (p.targetX - p.x) * 0.1;
        p.y += (p.targetY - p.y) * 0.1;

        // Draw
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Idle motion
        p.targetX += (Math.random() - 0.5) * p.speed * 10;
        p.targetY += (Math.random() - 0.5) * p.speed * 10;
      });

      requestAnimationFrame(animate);
    };
    animate();

    // ScrollTrigger Definitions
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // 3 screens long
        scrub: 1,
        pin: true,
      }
    });

    // Animate progress value directly
    const progress = { value: 0 };
    
    tl.to(progress, {
        value: 1, // 0 -> 1: Cloud to Sphere
        duration: 1,
        ease: "power2.inOut"
    })
    .to(progress, {
        value: 2, // 1 -> 2: Sphere to Grid/Plane
        duration: 1,
        ease: "power2.inOut"
    });

    // Modified Render Logic to use 'progress'
    const render = () => {
        // Clear with physical dimensions
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Use logical dimensions for calculations
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const centerX = width / 2;
        const centerY = height / 2;
        const sphereRadius = Math.min(width, height) * 0.25;

        particles.forEach((p, i) => {
            let tx = p.originX;
            let ty = p.originY;

            if (progress.value <= 1) {
                // Phase 0->1: Cloud -> Sphere
                const t = progress.value;
                
                // Sphere math
                const theta = Math.acos(-1 + (2 * i) / particleCount);
                const phi = Math.sqrt(particleCount * Math.PI) * theta;
                
                const sphereX = centerX + sphereRadius * Math.sin(theta) * Math.cos(phi);
                const sphereY = centerY + sphereRadius * Math.sin(theta) * Math.sin(phi);

                tx = p.originX + (sphereX - p.originX) * t;
                ty = p.originY + (sphereY - p.originY) * t;
                
            } else {
                // Phase 1->2: Sphere -> Grid
                const t = progress.value - 1;
                
                // Sphere position (start point for this phase)
                const theta = Math.acos(-1 + (2 * i) / particleCount);
                const phi = Math.sqrt(particleCount * Math.PI) * theta;
                const sphereX = centerX + sphereRadius * Math.sin(theta) * Math.cos(phi);
                const sphereY = centerY + sphereRadius * Math.sin(theta) * Math.sin(phi);

                // Grid position
                const cols = 50;
                const col = i % cols;
                const row = Math.floor(i / cols);
                const spacing = width / cols;
                const gridX = col * spacing;
                const gridY = centerY + (row * spacing * 0.5) - (particles.length / cols * spacing * 0.25);
                // pseudo-3d tilt effect
                const tilt = (row - 25) * 5; 

                tx = sphereX + (gridX - sphereX) * t;
                ty = sphereY + (gridY + tilt - sphereY) * t;
            }

            // Ease current pos to target
            p.x += (tx - p.x) * 0.08;
            p.y += (ty - p.y) * 0.08;

            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        // Debug Text or overlay updates could go here
        requestAnimationFrame(render);
    };
    
    // Override the previous animate loop
    const handle = requestAnimationFrame(render);

    // Text Animations
    gsap.fromTo(".scroll-text-1", 
        { opacity: 0, y: 50 },
        { 
            opacity: 1, 
            y: 0, 
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=50%", 
                scrub: true
            }
        }
    );
     gsap.fromTo(".scroll-text-1", 
        { opacity: 1, y: 0 },
        { 
            opacity: 0, 
            y: -50, 
            scrollTrigger: {
                trigger: containerRef.current,
                start: "30% top",
                end: "50% top", 
                scrub: true
            }
        }
    );


    gsap.fromTo(".scroll-text-2", 
        { opacity: 0, y: 50 },
        { 
            opacity: 1, 
            y: 0, 
            scrollTrigger: {
                trigger: containerRef.current,
                start: "60% top",
                end: "80% top", 
                scrub: true
            }
        }
    );

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(handle);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Overlay Text Content */}
      <div ref={textRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        
        <div className="scroll-text-1 text-center absolute top-1/2 transform -translate-y-1/2 px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-emerald-400">
            Molecular Precision
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Harnessing the chaotic beauty of raw data to forge structured intelligence.
          </p>
        </div>

        <div className="scroll-text-2 text-center absolute top-1/2 transform -translate-y-1/2 px-4 opacity-0">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-purple-400">
            Infinite Scalability
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Adapting flawlessly from microscopic interactions to planetary scale networks.
          </p>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/50 uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-px h-12 bg-linear-to-b from-white/0 via-white/50 to-white/0" />
      </div>
    </section>
  );
}
