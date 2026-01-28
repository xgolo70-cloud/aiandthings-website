'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Philosophy from '@/components/sections/Philosophy';
import Team from '@/components/sections/Team';
import Studio from '@/components/sections/Studio';

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      
      {/* Intro Hero */}
      <section className="pt-40 pb-20 px-6 bg-zinc-950 border-b border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-6"
              >
                  عن استوديو نيكسوس
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-8xl font-bold arabic-heading leading-tight mb-8"
              >
                  نحن مهندسو <br/> <span className="text-zinc-600">التجربة الرقمية</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto"
              >
                  نؤمن بأن التكنولوجيا يجب أن تكون غير مرئية، سحرية، وتخدم الإنسان أولاً. نحن ندمج الذكاء الاصطناعي مع التصميم الجمالي لخلق أدوات المستقبل.
              </motion.p>
          </div>
      </section>

      {/* Sections Integration */}
      <Philosophy />
      
      <div className="relative z-10 bg-zinc-50">
           <Team />
      </div>

      <Studio />

    </main>
  );
}
