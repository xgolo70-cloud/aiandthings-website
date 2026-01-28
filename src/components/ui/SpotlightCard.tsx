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
      className={`relative rounded-3xl border border-white/5 bg-zinc-900/60 overflow-hidden group transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/80 ${className}`}
    >
      {/* Subtle Static Shine on Hover */}
      <div 
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000 bg-linear-to-tr from-electric-violet/5 to-transparent ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Inner Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Precision Corner Borders (Subtle Polish) */}
      <div className="absolute top-0 left-0 w-10 h-px bg-linear-to-r from-electric-violet/20 to-transparent group-hover:from-electric-violet/50 transition-all duration-700" />
      <div className="absolute top-0 left-0 w-px h-10 bg-linear-to-b from-electric-violet/20 to-transparent group-hover:from-electric-violet/50 transition-all duration-700" />
    </motion.div>
  );
}
