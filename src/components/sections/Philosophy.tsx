'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 bg-zinc-50 border-y border-zinc-200 text-black relative overflow-hidden">
      
      {/* Background Texture for subtle paper feel */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
         
         {/* Eyebrow */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
         >
             <span className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-normal bg-white px-4 py-2 rounded-full border border-zinc-200">
                فلسفتنا في العمل
             </span>
         </motion.div>

         {/* Main Heading */}
         <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold leading-[1.1] max-w-4xl mx-auto arabic-heading text-zinc-900 mb-12"
         >
            نحن لا نتبع المتداول، <br />
            بل <span className="relative inline-block text-zinc-500">
                نخلق المعايير
                <span className="absolute bottom-2 left-0 w-full h-[0.1em] bg-zinc-300 opacity-50" />
            </span>
         </motion.h2>

         {/* Description */}
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-16"
         >
             <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-600 arabic-text">
                في عالم مليء بالضجيج الرقمي، نختار الوضوح. <br className="hidden md:block" />
                تصميماتنا ليست مجرد واجهات، بل حلول ذكية تخدم أهدافك بدقة متناهية.
             </p>
         </motion.div>

         {/* Minimalist Grid of Values */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
                { title: "الدقة", desc: "اهتمام بأدق التفاصيل لضمان الجودة." },
                { title: "السرعة", desc: "أداء فائق وتجربة مستخدم سلسة." },
                { title: "الابتكار", desc: "حلول إبداعية تسبق عصرها." }
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-8 bg-white border border-zinc-100 rounded-xl shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                >
                    <h3 className="text-xl font-bold mb-3 text-zinc-900 arabic-heading">{item.title}</h3>
                    <p className="text-zinc-500 font-light arabic-text">{item.desc}</p>
                </motion.div>
            ))}
         </div>

      </div>

    </section>
  );
}
