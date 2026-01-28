'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-40 bg-black text-white overflow-hidden relative border-y border-white/5">
      {/* Subtle Mesh Glow */}
      {/* Starfield Parallax - CSS only for performance */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_10px_white] animate-pulse" style={{ top: '10%', left: '20%' }} />
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-electric-violet rounded-full shadow-[0_0_15px_#7c3aed] animate-pulse" style={{ top: '30%', left: '80%', animationDelay: '1s' }} />
          <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-electric-cyan rounded-full shadow-[0_0_10px_#06b6d4] animate-pulse" style={{ top: '70%', left: '40%', animationDelay: '2s' }} />
          
           {/* Nebula Cloud */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-linear-to-r from-electric-violet/10 via-brand-blue/10 to-electric-cyan/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none animate-aurora" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
         
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-6"
         >
             <div className="flex items-center justify-center gap-6 mb-12 group/label">
                <div className="h-[1px] w-12 bg-linear-to-r from-transparent to-electric-violet opacity-50" />
                <div className="flex items-center gap-4 text-sm md:text-base font-bold tracking-[0.4em] uppercase text-zinc-400">
                    <span className="text-zinc-800 font-mono text-xl group-hover/label:text-electric-violet transition-colors">[</span>
                    <span className="arabic-impact px-4 group-hover/label:text-white transition-colors cursor-default relative">
                        رؤيتنا
                        <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-electric-violet scale-x-0 group-hover/label:scale-x-100 transition-transform duration-500 origin-right" />
                    </span>
                    <span className="text-zinc-800 font-mono text-xl group-hover/label:text-electric-cyan transition-colors">]</span>
                </div>
                <div className="h-[1px] w-12 bg-linear-to-l from-transparent to-electric-cyan opacity-50" />
             </div>
            <h2 className="text-4xl md:text-8xl font-bold leading-tight max-w-4xl mx-auto arabic-impact pb-6 pt-2">
              نؤمن بـ 
              <motion.span 
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="relative inline-block mx-4"
              >
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-violet via-electric-cyan to-brand-blue bg-[length:200%_auto] drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                    القصد
                  </span>
                  {/* Subtle underline glow */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                    className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-electric-violet to-brand-blue blur-[2px] opacity-50"
                  />
              </motion.span>
              والتنفيذ الدقيق.
            </h2>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
         >
             <p className="text-xl md:text-2xl font-normal leading-relaxed text-zinc-400">
                لا ينبغي أن تكون التكنولوجيا مجرد أداة تستخدمها، بل بيئة تعيش فيها. 
                سلسة، مستجيبة، ولا يمكن تمييزها عن السحر.
             </p>
         </motion.div>

         {/* Precision Detail */}
         <div className="mt-20 flex items-center gap-4">
            <div className="h-px w-12 bg-zinc-800" />
            <div className="w-2 h-2 rounded-full border border-zinc-700" />
            <div className="h-px w-12 bg-zinc-800" />
         </div>
      </div>

    </section>
  );
}
