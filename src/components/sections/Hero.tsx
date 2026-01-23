'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const FloatingShape: React.FC<{ delay?: number; className?: string }> = ({ delay = 0, className }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
            opacity: [0, 0.2, 0],
            scale: [0.8, 1.2, 0.8],
            y: [0, -30, 0],
            rotate: [0, 45, 0]
        }}
        transition={{ 
            duration: 12, 
            delay, 
            repeat: Infinity, 
            ease: "easeInOut" 
        }}
        className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    />
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 overflow-hidden bg-white selection:bg-gold-200 selection:text-neutral-900">
        
        {/* Advanced Ambient Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
             {/* Subtle Grain Overlay */}
             <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />
             
             {/* Static Professional Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px] md:bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

             {/* Floating Premium Accents */}
             <FloatingShape delay={0} className="top-[10%] left-[15%] w-64 h-64 bg-gold-200/40" />
             <FloatingShape delay={4} className="bottom-[15%] right-[10%] w-96 h-96 bg-gold-100/30" />
             <FloatingShape delay={2} className="top-[40%] right-[20%] w-48 h-48 bg-neutral-200/50" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full pt-32 md:pt-12">
            <div className="flex flex-col items-center text-center">
                
                {/* Premium Badge */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/60 text-[10px] font-bold uppercase tracking-[0.3em] text-gold-600 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                    </span>
                    2026 Collection
                </motion.div>

                {/* Masterpiece Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center space-y-1 md:space-y-2 mb-8 md:mb-12"
                >
                    <span className="text-lg md:text-3xl lg:text-4xl font-black tracking-[0.3em] md:tracking-[0.4em] text-neutral-900 uppercase">
                        Absolute
                    </span>
                    <div className="relative group cursor-default">
                        <h1 className="font-display text-5xl sm:text-7xl md:text-[12rem] lg:text-[16rem] font-black tracking-tighter leading-[0.8] text-neutral-950 uppercase transition-all duration-700 group-hover:tracking-normal">
                            <TextRotator />
                        </h1>
                    </div>
                </motion.div>

                {/* Subline */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-2xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed px-4"
                >
                    Building high-fidelity digital experiences that bridge the gap between <span className="text-neutral-950 font-medium italic border-b border-gold-300">art and logic</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-10 md:pt-12 w-full justify-center px-6 sm:px-0"
                >
                    <button className="group relative overflow-hidden bg-neutral-950 text-white px-10 md:px-14 py-4 md:py-6 rounded-full font-bold transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-xl shadow-neutral-950/10 active:shadow-none">
                        <span className="relative z-10 flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-[10px] md:text-xs">
                            Start Journey 
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gold-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </button>
                    <button className="group relative px-10 md:px-14 py-4 md:py-6 rounded-full font-bold text-neutral-600 hover:text-neutral-950 border border-neutral-200 hover:border-gold-300 transition-all bg-transparent hover:bg-gold-50/20 text-[10px] md:text-xs tracking-[0.2em] uppercase w-full sm:w-auto overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-2">View Work</span>
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </button>
                </motion.div>
            </div>
        </div>

        {/* Improved Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
            <div className="relative w-px h-16 bg-neutral-100 overflow-hidden">
                <motion.div 
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-gold-400 to-transparent"
                />
            </div>
            <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-400 font-bold">Discover</span>
        </motion.div>
    </section>
  );
};

export default Hero;



