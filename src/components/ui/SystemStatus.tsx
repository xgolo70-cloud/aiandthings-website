'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SystemStatus() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-10 left-10 z-50 hidden xl:flex items-center gap-3"
    >
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 px-5 py-2.5 glass-vibrant border border-white/5 rounded-full shadow-[0_0_30px_-5px_rgba(0,0,0,0.4)] group overflow-hidden relative cursor-default"
        >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-cyan opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-cyan shadow-[0_0_8px_#06b6d4]"></span>
                </span>
                <span className="text-white/60 font-bold tracking-tight text-[11px] arabic-impact uppercase transition-colors group-hover:text-white">
                    النظام: نشط
                </span>
            </div>
            
            <div className="h-4 w-px bg-white/10 mx-1" />
            
            <span className="text-[10px] font-mono text-zinc-600 transition-colors group-hover:text-zinc-400">
                L-04 // STABLE
            </span>
        </motion.div>
    </motion.div>
  );
}
