'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { services } from '@/data/content';
import Section from '@/components/ui/Section';
import { SectionEyebrow, SectionHeading, SectionSubheading } from '@/components/ui/Typography';

export default function Services() {
  return (
    <Section 
      id="services" 
      backgroundDecoration={
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-b from-white via-accent-50/20 to-white opacity-50" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-100/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-200/5 blur-[150px] rounded-full" />
        </div>
      }
    >
      <div className="mb-32 text-center md:text-left">
          <Reveal>
              <SectionEyebrow>Our Specialized Skills</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
              <SectionHeading className="leading-[0.85] text-6xl md:text-9xl">
                  Our <br className="md:hidden" />
                  <span className="font-serif italic text-accent-500 font-normal ml-2">Expertise.</span>
              </SectionHeading>
          </Reveal>
          <Reveal delay={0.2}>
              <SectionSubheading className="max-w-2xl text-balance">
                  We provide high-fidelity solutions ranging from artistic creative direction to complex, 
                  intelligent engineering systems.
              </SectionSubheading>
          </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Reveal key={index} delay={index * 0.05} className={service.className} width="100%">
          <motion.div 
             whileHover={{ y: -8 }}
             transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
             className="group relative p-10 md:p-14 bg-white rounded-sm border border-neutral-100 hover:border-accent-200/50 transition-all duration-700 flex flex-col justify-between overflow-hidden min-h-[350px]"
          >
            {/* Card Background Effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-accent-50/10" />
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="text-accent-500 p-2 bg-accent-50/30 rounded-full group-hover:scale-110 group-hover:bg-accent-100 transition-all duration-700">
                  <service.icon strokeWidth={1} size={32} />
                </div>
                <span className="text-6xl font-serif text-neutral-50 group-hover:text-accent-100/50 transition-colors duration-700 select-none">
                  0{index + 1}
                </span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-serif text-neutral-900 mb-6 font-normal group-hover:text-accent-700 transition-colors duration-500">
                  {service.title}
              </h3>
              <p className="text-neutral-500 group-hover:text-neutral-600 transition-colors leading-relaxed font-light text-balance">
                {service.description}
              </p>
            </div>

            {/* Decorative Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-100 group-hover:bg-accent-200/50 transition-colors duration-700" />
          </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
