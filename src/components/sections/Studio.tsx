'use client';

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';

const team = [
  {
    name: "Jassem Karim",
    role: "Co-Founder & CTO",
    bio: "Leading our technical strategy and AI infrastructure.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1200&fit=crop&q=80", 
    className: "",
    yOffset: 0,
  },
  {
    name: "Hassan Zaini",
    role: "Co-Founder & Creative Director",
    bio: "Curating the aesthetic and user experience of every product.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1200&fit=crop&q=80", 
    className: "md:mt-32",
    yOffset: 50,
  },
  {
    name: "Ahmed Sobhi",
    role: "Co-Founder & Automation Lead",
    bio: "Streamlining complex workflows with intelligent automation.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1200&fit=crop&q=80", 
    className: "md:mt-64",
    yOffset: 100,
  }
];

function ParallaxCard({ member, index }: { member: typeof team[0], index: number }) {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, member.yOffset]);

    return (
        <Reveal key={index} delay={index * 0.2} className={member.className} width="100%" overflowVisible fullHeight>
            <motion.div style={{ y }} className="h-full">
                <motion.div 
                    ref={ref}
                    className="group relative h-full w-full overflow-hidden rounded-[2.5rem] bg-neutral-50 shadow-2xl shadow-neutral-200/40 transform-gpu"
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                </div>
                
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gold-200/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 scale-50 group-hover:scale-100 focus-within:opacity-100 focus-within:scale-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-300 animate-pulse" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-10 z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <p className="text-gold-200/90 text-[10px] uppercase tracking-[0.3em] font-semibold mb-3">{member.role}</p>
                    <h3 className="text-3xl font-serif text-white mb-3 leading-tight">{member.name}</h3>
                    <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                        <p className="text-neutral-300 text-xs leading-relaxed max-w-xs pb-4 font-light">
                            {member.bio}
                        </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
        </Reveal>
    );
}

export default function Studio() {
  return (
    <section id="studio" className="py-24 px-6 bg-white relative">
      {/* Golden artistic background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-gold-100/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -translate-x-1/3 w-[800px] h-[800px] bg-gold-200/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-end">
            <div>
                <Reveal overflowVisible>
                    <span className="text-gold-400 font-medium tracking-[0.3em] uppercase text-xs mb-6 block">Our Workspace</span>
                    <h2 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 font-display text-neutral-950 leading-[0.85]">
                        The <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-gold-500 via-gold-200 to-gold-400 animate-shimmer bg-size-[200%_auto]">Studio.</span>
                    </h2>
                </Reveal>
            </div>
            <div className="space-y-10 text-xl text-neutral-500 leading-relaxed font-light lg:pb-4">
                <Reveal delay={0.2} overflowVisible>
                    <p className="font-serif italic text-3xl text-neutral-900 border-l-2 border-gold-300 pl-8">
                        &ldquo;Crafting the digital future with an artisan&apos;s touch.&rdquo;
                    </p>
                    <p className="mt-8 text-lg max-w-lg">
                        We don&apos;t just write code; we curate experiences. Our studio is a laboratory 
                        where pure logic transcends into digital sculpture.
                    </p>
                </Reveal>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[250px] gap-6">
          {team.map((member, index) => (
            <ParallaxCard key={index} member={member} index={index} />
          ))}
        </div>
        
        <div className="mt-40 relative flex items-center justify-center">
            <div className="w-full h-px bg-linear-to-r from-transparent via-gold-300/20 to-transparent" />
            <div className="absolute w-2 h-2 rounded-full bg-gold-400/40 blur-xs" />
            <div className="absolute w-1 h-1 rounded-full bg-gold-500" />
        </div>
      </div>
    </section>
  );
}
