'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const founders = [
  {
    name: "جاسم كريم",
    nameEn: "Jasim Karim",
    role: "المؤسس الشريك / المدير التقني",
    roleEn: "CTO / Tech Architect",
    desc: "المعماري التقني وراء النواة العصبية والأنظمة الموزعة.",
    image: "/images/Artboard 4.svg",
    id: "01"
  },
  {
    name: "حسن زيني",
    nameEn: "Hassan Zaini",
    role: "المؤسس الشريك / المدير الإبداعي",
    roleEn: "Creative Director",
    desc: "حارس الرؤية الجمالية والنماذج التفاعلية المبتكرة.",
    image: "/images/Artboard 5.svg",
    id: "02"
  },
  {
    name: "أحمد صبحي",
    nameEn: "Ahmed Sobhi",
    role: "المؤسس الشريك / مدير الأتمتة",
    roleEn: "Automation Director",
    desc: "سيد الكفاءة الخوارزمية والإستراتيجية القائمة على المنطق.",
    image: "/images/Artboard 6.svg",
    id: "03"
  }
];

function TeamCard({ founder }: { founder: typeof founders[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group w-full aspect-4/5 rounded-4xl overflow-hidden bg-zinc-900 border border-white/5"
    >
      <Image
        src={founder.image}
        alt={founder.name}
        fill
        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
      />
      
      {/* HUD Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-8 z-10">
         {/* Glass Panel */}
         <div className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-colors overflow-hidden">
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />
            
            <div className="text-right">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2 arabic-text">
                    Node {founder.id} {" // "} {founder.roleEn}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2 arabic-heading">
                    {founder.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed arabic-text max-h-0 group-hover:max-h-24 transition-all duration-500 overflow-hidden opacity-0 group-hover:opacity-100">
                    {founder.desc}
                </p>
            </div>
         </div>
      </div>

      {/* Glossy Reflection */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-tr from-white/10 via-transparent to-transparent" />
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-40 px-6 relative bg-black overflow-hidden border-t border-white/5">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[100px_100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-right"
        >
            <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-0.5 bg-zinc-400" />
                <span className="text-sm font-medium text-zinc-500 arabic-text uppercase tracking-normal">
                    القيادة
                </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight arabic-heading">
                العقول <span className="text-zinc-700">المدبرة</span>
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {founders.map((founder) => (
                <TeamCard key={founder.id} founder={founder} />
            ))}
        </div>
      </div>
    </section>
  );
}
