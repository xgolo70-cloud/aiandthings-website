'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Palette, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Link from 'next/link';
// ... imports

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: React.ElementType;
  className?: string;
  href?: string;
}

function ServiceCard({ title, desc, icon: Icon, className = "", href = "/#contact" }: ServiceCardProps) {
  return (
    <Link href={href} className={`${className} block bg-zinc-900/50 border border-white/10 rounded-2xl p-8 lg:p-12 hover:bg-zinc-900/80 transition-all duration-500 group`}>
        <div className="mb-8 p-3 w-fit rounded-lg bg-zinc-800/50 border border-white/5 group-hover:border-white/20 transition-colors">
            <Icon size={24} className="text-zinc-400 group-hover:text-white transition-colors" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 arabic-heading">{title}</h3>
        <p className="text-zinc-400 leading-relaxed font-light mb-8 max-w-sm">{desc}</p>

        <div className="flex items-center text-sm text-zinc-500 font-medium group-hover:text-white transition-colors gap-2 cursor-pointer">
            <span>اكتشف المزيد</span>
            <ArrowRight size={16} className="group-hover:-translate-x-1 transition-transform" />
        </div>
    </Link>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 bg-zinc-950 text-white relative overflow-hidden border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-right"
        >
            <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-0.5 bg-zinc-500" />
                <span className="text-sm font-medium text-zinc-500 arabic-text uppercase tracking-normal">
                    مجالاتنا
                </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 arabic-heading">
                الخبرات <span className="text-zinc-600">الأساسية</span>
            </h2>
            <p className="text-zinc-400 text-xl font-light max-w-2xl leading-relaxed">
                حلول رقمية متكاملة مصممة بدقة لتلبي متطلبات المستقبل الذكي.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
                <ServiceCard 
                    title="هندسة الويب المتطورة" 
                    desc="بناء بنى تحتية رقمية قوية وقابلة للتوسع. معمارية تركز على الأداء الفائق وتجربة المستخدم السلسة."
                    icon={Code}
                    className="h-full"
                    href="/works"
                />
            </div>

            <div className="md:col-span-4">
                <ServiceCard 
                    title="تكامل الذكاء الاصطناعي" 
                    desc="تنفيذ وكلاء عصبيين مخصصين وأتمتة ذكية."
                    icon={Brain}
                    className="h-full"
                    href="/#contact"
                />
            </div>

            <div className="md:col-span-4">
                <ServiceCard 
                    title="التوجيه الإبداعي" 
                    desc="تصميم واجهات عالمية تعتمد على العمق والفيزياء."
                    icon={Palette}
                    className="h-full"
                    href="/works"
                />
            </div>
            
            <Link href="#contact" className="block md:col-span-8 bg-zinc-100 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between group overflow-hidden relative cursor-pointer hover:bg-white transition-colors duration-500">
                <div className="relative z-10 flex-1">
                    <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-2 arabic-heading">هل لديك مشروع؟</h3>
                    <p className="text-zinc-500 font-light">دعنا نبني شيئاً استثنائياً معاً</p>
                </div>
                <div className="relative z-10 mt-8 md:mt-0">
                    <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight size={24} className="-rotate-45" />
                    </div>
                </div>
            </Link>
        </div>
      </div>
    </section>
  );
}
