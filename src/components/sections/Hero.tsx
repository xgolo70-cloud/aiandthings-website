'use client';

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-white selection:bg-gold-200 selection:text-neutral-900">
        {/* Golden Artistic Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
             {/* Premium Grain Overlay */}
             <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
             
            <motion.div style={{ y: y1, opacity }} className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-gold-200/40 rounded-full blur-[120px] mix-blend-multiply" />
            <motion.div style={{ y: y1 }} className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-gold-300/30 rounded-full blur-[140px] mix-blend-multiply" />
            <div className="absolute top-[30%] right-[15%] w-[15vw] h-[15vw] bg-gold-100/60 rounded-full blur-[100px] mix-blend-overlay" />
        </div>

        {/* Abstract Golden Aura */}
        <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold-200/20 to-transparent rounded-full pointer-events-none blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full pt-12">
            <div className="flex flex-col items-center text-center space-y-12">
                
                {/* Badge - Minimalist/Artistic */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="group cursor-default relative inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-neutral-200 hover:border-gold-300/50 transition-colors duration-500"
                >
                    <Star className="w-3 h-3 text-gold-400 fill-current" />
                    <span className="text-xs font-medium tracking-[0.2em] text-neutral-600 uppercase">
                        The New Standard
                    </span>
                    <Star className="w-3 h-3 text-gold-400 fill-current" />
                </motion.div>

                {/* Massive Headline - Editorial Style */}
                <motion.div className="relative">
                    <motion.h1 
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-7xl md:text-9xl lg:text-[11rem] font-bold tracking-tighter leading-[0.85] text-neutral-950"
                    >
                        Pure <br/> 
                        <span className="font-serif italic text-gold-400 relative inline-block px-4">
                            Creative
                        </span>
                    </motion.h1>
                    
                    {/* Floating Tagline */}
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="hidden lg:block absolute top-[15%] right-[-15%] max-w-[150px] text-right text-xs font-serif italic text-neutral-400 leading-relaxed"
                    >
                        (est. 2024) <br/>
                        Building digital <br/>
                        artifacts.
                    </motion.p>
                </motion.div>

                {/* Subline */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-3xl text-neutral-500 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    We craft <span className="text-neutral-900 border-b border-gold-300">digital experiences</span> that merge 
                    meaningful aesthetics with intelligent engineering.
                </motion.p>

                {/* CTA Buttons - Artistic & Golden */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-6 pt-10 w-full justify-center"
                >
                    <button className="group relative overflow-hidden bg-neutral-950 text-white px-10 py-5 rounded-full font-medium transition-all hover:scale-[1.02] active:scale-[0.98]">
                        <span className="relative z-10 flex items-center gap-3 font-medium tracking-wide">
                            Start a Project 
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-gold-300" />
                        </span>
                        <div className="absolute inset-0 bg-neutral-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        {/* Golden Shine */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-linear-to-r from-transparent via-gold-200 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </button>
                    <button className="group px-10 py-5 rounded-full font-medium text-neutral-600 hover:text-neutral-950 border border-neutral-200 hover:border-gold-300 transition-all bg-transparent hover:bg-gold-50/30">
                        View Gallery
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
