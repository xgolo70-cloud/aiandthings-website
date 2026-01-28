'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Palette } from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard';

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
      <div className="absolute inset-0 bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full flex flex-col p-12 lg:p-16">
        <div className="mb-12">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 transition-transform"
            >
                <Icon size={20} className="text-zinc-500 group-hover:text-electric-violet transition-colors" />
            </motion.div>
        </div>
        
        <div className="mt-auto text-right">
            <span className="text-xs text-zinc-500 mb-4 block font-light">التخصص الفني</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 arabic-impact pb-2 pt-1 leading-relaxed">{title}</h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal max-w-sm">{desc}</p>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-40 bg-zinc-950 relative overflow-hidden border-t border-white/5 mesh-gradient-tech">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-right"
        >
            <span className="text-xs text-zinc-500 mb-4 block font-light">مجالات التميز</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-relaxed arabic-impact pb-4 pt-2">
                الخبرات <br/> <span className="text-zinc-500">الأساسية</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
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
