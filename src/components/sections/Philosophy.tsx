'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { philosophyPrinciples } from '@/data/content';
import Section from '@/components/ui/Section';
import { SectionEyebrow, SectionHeading } from '@/components/ui/Typography';

export default function Philosophy() {
  return (
    <Section 
      id="philosophy" 
      backgroundDecoration={
        <>
          <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-neutral-100 to-transparent" />
          {/* Visual background accent - Optimized with will-change and reduced complexity */}
          <motion.div 
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              rotate: { duration: 60, repeat: Infinity, ease: "linear" }, 
            }}
            style={{ willChange: 'transform' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-neutral-50 rounded-full -z-10 pointer-events-none opacity-50"
          />
        </>
      }
    >
      <div className="text-center mb-20">
        <Reveal width="100%">
          <SectionEyebrow>Our DNA</SectionEyebrow>
        </Reveal>
        <Reveal width="100%" delay={0.1}>
          <SectionHeading>
             The <span className="font-serif italic text-accent-500 font-normal">Foundation.</span>
          </SectionHeading>
        </Reveal>
      </div>

      <div className="flex flex-col">
        {philosophyPrinciples.map((p, i) => (
          <React.Fragment key={i}>
            <div className={`flex flex-col ${p.align === 'right' ? 'md:items-end' : 'md:items-start'} relative`}>
              <div className={`max-w-xl ${p.align === 'right' ? 'md:text-right' : 'md:text-left'} bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-neutral-50 shadow-sm relative z-20`}>
                <Reveal delay={0.2}>
                  <p className="text-accent-500 font-serif italic text-2xl mb-4">Principle 0{i + 1}</p>
                </Reveal>
                <Reveal delay={0.3}>
                  <h3 className="text-4xl md:text-5xl font-black text-neutral-950 uppercase tracking-tighter mb-6 leading-none">
                    {p.title}
                  </h3>
                </Reveal>
                <Reveal delay={0.4}>
                  <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
                    {p.description}
                  </p>
                </Reveal>
              </div>
            </div>
            
            {/* Connector */}
            {i < philosophyPrinciples.length - 1 && (
              <Connector direction={p.align === 'left' ? 'ltr' : 'rtl'} />
            )}
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
}

function Connector({ direction }: { direction: 'ltr' | 'rtl' }) {
  const pathD = direction === 'ltr'
    ? "M 100 0 C 100 100, 900 100, 900 200"
    : "M 900 0 C 900 100, 100 100, 100 200";

  return (
    <div className="w-full h-[200px] relative -my-10 z-10 hidden md:block pointer-events-none">
       <svg 
         viewBox="0 0 1000 200" 
         className="w-full h-full" 
         preserveAspectRatio="none"
         style={{ overflow: 'visible' }}
       >
         <path 
           d={pathD}
           fill="none"
           stroke="currentColor"
           strokeWidth="1"
           className="text-neutral-100"
         />
         <motion.path 
            d={pathD}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent-400"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
         />
       </svg>
    </div>
  );
}
