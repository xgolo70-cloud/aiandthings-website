'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
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
                    className="font-serif italic text-gold-400 block px-4 whitespace-nowrap leading-tight"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-white selection:bg-gold-200 selection:text-neutral-900">
        
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
             {/* Background Image - Full Impact */}
             <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 bg-[url('/history-bg.png')] bg-cover bg-center grayscale [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)]" 
             />

             {/* Subtle Grain Overlay */}
             <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />
             
             {/* Static Professional Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full pt-12">
            <div className="flex flex-col items-center text-center">
                
                {/* Masterpiece Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center space-y-2 mb-12"
                >
                    <span className="text-xl md:text-3xl lg:text-4xl font-black tracking-[0.4em] text-neutral-900 uppercase">
                        Absolute
                    </span>
                    <div className="relative">
                        <h1 className="font-display text-8xl md:text-[12rem] lg:text-[16rem] font-black tracking-tighter leading-[0.8] text-neutral-950 uppercase">
                            <TextRotator />
                        </h1>
                    </div>
                </motion.div>

                {/* Subline */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Experience digital artifacts crafted with <span className="text-neutral-900 border-b-2 border-gold-300">Absolute Precision</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-6 pt-12 w-full justify-center"
                >
                    <button className="group relative overflow-hidden bg-neutral-950 text-white px-12 py-6 rounded-full font-bold transition-all hover:scale-[1.02] active:scale-[0.98]">
                        <span className="relative z-10 flex items-center gap-3 tracking-widest uppercase text-xs">
                            Start Project 
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-neutral-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    </button>
                    <button className="group px-12 py-6 rounded-full font-bold text-neutral-600 hover:text-neutral-950 border border-neutral-200 hover:border-gold-300 transition-all bg-transparent hover:bg-gold-50/30 text-xs tracking-widest uppercase">
                        View Work
                    </button>
                </motion.div>
            </div>
        </div>

        {/* Scroll Indicator - Bottom */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
            <div className="w-px h-16 bg-linear-to-b from-gold-300/50 to-transparent" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold-400 font-medium">Scroll</span>
        </motion.div>
    </section>
  );
};

export default Hero;



