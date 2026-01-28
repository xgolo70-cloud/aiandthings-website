'use client';

import React, { useEffect } from 'react';
import { Command, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  sitemap: [
    { name: 'أعمالنا', href: '#works' },
    { name: 'الخبرات', href: '#services' },
    { name: 'الفريق', href: '#studio-collective' },
  ],
  company: [
    { name: 'عن نيكسوس', href: '#' },
    { name: 'المعماريّة', href: '#' },
    { name: 'سياسة الخصوصيّة', href: '#' },
    { name: 'الأمن', href: '#' },
  ]
};

export default function Footer() {
  useEffect(() => {
    // Reveal animation for footer elements
    gsap.fromTo(".footer-reveal", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-container",
          start: "top 80%",
        }
      }
    );

    // Decorative brand reveal
    gsap.fromTo(".footer-brand-word", 
      { opacity: 0, scale: 0.9, filter: "blur(10px)" },
      { 
        opacity: 0.05, 
        scale: 1, 
        filter: "blur(0px)", 
        duration: 2,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".footer-brand-chars",
          start: "top 95%",
        }
      }
    );
  }, []);

  return (
    <footer className="relative bg-black pt-40 pb-12 px-6 overflow-hidden border-t border-white/5 footer-container">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 z-0">
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric-violet/10 blur-[140px] rounded-full mix-blend-screen animate-pulse" />
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-electric-cyan/5 blur-[120px] rounded-full mix-blend-screen" />
          
          {/* Precision Grid Overlay - Continuity from Hero */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_100%,#000_60%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 text-right">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-right footer-reveal">
              <a href="#" className="flex items-center gap-4 group mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-electric-violet/20 group-hover:border-electric-violet/50">
                    <Command size={24} className="text-white" />
                  </div>
                  <span className="text-3xl font-bold text-white arabic-impact tracking-tighter">
                      الذكاء والأشياء
                  </span>
              </a>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-sm font-normal mb-8">
                  نبني البنية التحتية الرقمية للمستقبل، حيث الهندسة الدقيقة تلتقي بالإبداع الذي لا يعرف الحدود.
              </p>
              <div className="flex gap-4">
                  {[Twitter, Github, Linkedin].map((Icon, i) => (
                      <motion.a 
                        key={i} 
                        href="#" 
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all duration-300"
                      >
                          <Icon size={18} />
                      </motion.a>
                  ))}
              </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-4 lg:col-span-2 footer-reveal">
              <div className="flex items-center justify-end gap-3 mb-8 group/label">
                  <span className="text-zinc-800 font-mono text-xs">[</span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest arabic-impact">التنقّل</span>
                  <span className="text-zinc-800 font-mono text-xs">]</span>
              </div>
              <ul className="flex flex-col gap-4">
                  {footerLinks.sitemap.map((link) => (
                      <li key={link.name}>
                          <a href={link.href} className="text-zinc-500 hover:text-white transition-all duration-300 flex items-center justify-end gap-2 group">
                              <span className="text-sm font-medium">{link.name}</span>
                              <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </a>
                      </li>
                  ))}
              </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2 footer-reveal">
              <div className="flex items-center justify-end gap-3 mb-8 group/label">
                  <span className="text-zinc-800 font-mono text-xs">[</span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest arabic-impact">الشركة</span>
                  <span className="text-zinc-800 font-mono text-xs">]</span>
              </div>
              <ul className="flex flex-col gap-4">
                  {footerLinks.company.map((link) => (
                      <li key={link.name}>
                          <a href={link.href} className="text-zinc-500 hover:text-white transition-all duration-300 flex items-center justify-end gap-2 group">
                              <span className="text-sm font-medium">{link.name}</span>
                              <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </a>
                      </li>
                  ))}
              </ul>
          </div>

          {/* Newsletter Redesign */}
          <div className="md:col-span-12 lg:col-span-3 footer-reveal">
               <div className="flex items-center justify-end gap-3 mb-8 group/label">
                  <span className="text-zinc-800 font-mono text-xs">[</span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest arabic-impact">المجلة التقنية</span>
                  <span className="text-zinc-800 font-mono text-xs">]</span>
              </div>
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                  أنضم لـ 10,000+ مهندس ومبدع.
              </p>
              <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-r from-electric-violet/20 to-electric-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-1.5 focus-within:border-white/20 transition-all">
                    <input 
                        type="email" 
                        placeholder="البريد الإلكتروني" 
                        className="w-full bg-transparent px-4 py-3 text-sm text-white focus:outline-none text-right"
                    />
                    <button className="bg-white text-black px-6 py-3 rounded-xl text-xs font-bold hover:bg-electric-cyan transition-all shrink-0">
                        اشتراك
                    </button>
                  </div>
              </div>
          </div>
        </div>

        {/* Cinematic Brand Reveal - Background Text */}
        <div className="mt-20 mb-12 text-center relative pointer-events-none footer-brand-chars">
          <h2 className="text-[14vw] font-bold text-white/5 uppercase tracking-tighter leading-none arabic-impact flex justify-center gap-[0.2em] whitespace-nowrap overflow-hidden">
            {"الذكاء والأشياء".split(" ").map((word, i) => (
                <span key={i} className="footer-brand-word inline-block">
                    {word}
                </span>
            ))}
          </h2>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 footer-reveal">
            <div className="flex items-center gap-8 text-[11px] font-bold text-zinc-600 arabic-impact tracking-widest">
                <p>© 2026 الذكاء والأشياء</p>
                <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
                <a href="#" className="hover:text-white transition-colors">الأمن السحابي</a>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono font-bold text-zinc-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="tracking-widest uppercase">Systems Online</span>
                </div>
                <span className="text-[10px] font-bold text-zinc-800 uppercase tracking-widest font-mono">v2.4.0</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
