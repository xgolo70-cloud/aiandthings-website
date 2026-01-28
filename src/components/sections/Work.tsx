'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard';

const projects = [
  {
    id: "01",
    client: "Nexus Finance",
    title: "Algorithmic Trading Interface",
    description: "Redefining how financial data is visualized for the modern era. High-performance dashboards for real-time decision making.",
    image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?w=800&h=600&fit=crop&q=80",
    color: "from-electric-violet/20",
    size: "md:col-span-2"
  },
  {
    id: "02",
    client: "Aether Health",
    title: "Diagnostic Neural Net",
    description: "Empowering doctors with intuitive AI-assisted diagnostic tools.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80",
    color: "from-electric-cyan/20",
    size: "md:col-span-1"
  },
  {
    id: "03",
    client: "Orbital Logistics",
    title: "Global Fleet Telemetry",
    description: "Streamlining global supply chains with intelligent routing.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80",
    color: "from-brand-blue/20",
    size: "md:col-span-1"
  },
  {
    id: "04",
    client: "Synthesis",
    title: "Unstructured Data Engine",
    description: "Transforming raw noise into actionable intelligence through autonomous processing.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80",
    color: "from-electric-violet/20",
    size: "md:col-span-2"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
        >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Selected <span className="text-zinc-500">projects.</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                A showcase of high-precision systems and autonomous interfaces built for industry leaders.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
                <SpotlightCard 
                  key={project.id} 
                  delay={i * 0.1}
                  className={`${project.size} group min-h-[400px] md:min-h-[500px] border-white/5`}
                >
                    <div className="relative h-full flex flex-col p-8 md:p-12 overflow-hidden">
                        {/* Radiant Background */}
                        <div className={`absolute -top-24 -right-24 w-64 h-64 bg-linear-to-br ${project.color} to-transparent blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                        
                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <div>
                                <p className="text-[10px] font-mono text-zinc-500 mb-1 uppercase tracking-widest">{project.client}</p>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>

                        <div className="relative mt-auto pt-8">
                             <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 mb-8 shadow-2xl">
                                <Image 
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                             </div>
                             <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-md">
                                {project.description}
                             </p>
                        </div>
                    </div>
                </SpotlightCard>
            ))}
        </div>
      </div>
    </section>
  );
}
