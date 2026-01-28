'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    name: "جاسم كريم",
    nameEn: "Jasim Karim",
    role: "المؤسس الشريك / المدير التقني",
    roleEn: "CTO / Tech Architect",
    desc: "المعماري التقني وراء النواة العصبية والأنظمة الموزعة."
  },
  {
    name: "حسان زيني",
    nameEn: "Hassan Zaini",
    role: "المؤسس الشريك / المدير الإبداعي",
    roleEn: "Creative Director / Visual Soul",
    desc: "حارس الرؤية الجمالية والنماذج التفاعلية المبتكرة."
  },
  {
    name: "أحمد صبحي",
    nameEn: "Ahmed Sobhi",
    role: "المؤسس الشريك / مدير الأتمتة",
    roleEn: "Automation & Data Director",
    desc: "سيد الكفاءة الخوارزمية والإستراتيجية القائمة على المنطق."
  }
];

export default function Team() {
  React.useEffect(() => {
    gsap.fromTo(".team-heading-reveal", 
      { opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 30 },
      { 
        opacity: 1, 
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".team-heading-reveal",
          start: "top 90%",
        }
      }
    );
  }, []);

  return (
    <section id="studio" className="py-40 px-6 relative bg-zinc-950 overflow-hidden mesh-gradient-tech">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-right"
        >
            <span className="text-xs text-zinc-500 mb-4 block font-light team-heading-reveal">مؤسسو التغيير</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-relaxed arabic-impact pb-4 pt-2 team-heading-reveal">
                العقول <br/> <span className="text-zinc-500">خلف العمل</span>
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map((founder, i) => (
                <SpotlightCard 
                  key={founder.name} 
                  delay={i * 0.1}
                  className="glass-vibrant rounded-2xl group transition-all hover:-translate-y-2 duration-500"
                >
                    <div className="relative h-full min-h-[500px] flex flex-col p-12 justify-between overflow-hidden">
                        {/* Biometric Scanner Effect */}
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-electric-violet/50 to-transparent blur-sm animate-scanner" />
                        </div>

                        <div className="relative z-10">
                             <span className="text-xs text-zinc-600 font-light block group-hover:text-electric-violet transition-colors">
                                 {founder.roleEn}
                             </span>
                        </div>
                        
                        <div className="text-right relative z-10">
                            <p className="text-zinc-400 text-sm mb-4 font-bold">{founder.role}</p>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 arabic-impact pb-2">
                                {founder.name}
                            </h3>
                            <p className="text-zinc-400 text-base leading-relaxed font-normal max-w-[240px]">
                                {founder.desc}
                            </p>
                        </div>

                        {/* Detail Decor */}
                        <div className="absolute top-12 left-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                             <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                                 <div className="w-1 h-1 rounded-full bg-electric-violet animate-pulse" />
                             </div>
                        </div>
                    </div>
                </SpotlightCard>
            ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-linear-to-tl from-zinc-900/20 to-transparent blur-[120px] pointer-events-none" />
    </section>
  );
}
