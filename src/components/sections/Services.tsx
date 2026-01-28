'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Palette } from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: React.ElementType;
  delay?: number;
  className?: string;
}

function ServiceCard({ title, desc, icon: Icon, delay = 0, className = "" }: ServiceCardProps) {
  return (
    <SpotlightCard delay={delay} className={`${className} glass-vibrant rounded-2xl group relative overflow-hidden`}>
      {/* Interactive Data Particles */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-electric-cyan/20 to-transparent animate-data-flow" style={{ animationDelay: '0s' }} />
          <div className="absolute top-0 left-2/4 w-px h-full bg-linear-to-b from-transparent via-electric-violet/20 to-transparent animate-data-flow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-0 left-3/4 w-px h-full bg-linear-to-b from-transparent via-electric-cyan/20 to-transparent animate-data-flow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative h-full flex flex-col p-12 lg:p-16 z-10">
        <div className="mb-12">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 transition-transform"
            >
                <Icon size={20} className="text-zinc-500 group-hover:text-electric-violet transition-colors" />
            </motion.div>
        </div>
        
        <div className="mt-auto text-right">
            <div className="flex items-center gap-3 mb-4 group/label">
                <div className="w-1.5 h-1.5 rounded-full bg-electric-violet shadow-[0_0_10px_#7c3aed]" />
                <div className="flex items-center gap-1 text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500">
                    <span className="text-zinc-800 font-mono text-base">[</span>
                    <span className="arabic-impact px-2 group-hover/label:text-zinc-300 transition-colors cursor-default">التخصص الفني</span>
                    <span className="text-zinc-800 font-mono text-base">]</span>
                </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 arabic-impact pb-2 pt-1 leading-relaxed">{title}</h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal max-w-sm">{desc}</p>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function Services() {
  React.useEffect(() => {
    gsap.fromTo(".services-heading-reveal", 
      { opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 30 },
      { 
        opacity: 1, 
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services-heading-reveal",
          start: "top 90%",
        }
      }
    );
  }, []);

  return (
    <section id="services" className="py-40 bg-zinc-950 relative overflow-hidden border-t border-white/5 mesh-gradient-tech">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-right"
        >
            <div className="flex items-center justify-end gap-3 mb-8 group/label services-heading-reveal">
                <div className="w-1.5 h-1.5 rounded-full bg-electric-violet shadow-[0_0_10px_#7c3aed]" />
                <div className="flex items-center gap-1 text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-500">
                    <span className="text-zinc-800 font-mono text-base">[</span>
                    <span className="arabic-impact px-2 group-hover/label:text-zinc-300 transition-colors cursor-default">مجالات التميز</span>
                    <span className="text-zinc-800 font-mono text-base">]</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan shadow-[0_0_10px_#06b6d4]" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-relaxed arabic-impact pb-4 pt-2 services-heading-reveal">
                الخبرات <br/> <span className="text-zinc-500">الأساسية</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed services-heading-reveal">
                حلول رقمية متكاملة مصممة بدقة لتلبي متطلبات المستقبل الذكي.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-transparent">
            <ServiceCard 
                title="هندسة الويب المتطورة" 
                desc="بناء بنى تحتية رقمية قوية وقابلة للتوسع. معمارية تركز على الأداء الفائق وتجربة المستخدم السلسة."
                icon={Code}
                className="md:col-span-8 h-full"
                delay={0}
            />

            <ServiceCard 
                title="تكامل الذكاء الاصطناعي" 
                desc="تنفيذ وكلاء عصبيين مخصصين وأتمتة ذكية."
                icon={Brain}
                className="md:col-span-4 h-full"
                delay={0.1}
            />

            <ServiceCard 
                title="التوجيه الإبداعي" 
                desc="تصميم واجهات عالمية تعتمد على العمق والفيزياء."
                icon={Palette}
                className="md:col-span-4 h-full"
                delay={0.2}
            />
            
            <div className="md:col-span-8 glass-vibrant flex items-center justify-center p-20 rounded-2xl group relative overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-center group cursor-pointer relative z-10">
                    <h3 className="text-4xl md:text-6xl font-bold text-white/50 group-hover:text-white transition-colors duration-500">هل لديك فكرة؟</h3>
                    <p className="mt-4 text-xs font-light text-electric-cyan">لنصنعها معاً</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
