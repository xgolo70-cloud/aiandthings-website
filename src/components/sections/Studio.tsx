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
  // Map scroll to horizontal movement (RTL: move positive X to slide left-to-right)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section ref={targetRef} id="studio-collective" className="relative h-[300vh] bg-black border-t border-white/5">
      
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Section Title - Fixed */}
        <div className="absolute top-24 right-6 md:right-20 z-20 text-right">
             <span className="text-xs text-zinc-500 mb-4 block font-light">الفريق الإبداعي</span>
             <h2 className="text-4xl md:text-7xl font-bold text-white mt-4 arabic-impact">
                 التنفيذ <br/> <span className="text-zinc-500">الإبداعي</span>
             </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 pr-[30vw] md:pr-[40vw] items-center">
          {team.map((member, i) => (
            <div key={i} className="relative w-[70vw] md:w-[25vw] shrink-0 group">
               <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 group-hover:border-electric-violet/30 transition-all duration-700 ease-out shadow-2xl">
                   <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
               
               <div className="mt-8 px-2 text-right">
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 arabic-impact">
                       {member.name}
                   </h3>
                   <p className="text-xs text-zinc-500 font-light">
                       {member.role}
                   </p>
               </div>
            </div>
          ))}
          
          {/* Join Us Card */}
          <div className="relative w-[70vw] md:w-[25vw] shrink-0 aspect-3/4 flex items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30 group cursor-pointer hover:border-white/20 transition-all">
              <span className="text-sm font-bold text-zinc-600 uppercase group-hover:text-white transition-colors arabic-impact">انضم إلينا</span>
              <div className="absolute inset-0 bg-electric-violet/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

        </motion.div>
      </div>

    </section>
  );
}
