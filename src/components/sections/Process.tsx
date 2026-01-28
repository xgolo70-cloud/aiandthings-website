'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "We begin by listening. Understanding your goals, your audience, and the unique challenges you face."
  },
  {
    id: "02",
    title: "Strategy",
    desc: "Defining the structural blueprint. We map out the user journey and technical architecture."
  },
  {
    id: "03",
    title: "Craft",
    desc: "Where design meets engineering. We build with precision, ensuring every pixel and interaction performs."
  },
  {
    id: "04",
    title: "Launch",
    desc: "Deployment is just the beginning. We ensure a seamless transition and scaling for the future."
  }
];

export default function Process() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="process" className="relative h-[300vh] bg-neutral-900 text-white">
      
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 pl-[10vw]">
          {steps.map((step, i) => (
            <div key={i} className="relative w-[80vw] md:w-[60vw] h-[70vh] flex flex-col justify-center shrink-0">
               <span className="text-[15vw] leading-none font-bold text-neutral-800 absolute -top-10 -left-10 z-0 select-none">
                   {step.id}
               </span>
               <div className="relative z-10 glass-panel p-12 border-l border-white/20">
                   <h3 className="text-6xl md:text-8xl font-bold mb-8">
                       {step.title}
                   </h3>
                   <p className="text-xl md:text-2xl font-light text-neutral-400 max-w-2xl leading-relaxed">
                       {step.desc}
                   </p>
               </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
