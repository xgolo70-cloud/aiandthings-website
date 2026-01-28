'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const team = [
  {
    name: "أليكساندر",
    role: "المدير التقني",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1600&fit=crop&q=80",
  },
  {
    name: "سارة ميلر",
    role: "رئيسة المصممين",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=1600&fit=crop&q=80",
  },
  {
    name: "ديفيد بارك",
    role: "تقني إبداعي",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&h=1600&fit=crop&q=80",
  },
  {
    name: "إيلينا ر.",
    role: "إستراتيجية",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=1600&fit=crop&q=80",
  }
];

export default function Studio() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  // Map scroll to horizontal movement (RTL: positive X moves content leftwards in typical RTL, but here we want slide effect)
  // Standard CSS transform translateX in RTL context behavior can vary, assuming LTR logic for transform:
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={targetRef} id="studio-collective" className="relative h-[300vh] bg-black border-t border-zinc-900">
      
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Section Title - Fixed */}
        <div className="absolute top-24 right-6 md:right-20 z-20 text-right pointer-events-none">
             <span className="text-xs text-zinc-500 mb-4 block font-light uppercase tracking-widest">الفريق الإبداعي</span>
             <h2 className="text-4xl md:text-7xl font-bold text-white mt-4 arabic-heading">
                 التنفيذ <br/> <span className="text-zinc-600">الإبداعي</span>
             </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 pr-[30vw] md:pr-[40vw] items-center">
          {team.map((member, i) => (
            <div key={i} className="relative w-[70vw] md:w-[25vw] shrink-0 group">
               <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-zinc-900 transition-all duration-700">
                   <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
               </div>
               
               <div className="mt-6 px-1 text-right">
                   <h3 className="text-2xl font-bold text-white mb-1 arabic-heading">
                       {member.name}
                   </h3>
                   <p className="text-sm text-zinc-500 font-light">
                       {member.role}
                   </p>
               </div>
            </div>
          ))}
          
          {/* Join Us Card */}
          <div className="relative w-[70vw] md:w-[25vw] shrink-0 aspect-3/4 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/20 group cursor-pointer hover:bg-zinc-900 transition-all">
              <span className="text-sm font-bold text-zinc-500 uppercase group-hover:text-white transition-colors tracking-widest">انضم إلينا</span>
          </div>

        </motion.div>
      </div>

    </section>
  );
}
