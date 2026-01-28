'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-40 bg-zinc-950 relative overflow-hidden mesh-gradient-tech">
      {/* Dynamic Signal Waves Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-electric-cyan/20 rounded-full animate-ping-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-electric-violet/20 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-violet/10 blur-[150px] rounded-full mix-blend-screen" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Intro */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <span className="text-xs text-zinc-500 mb-4 block font-light">تواصل معنا</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-relaxed arabic-impact pb-4 pt-2">
                لنبدأ <br/> <span className="text-zinc-500">التواصل</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light max-w-md leading-relaxed mb-16">
                نحن دائماً نبحث عن تحديات جديدة ومشاريع تكسر المألوف. أرسل إشارتك وسنعاود الاتصال بك.
            </p>

            <div className="flex flex-col gap-6 items-start relative">
                {/* Brand Signature Vertical */}
                <div className="absolute -right-12 top-0 bottom-0 flex flex-col justify-center pointer-events-none opacity-20 hidden xl:flex">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-rl]">AIANDTHINGS // BRANCH_ENTRY_001</span>
                </div>

                <motion.div 
                    whileHover={{ x: -10 }}
                    className="flex items-center gap-6 group glass-vibrant p-4 pr-8 rounded-2xl border border-white/5 hover:border-electric-cyan/30 transition-all duration-500 relative overflow-hidden"
                >
                    {/* Data Background Coordinates */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[40px] font-mono tracking-tighter text-white opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.07] transition-opacity">
                        33.3152 N 44.3661 E
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-zinc-900/50 border border-white/5 flex items-center justify-center group-hover:bg-electric-cyan/10 transition-colors relative z-10">
                        <MapPin size={16} className="text-electric-cyan" />
                    </div>
                    <div className="text-right relative z-10">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block arabic-impact mb-1">الموقع الرسمي</span>
                        <p className="text-sm text-white font-medium">بغداد، العراق // جودة عالمية</p>
                    </div>
                </motion.div>

                <motion.div 
                    whileHover={{ x: -10 }}
                    className="flex items-center gap-6 group glass-vibrant p-4 pr-8 rounded-2xl border border-white/5 hover:border-electric-violet/30 transition-all duration-500 relative overflow-hidden"
                >
                    {/* Live Status Indicator Overlay */}
                    <div className="absolute right-0 top-0 w-1 h-full bg-emerald-500/0 group-hover:bg-emerald-500/20 transition-all" />
                    
                    <div className="w-10 h-10 rounded-xl bg-zinc-900/50 border border-white/5 flex items-center justify-center group-hover:bg-electric-violet/10 transition-colors relative z-10">
                        <Mail size={16} className="text-electric-violet" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-20"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
                        </span>
                    </div>
                    <div className="text-right relative z-10">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block arabic-impact mb-1">اتصال مباشر</span>
                        <p className="text-sm text-white font-medium">hello@aiandthings.com</p>
                    </div>
                </motion.div>
            </div>

            <div className="mt-20 flex gap-4 justify-start">
                {[
                  { Icon: Twitter, label: 'twitter' },
                  { Icon: Github, label: 'github' }
                ].map(({ Icon, label }, i) => (
                    <motion.a 
                        key={i} 
                        href="#" 
                        whileHover={{ y: -5 }}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg border border-white/5 bg-white/2 hover:border-white/20 transition-all group/social"
                    >
                        <span className="text-zinc-700 font-mono text-xs group-hover/social:text-white transition-colors">[</span>
                        <Icon size={14} className="text-zinc-500 group-hover/social:text-white transition-colors" />
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hidden md:block group-hover/social:text-white transition-colors">{label}</span>
                        <span className="text-zinc-700 font-mono text-xs group-hover/social:text-white transition-colors">]</span>
                    </motion.a>
                ))}
            </div>
          </motion.div>

          {/* Minimal Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="cyber-card glass-vibrant p-10 lg:p-16 rounded-3xl backdrop-blur-xl relative overflow-hidden group/form border border-white/5 hover:border-white/10 transition-all duration-700">
                {/* Holographic Terminal Header */}
                <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/5 flex items-center justify-between px-6 bg-white/2">
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20" />
                    </div>
                    <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">System_Transmit_v2.0</span>
                </div>

                {/* Chromatic Border Effect */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover/form:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                        padding: '1px',
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(124, 58, 237, 0.4))',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                    }}
                />

                <form className="space-y-10 relative z-10 mt-6" dir="rtl">
                    <div className="space-y-2 group/input">
                        <label className="text-[10px] text-zinc-500 font-bold uppercase arabic-impact mr-1 group-focus-within/input:text-electric-cyan transition-colors">الاسم الكامل</label>
                        <input 
                            type="text" 
                            placeholder="ما هو اسمك؟"
                            className="w-full bg-transparent border-b border-white/5 py-4 text-lg text-white focus:outline-none focus:border-electric-cyan transition-all placeholder:text-zinc-800"
                        />
                    </div>
                    
                    <div className="space-y-2 group/input">
                        <label className="text-[10px] text-zinc-500 font-bold uppercase arabic-impact mr-1 group-focus-within/input:text-electric-violet transition-colors">عنوان البريد</label>
                        <input 
                            type="email" 
                            placeholder="بريدك الإلكتروني"
                            className="w-full bg-transparent border-b border-white/5 py-4 text-lg text-white focus:outline-none focus:border-electric-violet transition-all placeholder:text-zinc-800"
                        />
                    </div>

                    <div className="space-y-2 group/input">
                        <label className="text-[10px] text-zinc-500 font-bold uppercase arabic-impact mr-1 group-focus-within/input:text-white transition-colors">نص الرسالة</label>
                        <textarea 
                            rows={3}
                            placeholder="أخبرنا عن مشروعك..."
                            className="w-full bg-transparent border-b border-white/5 py-4 text-lg text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-800 resize-none"
                        />
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-6 bg-white text-black rounded-2xl font-bold uppercase text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-4 group/btn relative overflow-hidden"
                    >
                        <span className="relative z-10">إرسال الطلب</span>
                        <Send size={16} className="relative z-10 group-hover/btn:translate-x-[-4px] group-hover/btn:translate-y-[-2px] transition-transform" />
                        
                        {/* Animated Signal Pulse */}
                        <div className="absolute inset-0 bg-linear-to-r from-electric-cyan to-electric-violet opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                    </motion.button>
                </form>
            </div>

            {/* Decor */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t border-l border-white/10 pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b border-r border-white/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
