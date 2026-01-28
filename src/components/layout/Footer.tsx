'use client';

import React from 'react';
import { Command, Github, Twitter, Linkedin, Globe } from 'lucide-react';


import Link from 'next/link';

const footerLinks = {
  sitemap: [
    { name: 'أعمالنا', href: '/works' },
    { name: 'الخبرات', href: '/#services' },
    { name: 'الفريق', href: '/about' },
    { name: 'المدونة', href: '/blog' },
  ],
  company: [
    { name: 'عن نيكسوس', href: '/about' },
    { name: 'المعماريّة', href: '/#philosophy' },
    { name: 'الوظائف', href: '#' },
    { name: 'التواصل', href: '/#contact' },
  ],
  legal: [
    { name: 'الخصوصية', href: '#' },
    { name: 'الشروط', href: '#' },
    { name: 'الأمان', href: '#' },
  ]
};

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-black pt-24 pb-12 border-t border-white/10 text-white relative overflow-hidden">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
                  <Command size={16} />
                </div>
                <span className="text-xl font-bold arabic-heading">الذكاء والأشياء</span>
            </div>
            <p className="text-zinc-500 text-base leading-relaxed mb-8 max-w-sm font-light">
                نبني الواجهات الرقمية التي تتجاوز المألوف. دمج بين دقة الهندسة وجماليات الفضاء
            </p>
            <div className="flex gap-4">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                    >
                        <Icon size={16} />
                    </a>
                ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm">القائمة</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.sitemap.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-zinc-500 hover:text-white transition-colors text-sm font-light">
                     {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
           <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm">الشركة</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-zinc-500 hover:text-white transition-colors text-sm font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Newsletter */}
           <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-white font-bold mb-6 text-sm">التحديثات</h3>
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-4">
                <p className="text-zinc-500 text-xs mb-4 leading-relaxed">
                  اشترك في نشرتنا البريدية للحصول على آخر الأخبار.
                </p>
                <div className="relative group">
                    <input 
                        type="email" 
                        placeholder="example@email.com" 
                        className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-all text-right placeholder:text-zinc-700"
                    />
                </div>
              </div>
           </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600 order-2 md:order-1">
                <p>© 2026 الذكاء والأشياء. جميع الحقوق محفوظة</p>
                <div className="flex gap-4">
                   {footerLinks.legal.map(link => (
                     <Link key={link.name} href={link.href} className="hover:text-zinc-400 transition-colors">{link.name}</Link>
                   ))}
                </div>
            </div>

            {/* System Status - Clean */}
            <div className="flex items-center gap-3 order-1 md:order-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-white/5 rounded-full">
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] uppercase tracking-normal text-zinc-400 font-mono">Systems Normal</span>
                </div>
                 <div className="flex items-center gap-2 text-zinc-600">
                    <Globe size={12} />
                    <span className="text-[10px] font-mono">Baghdad, IQ</span>
                 </div>
            </div>

        </div>
      </div>
    </footer>
  );
}
