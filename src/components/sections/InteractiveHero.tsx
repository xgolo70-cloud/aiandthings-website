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
    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;
    const maxDistance = mouse.radius;
    const force = (maxDistance - distance) / maxDistance;
    const directionX = forceDirectionX * force * this.density;
    const directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        const dxBack = this.x - this.baseX;
        this.x -= dxBack / 15;
      }
      if (this.y !== this.baseY) {
        const dyBack = this.y - this.baseY;
        this.y -= dyBack / 15;
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
      
      {/* Deep Space Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-electric-violet blur-[120px] rounded-full mix-blend-screen opacity-40 animate-float" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-electric-cyan blur-[120px] rounded-full mix-blend-screen opacity-40 animate-float" style={{ animationDelay: '-5s' }} />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-transparent" />
      
      <div className="relative z-10 text-center px-6">
          <motion.div className="hero-text mb-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase mb-4 block">ai and things</span>
          </motion.div>
          
          <motion.h1 
            className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.4] arabic-impact mb-6 relative z-20 pt-2 pb-10 overflow-visible flex flex-col items-center"
          >
              <div className="headline-line overflow-visible py-1 flex flex-wrap justify-center gap-x-4">
                  {"نحول الأفكار إلى".split(" ").map((word, i) => (
                    <span key={i} className="word-span inline-block hover-char transition-all duration-300">
                      {word}
                    </span>
                  ))}
              </div>
              <div className="headline-line overflow-visible py-1 flex flex-wrap justify-center">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-cyan via-white to-electric-violet inline-block pb-4 pt-2 flex flex-wrap justify-center gap-x-4">
                    {"واقع رقمي ذكي".split(" ").map((word, i) => (
                      <span key={i} className="word-span inline-block hover-char transition-all duration-300">
                        {word}
                      </span>
                    ))}
                  </span>
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
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest arabic-impact">تصفح للأسفل</span>
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
