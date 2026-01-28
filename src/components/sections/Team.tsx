'use client';

import React from 'react';
import { motion } from 'framer-motion';

const founders = [
  {
    name: "جاسم كريم",
    nameEn: "Jasim Karim",
    role: "المؤسس الشريك / المدير التقني",
    roleEn: "CTO / Tech Architect",
    desc: "المعماري التقني وراء النواة العصبية والأنظمة الموزعة."
  },
  {
    name: "حسن زيني",
    nameEn: "Hassan Zaini",
    role: "المؤسس الشريك / المدير الإبداعي",
    roleEn: "Creative Director",
    desc: "حارس الرؤية الجمالية والنماذج التفاعلية المبتكرة."
  },
  {
    name: "أحمد صبحي",
    nameEn: "Ahmed Sobhi",
    role: "المؤسس الشريك / مدير الأتمتة",
    roleEn: "Automation Director",
    desc: "سيد الكفاءة الخوارزمية والإستراتيجية القائمة على المنطق."
  }
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 relative bg-zinc-50 overflow-hidden border-t border-zinc-200 text-black">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-right"
        >
            <span className="text-zinc-500 arabic-text text-sm uppercase tracking-normal block mb-4">
                القيادة
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-tight arabic-heading">
                العقول <span className="text-zinc-400">المدبرة</span>
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
                <div 
                  key={founder.name} 
                  className="group relative bg-white border border-zinc-200 rounded-2xl p-8 hover:border-zinc-900 transition-all duration-500 hover:shadow-xl"
                >
                    <div className="flex flex-col h-full justify-between">
                        <div className="mb-8">
                             <div className="flex items-center gap-3 text-xs font-bold tracking-normal text-zinc-400 mb-4 uppercase arabic-text">
                                 <span>{founder.roleEn}</span>
                             </div>
                             <h3 className="text-3xl font-bold text-zinc-900 mb-4 arabic-heading">
                                {founder.name}
                            </h3>
                            <p className="text-zinc-500 text-lg leading-relaxed arabic-text">
                                {founder.desc}
                            </p>
                        </div>
                        
                        <div className="w-full h-px bg-zinc-100 group-hover:bg-zinc-900 transition-colors duration-500" />
                        
                        <div className="pt-6 text-right">
                           <span className="text-xs font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors arabic-text">
                               {founder.role}
                           </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
