'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

class Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  color: string;
  ctx: CanvasRenderingContext2D;

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.size = Math.random() * 1.5 + 0.5;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 30) + 1;
    this.color = Math.random() > 0.5 ? '#7c3aed' : (Math.random() > 0.5 ? '#06b6d4' : '#ffffff');
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }

  update(mouse: { x: number, y: number, radius: number }) {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < mouse.radius) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (mouse.radius - distance) / mouse.radius;
      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;
      
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dxBack = this.x - this.baseX;
        this.x -= dxBack / 20;
      }
      if (this.y !== this.baseY) {
        let dyBack = this.y - this.baseY;
        this.y -= dyBack / 20;
      }
    }
  }
}

export default function InteractiveHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 150;
    const mouse = { x: -100, y: -100, radius: 150 };

    function init() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push(new Particle(x, y, ctx!));
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update(mouse);

        // Neural connections
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particles[i].color;
                ctx.globalAlpha = (1 - (distance / 100)) * 0.15;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }
        }
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    // GSAP Cinematic Introduction
    const tl = gsap.timeline();

    tl.fromTo(".word-span", 
        { 
          opacity: 0, 
          y: 50, 
          filter: "blur(20px)",
          scale: 1.2
        }, 
        { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          scale: 1,
          duration: 1.5, 
          ease: "expo.out", 
          stagger: 0.1 
        }
    );

    tl.fromTo(".hero-text", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 2, ease: "power4.out", stagger: 0.4 },
        "-=1"
    );

    // Dynamic Floating Interaction
    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.x;
        mouse.y = e.y;
        
        // Subtle tilt for the text
        const xPos = (e.clientX / window.innerWidth) - 0.5;
        const yPos = (e.clientY / window.innerHeight) - 0.5;
        
        gsap.to(".hero-text", {
          x: xPos * 20,
          y: yPos * 20,
          rotateY: xPos * 10,
          rotateX: -yPos * 10,
          duration: 1,
          ease: "power2.out"
        });
    }

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        init();
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-zinc-950 pt-32">
      
      {/* Deep Space Gradient Background - Enhanced Nebula */}
      <div className="absolute inset-0 z-0">
          {/* Base Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-electric-violet/20 blur-[140px] rounded-full mix-blend-screen animate-float opacity-50" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-electric-cyan/20 blur-[140px] rounded-full mix-blend-screen animate-float opacity-50" style={{ animationDelay: '-5s' }} />
          
          {/* Secondary Atmospheric Accents */}
          <div className="absolute top-1/4 right-1/4 w-[30%] h-[30%] bg-emerald-500/10 blur-[100px] rounded-full mix-blend-overlay animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[25%] h-[25%] bg-white/5 blur-[80px] rounded-full mix-blend-soft-light animate-float" style={{ animationDuration: '15s' }} />

          {/* Precision Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          
          {/* Interactive Vignette */}
          <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-transparent opacity-60" />
      
      <div className="relative z-10 text-center px-6">
          <motion.div className="hero-text mb-8">
              <div className="flex items-center justify-center gap-3 group/label">
                <div className="w-1.5 h-1.5 rounded-full bg-electric-violet animate-pulse" />
                <div className="flex items-center gap-1 text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-500">
                    <span className="text-zinc-800 font-mono text-base">[</span>
                    <span className="px-2 group-hover/label:text-white transition-colors cursor-default">ai and things</span>
                    <span className="text-zinc-800 font-mono text-base">]</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
              </div>
          </motion.div>
          
          <motion.h1 
            className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.4] arabic-impact mb-6 relative z-20 pt-2 pb-10 overflow-visible flex flex-col items-center"
          >
              <div className="headline-line overflow-visible py-1 flex flex-wrap justify-center items-center">
                  {"نحول الأفكار إلى".split(" ").map((word, i, arr) => (
                    <React.Fragment key={i}>
                      <span className="word-span inline-flex hover-char transition-all duration-300">
                        {word}
                      </span>
                      {i < arr.length - 1 && <span className="inline-block w-[0.25em]" />}
                    </React.Fragment>
                  ))}
              </div>
              <div className="headline-line overflow-visible py-1 flex flex-wrap justify-center items-center">
                  {"واقع رقمي ذكي".split(" ").map((word, i, arr) => (
                    <React.Fragment key={i}>
                      <span className="word-span inline-flex text-transparent bg-clip-text bg-linear-to-r from-electric-cyan via-white to-electric-violet hover-char transition-all duration-300 pb-4 pt-2">
                        {word}
                      </span>
                      {i < arr.length - 1 && <span className="inline-block w-[0.25em]" />}
                    </React.Fragment>
                  ))}
              </div>
          </motion.h1>

          <motion.div className="hero-text mt-12 flex flex-col items-center gap-8">
              <p className="text-zinc-400 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
                  نحن نبني المستقبل بالتفاصيل، حيث تلتقي الهندسة بالإبداع والذكاء الاصطناعي.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-white text-black rounded-full font-bold text-base hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 arabic-impact"
                  >
                      تواصل معنا
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 glass-vibrant text-white rounded-full font-bold text-base border border-white/5 hover:border-white/20 transition-all duration-300 arabic-impact"
                  >
                      رؤية أعمالنا
                  </motion.button>
              </div>
              
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 2, duration: 1 }}
                 className="mt-16 flex flex-col items-center gap-4"
               >
                   <div className="flex items-center gap-3 group/scroll">
                      <span className="text-zinc-800 font-mono text-xs">[</span>
                      <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-[0.2em] arabic-impact group-hover/scroll:text-zinc-400 transition-colors">تصفح للأسفل</span>
                      <span className="text-zinc-800 font-mono text-xs">]</span>
                   </div>
                  <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-12 bg-linear-to-b from-electric-cyan to-transparent opacity-50"
                  />
              </motion.div>
          </motion.div>
      </div>

      {/* Side Details - Cyber Minimalism */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-10 opacity-20">
          <div className="h-40 w-px bg-linear-to-b from-white to-transparent" />
          <span className="rotate-90 text-[10px] font-mono uppercase origin-left">Creative_Tech</span>
      </div>
    </section>
  );
}
