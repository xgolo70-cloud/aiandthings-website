'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SpotlightCard({ children, className = "", delay = 0 }: SpotlightCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl border border-white/5 bg-zinc-900/60 overflow-hidden group transition-all duration-700 hover:border-white/10 hover:bg-zinc-900/80 ${className}`}
    >
      {/* 1. Intelligent Chromatic Border (Animated on hover) */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          padding: '1px',
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.5), rgba(124, 58, 237, 0.5), rgba(6, 182, 212, 0.5))',
          backgroundSize: '200% 200%',
          animation: isHovered ? 'gradient-shift 3s linear infinite' : 'none',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          borderRadius: 'inherit'
        }}
      />

      {/* 2. Pulsing Intelligence Glow */}
      <div 
        className={`pointer-events-none absolute inset-0 z-0 transition-all duration-1000 ${isHovered ? 'opacity-30' : 'opacity-0'}`}
        style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15), transparent 70%)',
            transform: isHovered ? 'scale(1.2)' : 'scale(1)'
        }}
      />
      
      {/* Inner Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* 3. Tech Corners (Animated on hover) */}
      <div className={`absolute top-0 left-0 w-8 h-8 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-20'}`}>
          <div className="absolute top-0 left-0 w-8 h-px bg-electric-cyan" />
          <div className="absolute top-0 left-0 w-px h-8 bg-electric-cyan" />
      </div>
      <div className={`absolute bottom-0 right-0 w-8 h-8 transition-all duration-500 rotate-180 ${isHovered ? 'opacity-100' : 'opacity-20'}`}>
          <div className="absolute top-0 left-0 w-8 h-px bg-electric-violet" />
          <div className="absolute top-0 left-0 w-px h-8 bg-electric-violet" />
      </div>
    </motion.div>
  );
}
