'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const words = ["Page", "Design", "Studio", "Artifact", "Experience"];

const TextRotator: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3200);
        return () => clearInterval(timer);
    }, []);

    return (
        <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom pb-[0.1em] px-2">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ y: "80%", opacity: 0, scale: 0.95 }}
                    animate={{ y: "0%", opacity: 1, scale: 1 }}
                    exit={{ y: "-80%", opacity: 0, scale: 0.95 }}
                    transition={{ 
                        duration: 0.9, 
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="font-serif italic text-gold-400 block px-2 md:px-4 whitespace-nowrap leading-tight"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const FloatingArtifact: React.FC<{ 
    src: string; 
    className?: string; 
    delay?: number;
    depth?: number;
    mousePos: { x: number; y: number };
    blur?: string;
}> = ({ src, className, delay = 0, depth = 1, mousePos, blur = "blur-none" }) => {
    const { scrollY } = useScroll();
    const scrollYControlled = useTransform(scrollY, [0, 1000], [0, 200 * depth]);
    
    // Calculate mouse-based offset - amplified for maximalist feel
    const mouseX = (mousePos.x - 0.5) * 80 * depth;
    const mouseY = (mousePos.y - 0.5) * 80 * depth;

    return (
        <motion.div 
            style={{ 
                y: scrollYControlled,
                x: mouseX,
                translateY: mouseY
            }}
            className={`absolute pointer-events-none select-none transition-transform duration-700 ease-out ${className}`}
        >
            <motion.img 
                src={src}
                alt=""
                className={`w-full h-full object-contain ${blur}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -25, 0],
                    rotate: [0, 8, 0]
                }}
                transition={{ 
                    opacity: { duration: 1.5, delay },
                    scale: { duration: 1.5, delay },
                    y: { duration: 6 + delay, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8 + delay, repeat: Infinity, ease: "easeInOut" }
                }}
            />
        </motion.div>
    );
};

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const textScale = useTransform(scrollY, [0, 500], [1, 0.9]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        setMousePos({
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight
        });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-white selection:bg-gold-500 selection:text-white">
        
        {/* Rich Atmospheric Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
             {/* Dynamic Mesh Gradients */}
             <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-gold-200/20 blur-[120px] rounded-full mix-blend-multiply" />
             <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-neutral-200/40 blur-[100px] rounded-full mix-blend-multiply" />
             
             {/* Heavy Grain */}
             <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10 mix-blend-overlay" />
             
             {/* Complex Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[80px_80px] md:bg-size-[120px_120px]" />
             
             {/* Artifact Constellation - Maximalist Density */}
             <div className="absolute inset-0 z-0">
                {/* 1. Deep Background Anchor */}
                <FloatingArtifact 
                    src="/hero-artifact.png" 
                    className="top-[5%] left-[5%] w-[40vw] opacity-[0.4] rotate-180"
                    depth={0.2}
                    mousePos={mousePos}
                    blur="blur-md"
                />
                
                {/* 2. Main Centerpiece - Massive & Dominant */}
                <FloatingArtifact 
                    src="/hero-artifact.png" 
                    className="top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] md:w-[85vw] opacity-[0.8] mix-blend-overlay"
                    depth={0.5}
                    mousePos={mousePos}
                    blur="blur-3xl"
                />

                {/* 3. Sharp Foreground Details */}
                <FloatingArtifact 
                    src="/hero-artifact.png" 
                    className="bottom-[10%] right-[5%] w-[25vw] opacity-[0.8] mix-blend-hard-light"
                    depth={1.2}
                    delay={0.2}
                    mousePos={mousePos}
                    blur="blur-none"
                />
                <FloatingArtifact 
                    src="/hero-artifact.png" 
                    className="top-[20%] right-[15%] w-[15vw] opacity-[0.6]"
                    depth={0.8}
                    delay={0.4}
                    mousePos={mousePos}
                    blur="blur-sm"
                />
             </div>
        </div>

        <div className="relative z-20 w-full flex flex-col items-center justify-center pt-20">
            {/* Super-sized Badge */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 md:mb-16 inline-flex items-center gap-4 px-6 py-3 rounded-none bg-black text-white border border-gold-500/50 shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)] backdrop-blur-md"
            >
                <span className="w-2 h-2 bg-gold-500 flex animate-pulse" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.4em]">2026 Collection</span>
            </motion.div>

            {/* Typography - Screen Domination */}
            <motion.div 
                style={{ y: textY, scale: textScale }}
                className="flex flex-col items-center text-center mix-blend-difference text-white"
            >
                <div className="overflow-hidden">
                    <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-2xl md:text-4xl lg:text-5xl font-black tracking-[0.5em] md:tracking-[0.8em] uppercase mb-4 md:mb-8 text-neutral-900 md:text-neutral-900"
                    >
                        Absolute
                    </motion.span>
                </div>
                
                <h1 className="font-display text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black tracking-tighter leading-[0.75] uppercase text-neutral-950">
                   <TextRotator />
                </h1>
            </motion.div>

            {/* Content Bottom */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-16 md:mt-24 flex flex-col items-center gap-8 md:gap-12 relative z-30"
            >
                <p className="text-xl md:text-3xl text-neutral-600 max-w-3xl text-center font-light leading-relaxed px-6">
                    We craft <span className="font-serif italic text-gold-600 font-normal">monumental</span> digital experiences that defy convention and define the future.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 w-full px-6 md:px-0 justify-center">
                    <button className="bg-neutral-950 text-white px-12 py-6 md:py-8 text-sm md:text-base font-bold uppercase tracking-[0.25em] hover:bg-gold-600 transition-colors shadow-2xl hover:shadow-gold-500/20 active:scale-95 duration-300 w-full sm:w-auto">
                        Start Project
                    </button>
                    <button className="bg-white border-2 border-neutral-950 text-neutral-950 px-12 py-6 md:py-8 text-sm md:text-base font-bold uppercase tracking-[0.25em] hover:bg-neutral-50 transition-colors active:scale-95 duration-300 w-full sm:w-auto">
                        View Showreel
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Hero;



