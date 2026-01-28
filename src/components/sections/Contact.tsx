'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-40 bg-zinc-950 relative overflow-hidden mesh-gradient-tech">
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
            <p className="text-zinc-400 text-lg font-light max-w-md mr-auto leading-relaxed mb-16">
                نحن دائماً نبحث عن تحديات جديدة ومشاريع تكسر المألوف. أرسل إشارتك وسنعاود الاتصال بك.
            </p>

            <div className="flex flex-col gap-8 items-end">
                <div className="flex items-center gap-6 group">
                    <div className="text-right">
                        <span className="text-[10px] font-bold text-zinc-700 uppercase block arabic-impact">الموقع</span>
                        <p className="text-white group-hover:text-electric-violet transition-colors">بغداد، العراق // عالمي</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-all">
                        <MapPin size={18} className="text-zinc-600" />
                    </div>
                </div>

                <div className="flex items-center gap-6 group">
                    <div className="text-right">
                        <span className="text-[12px] font-bold text-zinc-500 uppercase block mb-2 arabic-impact">البريد المباشر</span>
                        <p className="text-lg text-white group-hover:text-electric-violet transition-colors font-normal">hello@aiandthings.com</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-all">
                        <Mail size={18} className="text-zinc-600" />
                    </div>
                </div>
            </div>

            <div className="mt-20 flex gap-8 justify-end">
                {[Twitter, Github].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <Icon size={16} />
                    </a>
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
            <div className="cyber-card glass-vibrant p-10 lg:p-16 rounded-3xl backdrop-blur-xl">
                <form className="space-y-10" dir="rtl">
                    <div className="space-y-2">
                        <label className="text-xs text-zinc-500 font-light mr-4">الاسم الكامل</label>
                        <input 
                            type="text" 
                            placeholder="ما هو اسمك؟"
                            className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white focus:outline-none focus:border-electric-violet transition-all placeholder:text-zinc-800"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs text-zinc-500 font-light mr-4">عنوان البريد</label>
                        <input 
                            type="email" 
                            placeholder="بريدك الإلكتروني"
                            className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white focus:outline-none focus:border-electric-violet transition-all placeholder:text-zinc-800"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs text-zinc-500 font-light mr-4">نص الرسالة</label>
                        <textarea 
                            rows={4}
                            placeholder="أخبرنا عن مشروعك..."
                            className="w-full bg-transparent border-b border-white/10 py-4 text-xl text-white focus:outline-none focus:border-electric-violet transition-all placeholder:text-zinc-800 resize-none"
                        />
                    </div>

                    <button className="w-full py-6 bg-white text-black rounded-2xl font-bold uppercase text-sm hover:bg-electric-violet hover:text-white transition-all flex items-center justify-center gap-4 group">
                        <span>إرسال الطلب</span>
                        <Send size={16} className="group-hover:translate-x-[-10px] group-hover:translate-y-[-5px] transition-transform" />
                    </button>
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
