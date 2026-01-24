'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

const projects = [
  {
    category: "AI Platform",
    title: "NeuroCore Analytics",
    description: "Enterprise-grade predictive analytics dashboard for financial institutions.",
    year: "2024",
    image: "/images/ai_platform_project_1769192363142.png"
  },
  {
    category: "Mobile App",
    title: "Vantage Health",
    description: "Patient companion app with real-time biometric tracking and AI consultation.",
    year: "2023",
    image: "/images/health_tech_project_1769192377210.png"
  },
  {
    category: "Web Design",
    title: "Lumina Studios",
    description: "Immersive portfolio experience for an award-winning architectural firm.",
    year: "2023",
    image: "/images/architecture_design_project_1769192398877.png"
  },
  {
    category: "Branding",
    title: "Echo Systems",
    description: "Complete brand identity and design system for a robotics startup.",
    year: "2024",
    image: "/images/branding_identity_project_1769192413853.png"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-white relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-accent-100/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-accent-50/50 rounded-full blur-[100px]" />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
                 <Reveal>
                    <span className="text-accent-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Our Portfolio
                    </span>
                 </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 font-display text-neutral-950 text-balance leading-[0.9]">
                        Selected <br />
                        <span className="font-serif italic text-accent-500 font-normal">Work.</span>
                    </h2>
                </Reveal>
            </div>
            
            <Reveal delay={0.2}>
                <div className="flex flex-col items-start md:items-end gap-4">
                    <p className="text-neutral-500 text-lg max-w-sm font-light leading-relaxed text-balance md:text-right">
                        A curation of our most impactful digital artifacts, merging intelligence with beauty.
                    </p>
                    <button className="group hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-neutral-800 hover:text-accent-500 transition-colors">
                        View All Projects
                        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                </div>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project, index) => (
                <div 
                    key={index} 
                    className={`${index % 2 === 1 ? 'md:mt-32' : ''}`} // Staggered Layout for 2nd column
                >
                 <Reveal delay={index * 0.1} width="100%" fullHeight>
                    <div className="group block cursor-pointer">
                        {/* Image Container */}
                        <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm mb-8">
                            <Image 
                                src={project.image} 
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                            />
                            {/* Premium Overlays */}
                             <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500" />
                             <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                             
                             {/* Hover Border Glow */}
                             <div className="absolute inset-0 border border-accent-200/0 group-hover:border-accent-300/50 transition-colors duration-500 scale-95 group-hover:scale-100" />
                        </div>

                        {/* Content */}
                        <div className="flex justify-between items-start border-t border-neutral-200 pt-6 group-hover:border-accent-300/30 transition-colors duration-500">
                             <div>
                                <span className="text-xs font-bold tracking-widest text-accent-500 uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-serif text-neutral-900 group-hover:text-accent-600 transition-colors duration-300">
                                    {project.title}
                                </h3>
                             </div>
                             <span className="text-neutral-400 font-display text-sm">
                                {project.year}
                             </span>
                        </div>
                        <p className="mt-3 text-neutral-500 max-w-sm text-sm leading-relaxed line-clamp-2 bg-linear-to-r from-neutral-500 to-neutral-500 bg-size-[0%_1px] bg-no-repeat group-hover:bg-size-[100%_1px] transition-all duration-500 ease-out bg-bottom-left pb-1">
                            {project.description}
                        </p>
                    </div>
                 </Reveal>
                </div>
            ))}
        </div>
        
        <div className="mt-24 flex justify-center md:hidden">
             <button className="flex items-center gap-2 border-b border-neutral-900 pb-1 text-neutral-900 font-medium uppercase tracking-widest text-sm">
                View all projects <ArrowUpRight size={14} />
            </button>
        </div>
      </div>
    </section>
  );
}
