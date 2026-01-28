'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
         
         {/* Capsule Container */}
         <div className="relative w-full rounded-[3rem] overflow-hidden bg-red-950 border border-white/10 shadow-2xl shadow-red-900/20 text-center">
            
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />
            
            {/* Subtle Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-linear-to-b from-red-900/0 via-red-950/50 to-red-950/80 pointer-events-none" />

            <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col items-center">
                
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="text-red-200 arabic-text text-xs md:text-sm uppercase tracking-widest bg-red-900/30 px-6 py-2 rounded-full border border-red-500/20 backdrop-blur-md">
                        فلسفتنا في العمل
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-bold max-w-5xl mx-auto arabic-heading text-white mb-12"
                >
                    نحن لا نتبع المتداول، <br />
                    بل <span className="text-transparent bg-clip-text bg-linear-to-r from-red-100 via-white to-red-200 pr-1">
                        نخلق المعايير
                    </span>
                </motion.h2>

                {/* Description */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto mb-20"
                >
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-red-100/90 arabic-text">
                        في عالم مليء بالضجيج الرقمي، نختار الوضوح. <br className="hidden md:block" />
                        تصميماتنا ليست مجرد واجهات، بل حلول ذكية تخدم أهدافك بدقة متناهية.
                    </p>
                </motion.div>

                {/* Cards Grid - Glass Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                    {[
                        { title: "الدقة", desc: "اهتمام بأدق التفاصيل لضمان الجودة." },
                        { title: "السرعة", desc: "أداء فائق وتجربة مستخدم سلسة." },
                        { title: "الابتكار", desc: "حلول إبداعية تسبق عصرها." }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1), duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-white/3 border border-white/8 hover:bg-white/8 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                        >
                            <h3 className="text-3xl font-bold mb-4 text-white arabic-heading group-hover:text-red-100 transition-colors">{item.title}</h3>
                            <p className="text-red-100/60 arabic-text leading-relaxed text-lg">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

         </div>

      </div>

    </section>
  );
}
