'use client';

import React from 'react';
import { 
  Cpu, 
  Palette, 
  Layout, 
  Search, 
  BarChart3, 
  Code2 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';

const services = [
  {
    icon: <Code2 strokeWidth={1} size={32} />,
    title: "Integrated Software",
    description: "Robust, scalable software solutions tailored to your unique business needs.",
    className: "md:col-span-2",
  },
  {
    icon: <Cpu strokeWidth={1} size={32} />,
    title: "AI Solutions",
    description: "Custom AI models and tools to automate and empower your workflow.",
    className: "md:col-span-1",
  },
  {
    icon: <Layout strokeWidth={1} size={32} />,
    title: "Creative Interfaces",
    description: "Stunning, user-centric frontend designs that captivate and convert.",
    className: "md:col-span-1",
  },
  {
    icon: <Palette strokeWidth={1} size={32} />,
    title: "Brand Design",
    description: "Forging memorable brand identities that resonate with your audience.",
    className: "md:col-span-2",
  },
  {
    icon: <BarChart3 strokeWidth={1} size={32} />,
    title: "Data Analysis",
    description: "Turning raw data into actionable insights for smarter decision making.",
    className: "md:col-span-1",
  },
  {
    icon: <Search strokeWidth={1} size={32} />,
    title: "R&D",
    description: "Exploring the cutting edge of technology to keep you ahead of the curve.",
    className: "md:col-span-2",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Ambient Artistic Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-b from-white via-accent-50/20 to-white opacity-50" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-100/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-200/5 blur-[150px] rounded-full" />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 text-center md:text-left">
            <Reveal>
                <span className="text-accent-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">
                    Our Specialized Skills
                </span>
            </Reveal>
            <Reveal delay={0.1}>
                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 font-display text-neutral-950 leading-[0.85]">
                    Our <br className="md:hidden" />
                    <span className="font-serif italic text-accent-500 font-normal ml-2">Expertise.</span>
                </h2>
            </Reveal>
            <Reveal delay={0.2}>
                <p className="text-neutral-500 text-xl max-w-2xl font-light leading-relaxed text-balance">
                    We provide high-fidelity solutions ranging from artistic creative direction to complex, 
                    intelligent engineering systems.
                </p>
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
                    {service.icon}
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
      </div>
    </section>
  );
}
