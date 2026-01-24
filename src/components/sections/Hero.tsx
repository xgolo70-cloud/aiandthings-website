'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

// ... (TextRotator code remains the same, I will include it for completeness if needed, but for now I assume it's there or I should re-declare it to be safe)
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
                    initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-100%", opacity: 0, filter: "blur(10px)" }}
                    transition={{ 
                        duration: 0.8, 
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="font-serif italic text-accent-500 block px-2 md:px-4 whitespace-nowrap leading-tight"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const MagneticButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3); // Magnetic pull strength
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            style={{ x: xSpring, y: ySpring }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
        >
            {children}
        </motion.button>
    );
};

const Hero: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [5, -5]);
  const rotateY = useTransform(x, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        x.set(e.clientX);
        y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 overflow-hidden bg-white selection:bg-accent-200 selection:text-neutral-900 perspective-[1000px]">
        
        {/* Interactive Spotlight & Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[64px_64px]" />
             
             {/* Mouse Follower Light */}
             <motion.div 
                style={{ left: x, top: y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-200/20 blur-[100px] rounded-full mix-blend-multiply opacity-50"
             />
             
             {/* Dynamic Drawing Lines - Subtle Geometry */}
             <svg className="absolute inset-0 w-full h-full opacity-20">
                <motion.circle 
                    cx="50%" cy="50%" r="20%" 
                    className="stroke-accent-400 fill-none stroke-[0.5]"
                    initial={{ pathLength: 0, rotate: 0 }}
                    animate={{ pathLength: 1, rotate: 360 }}
                    transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                />
             </svg>
        </div>

        <motion.div 
            style={{ rotateX, rotateY }} // Subtle 3D tilt of the container
            className="max-w-7xl mx-auto relative z-20 w-full pt-12 transform-style-3d"
        >
            <div className="flex flex-col items-center text-center">
                
                {/* Professional Badge - Floating */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-neutral-100 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 shadow-sm backdrop-blur-sm"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                    2026 Collection
                </motion.div>

                {/* Typography Block */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-base md:text-lg text-neutral-500 max-w-lg mx-auto font-light leading-relaxed px-4 mb-12"
                >
                    Crafting digital artifacts where <span className="text-neutral-900 font-medium">precision</span> meets <span className="text-neutral-900 font-medium">aesthetics</span>.
                </motion.p>

                {/* Magnetic CTA Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <MagneticButton className="bg-neutral-950 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl active:scale-95">
                        Start Project
                    </MagneticButton>
                    <MagneticButton className="bg-white border border-neutral-200 text-neutral-600 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:border-accent-300 hover:text-accent-600 transition-colors active:scale-95">
                        View Work
                    </MagneticButton>
                </motion.div>
            </div>
        </motion.div>
        
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



