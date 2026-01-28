'use client';

import React, { useEffect } from 'react';
import { Command, Github, Twitter, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  sitemap: [
    { name: 'البداية', href: '#' },
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
    gsap.fromTo(".footer-brand-char", 
      { opacity: 0, scale: 0.5, filter: "blur(10px)", y: 20 },
      { 
        opacity: 0.1, 
        scale: 1, 
        filter: "blur(0px)", 
        y: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-brand-chars",
          start: "top 95%",
        }
      }
    );
  }, []);

  return (
    <footer className="relative bg-zinc-950 pt-32 pb-12 px-6 overflow-hidden border-t border-white/5 mesh-gradient-tech">
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-linear-to-t from-electric-violet/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-12 text-right">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-8 items-center lg:items-start lg:text-right text-right">
              <a href="#" className="flex items-center gap-3 group w-fit">
                  <Command size={24} className="text-white group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-2xl font-bold text-white arabic-impact pb-2 pt-1">
                      الذكاء والأشياء
                  </span>
              </a>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-sm font-normal">
                  البنية التحتية الذكية للجيل القادم من الأنظمة المستقلة والتقنيات الإبداعية الحديثة.
              </p>
              <div className="flex gap-4">
                  {[Twitter, Github, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-300">
                          <Icon size={20} />
                      </a>
                  ))}
              </div>
          </div>

          <div className="md:col-span-6 lg:col-span-2">
              <h4 className="text-sm font-bold text-white mb-8 arabic-impact">التنقّل</h4>
              <ul className="flex flex-col gap-4">
                  {footerLinks.sitemap.map((link) => (
                      <li key={link.name}>
                          <a href={link.href} className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group">
                              <span className="text-sm">{link.name}</span>
                          </a>
                      </li>
                  ))}
              </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-2">
              <h4 className="text-sm font-bold text-white mb-8 arabic-impact">الشركة</h4>
              <ul className="flex flex-col gap-4">
                  {footerLinks.company.map((link) => (
                      <li key={link.name}>
                          <a href={link.href} className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group">
                              <span className="text-sm">{link.name}</span>
                          </a>
                      </li>
                  ))}
              </ul>
          </div>

          {/* Action oriented subscription */}
          <div className="md:col-span-12 lg:col-span-3">
              <h4 className="text-sm font-bold text-white mb-8 arabic-impact">النشرة الـبريـدية</h4>
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                  انضم لأكثر من 10 آلاف مهندس يتلقون أحدث أبحاثنا التقنية والإبداعية الأسبوعية.
              </p>
              <div className="relative group">
                  <input 
                      type="email" 
                      placeholder="بريدك الإلكتروني" 
                      className="w-full bg-zinc-900 border border-white/5 rounded-full px-6 py-4 text-sm text-white focus:outline-none focus:border-white/20 transition-all text-right"
                  />
                  <button className="absolute left-2 top-2 bottom-2 px-6 bg-white text-black rounded-full text-xs font-bold uppercase hover:bg-electric-cyan hover:scale-105 transition-all">
                      إرسال
                  </button>
              </div>
          </div>
        </div>

        {/* Large Decorative Text - Cinematic Reveal */}
        <div className="mt-32 mb-10 text-center relative overflow-hidden select-none pointer-events-none footer-brand-chars">
          <h2 className="text-[12vw] font-bold text-white/5 uppercase tracking-tighter leading-none arabic-impact flex justify-center gap-[0.3em]">
            {"الذكاء والأشياء".split(" ").map((word, i) => (
                <span key={i} className="footer-brand-char inline-block">
                    {word}
                </span>
            ))}
          </h2>
        </div>
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8 text-[11px] font-bold text-zinc-600 arabic-impact">
                <p>© 2026 الذكاء والأشياء</p>
                <a href="#" className="hover:text-white transition-colors">الخصوصية</a>
                <a href="#" className="hover:text-white transition-colors">الأمن</a>
            </div>
            
            <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold text-zinc-700 uppercase arabic-impact">الإصدار 2.4.0</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
