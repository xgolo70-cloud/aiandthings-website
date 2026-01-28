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
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-container",
          start: "top 85%",
        }
      }
    );

    // Decorative brand reveal
    gsap.fromTo(".footer-brand-word", 
      { opacity: 0, filter: "blur(20px)" },
      { 
        opacity: 0.04, 
        filter: "blur(0px)", 
        duration: 2.5,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".footer-brand-chars",
          start: "top 95%",
        }
      }
    );
  }, []);

  return (
    <footer className="relative bg-black pt-24 pb-12 px-6 overflow-hidden border-t border-white/[0.03] footer-container">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-electric-violet/5 blur-[160px] rounded-[100%] mix-blend-screen" />
          {/* Precision Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-20 text-right">
          
          {/* Brand Column - Anchored Right in RTL */}
          <div className="flex-1 lg:max-w-xs footer-reveal order-1">
              <div className="flex items-center justify-end gap-3 mb-8 group">
                  <span className="text-2xl font-bold text-white arabic-impact">الذكاء والأشياء</span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Command size={20} className="text-white" />
                  </div>
              </div>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                  نبني البنية التحتية الرقمية للمستقبل، حيث الهندسة الدقيقة تلتقي بالإبداع الذي لا يعرف الحدود.
              </p>
              <div className="flex justify-end gap-4">
                  {[Twitter, Github, Linkedin].map((Icon, i) => (
                      <motion.a 
                        key={i} 
                        href="#" 
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-300"
                      >
                          <Icon size={16} />
                      </motion.a>
                  ))}
              </div>
          </div>

          {/* Navigation - Symmetrical Center */}
          <div className="flex gap-12 lg:gap-24 footer-reveal order-2">
              <div>
                  <div className="flex items-center justify-end gap-2 mb-8 text-zinc-500 font-mono text-sm uppercase tracking-widest">
                      <span className="group-hover/col:text-electric-violet transition-colors">التنقّل</span>
                      <span className="text-zinc-800">[</span> 
                      <span className="w-1.5 h-1.5 bg-electric-violet rounded-full inline-block animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                      <span className="text-zinc-800">]</span>
                  </div>
                  <ul className="flex flex-col gap-5">
                      {footerLinks.sitemap.map((link) => (
                          <li key={link.name}>
                              <a href={link.href} className="text-zinc-400 hover:text-white transition-all duration-300 flex items-center justify-end gap-2 group">
                                  <span className="text-base font-medium">{link.name}</span>
                                  <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-electric-violet" />
                              </a>
                          </li>
                      ))}
                  </ul>
              </div>

              <div>
                  <div className="flex items-center justify-end gap-2 mb-8 text-zinc-500 font-mono text-sm uppercase tracking-widest">
                      <span className="group-hover/col:text-electric-cyan transition-colors">الشركة</span>
                      <span className="text-zinc-800">[</span> 
                      <span className="w-1.5 h-1.5 bg-electric-cyan rounded-full inline-block animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                      <span className="text-zinc-800">]</span>
                  </div>
                  <ul className="flex flex-col gap-5">
                      {footerLinks.company.map((link) => (
                          <li key={link.name}>
                              <a href={link.href} className="text-zinc-400 hover:text-white transition-all duration-300 flex items-center justify-end gap-2 group">
                                  <span className="text-base font-medium">{link.name}</span>
                                  <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-electric-cyan" />
                              </a>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>

          {/* Newsletter HUD - Anchored Left in RTL */}
          <div className="flex-1 lg:max-w-sm footer-reveal order-3 lg:mr-auto">
              <div className="flex items-center justify-end gap-2 mb-8 text-zinc-500 font-mono text-sm uppercase tracking-widest">
                  <span className="group-hover/col:text-brand-blue transition-colors">المجلة التقنية</span>
                  <span className="text-zinc-800">[</span> 
                  <span className="w-1.5 h-1.5 bg-brand-blue rounded-full inline-block animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  <span className="text-zinc-800">]</span>
              </div>
              <p className="text-zinc-400 text-base mb-6">
                  كن أول من يتلقى أحدث الابتكارات التقنية.
              </p>
              <div className="relative group p-[1px] rounded-2xl bg-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-electric-violet/20 via-transparent to-electric-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative flex bg-black/40 backdrop-blur-md rounded-[15px] p-1.5 border border-white/5 group-hover:border-white/10 transition-colors">
                    <input 
                        type="email" 
                        placeholder="البريد الإلكتروني" 
                        className="w-full bg-transparent px-5 py-3 text-base text-white focus:outline-none text-right placeholder:text-zinc-600"
                    />
                    <button className="px-6 py-3 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all duration-500 whitespace-nowrap">
                        اشتراك
                    </button>
                  </div>
              </div>
          </div>
        </div>

        {/* Cinematic Backdrop Logo */}
        <div className="mt-12 mb-4 text-center select-none pointer-events-none footer-brand-chars">
          <h2 className="text-[14vw] font-bold text-white/[0.03] uppercase tracking-tighter leading-none arabic-impact footer-brand-chars">
             الذكاء والأشياء
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6 footer-reveal">
            <div className="flex items-center gap-8 text-xs font-bold text-zinc-700 uppercase tracking-widest font-mono">
                <p>© 2026 AI & THINGS</p>
                <a href="#" className="hover:text-zinc-400 transition-colors">PRIVACY</a>
                <a href="#" className="hover:text-zinc-400 transition-colors">SECURITY</a>
            </div>
            <div className="flex items-center gap-4">
                <div className="px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.03] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                  <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.2em]">Live Connection</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
