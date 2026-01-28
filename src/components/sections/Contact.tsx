'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Twitter, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-40 bg-black text-white overflow-hidden relative border-t border-white/10">
      
      {/* Background HUD Elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Contact Intro */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right order-last lg:order-first"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
               <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 arabic-text">متاح للمشاريع الجديدة</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 arabic-heading leading-[1.1]">
                لنبدأ <br/> بناء <span className="text-zinc-600">المستقبل</span>
            </h2>
            <p className="text-zinc-400 text-xl font-light max-w-md leading-relaxed mb-12 arabic-text">
                نحن دائماً نبحث عن تحديات جديدة ومشاريع تكسر المألوف. أخبرنا عن رؤيتك لنحولها إلى واقع ملموس.
            </p>

            <div className="grid grid-cols-1 gap-4">
                {[
                    { Icon: MapPin, title: "المقر الرئيسي", value: "بغداد، العراق" },
                    { Icon: Mail, title: "البريد الإلكتروني", value: "hello@aiandthings.com" }
                ].map((item, i) => (
                    <div key={i} className="group flex items-center gap-6 p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-500">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <item.Icon size={20} className="text-white" />
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-bold uppercase text-zinc-600 tracking-widest block mb-1 arabic-text">{item.title}</span>
                            <p className="text-white font-medium text-lg">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 flex gap-3 justify-end lg:justify-start">
                {[
                    { Icon: Twitter, label: 'twitter' },
                    { Icon: Github, label: 'github' }
                ].map(({ Icon, label }, i) => (
                    <a key={i} href="#" className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group">
                        <Icon size={16} className="group-hover:scale-110" />
                        <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
                    </a>
                ))}
            </div>

          </motion.div>

          {/* Premium Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Form Glow */}
            <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-[3rem] pointer-events-none" />
            
            <form className="relative space-y-8 p-10 md:p-14 rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-3xl border border-white/10" dir="rtl" onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const button = form.querySelector('button');
                if (button) {
                    const originalText = button.innerHTML;
                    button.innerHTML = '<span>جاري الإرسال...</span>';
                    button.disabled = true;
                    
                    setTimeout(() => {
                        button.innerHTML = '<span>تم الإرسال بنجاح</span>';
                        button.classList.add('bg-white', 'text-black');
                        button.classList.remove('bg-white/10');
                        form.reset();
                        
                        setTimeout(() => {
                            button.innerHTML = originalText;
                            button.disabled = false;
                            button.classList.remove('bg-white', 'text-black');
                            button.classList.add('bg-white/10');
                        }, 3000);
                    }, 1500);
                }
            }}>
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest mr-1 arabic-text">الاسم الكامل</label>
                    <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-zinc-700 arabic-text"
                        placeholder="الاسم الكريم"
                    />
                </div>
                
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest mr-1 arabic-text">البريد الإلكتروني</label>
                    <input 
                        type="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-zinc-700"
                        placeholder="email@example.com"
                    />
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest mr-1 arabic-text">نص الرسالة</label>
                    <textarea 
                        rows={5}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-zinc-700 resize-none arabic-text"
                        placeholder="أخبرنا عن رؤيتك..."
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full py-6 bg-white/10 hover:bg-white hover:text-black transition-all duration-500 rounded-2xl font-bold text-sm tracking-widest flex items-center justify-center gap-3 group disabled:opacity-50"
                >
                    <span className="arabic-text">إرسال الطلب</span>
                    <ArrowRight size={18} className="group-hover:-translate-x-2 transition-transform duration-500" />
                </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
