'use client';

import React, { useState, useEffect } from 'react';
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

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 overflow-hidden bg-white selection:bg-gold-200 selection:text-neutral-900">
        
        {/* Clean Professional Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
             {/* Subtle Grain Overlay */}
             <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />
             
             {/* Subtle Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[64px_64px]" />
             
             {/* Very Subtle Ambient Light */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-50/50 blur-[120px] rounded-full pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-50/80 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto relative z-20 w-full pt-12">
            <div className="flex flex-col items-center text-center">
                
                {/* Professional Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    2026 Collection
                </motion.div>

                {/* Typography Block */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center space-y-4 mb-10"
                >
                    <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-neutral-400 uppercase">
                        Absolute
                    </span>
                    <div className="relative">
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-neutral-950 uppercase">
                            <TextRotator />
                        </h1>
                    </div>
                </motion.div>

                {/* Subline */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-base md:text-lg text-neutral-500 max-w-lg mx-auto font-light leading-relaxed px-4 mb-12"
                >
                    Crafting digital artifacts where <span className="text-neutral-900 font-medium">precision</span> meets <span className="text-neutral-900 font-medium">aesthetics</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="bg-neutral-950 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all active:scale-95">
                        Start Project
                    </button>
                    <button className="bg-white border border-neutral-200 text-neutral-600 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:border-neutral-400 hover:text-neutral-900 transition-all active:scale-95">
                        View Work
                    </button>
                </motion.div>
            </div>
        </div>
        
        {/* Minimal Scroll Hint */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
            <div className="w-px h-12 bg-neutral-200" />
        </motion.div>
    </section>
  );
};

export default Hero;



