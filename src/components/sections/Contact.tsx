'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Twitter, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-zinc-50 border-t border-zinc-200 text-black overflow-hidden relative">
      
      {/* Texture */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Contact Intro */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-normal block mb-4">
                تواصل معنا
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 arabic-heading leading-tight">
                لنبدأ <br/> بناء <span className="text-zinc-500">المستقبل</span>
            </h2>
            <p className="text-zinc-600 text-xl font-light max-w-md leading-relaxed mb-12 arabic-text">
                نحن دائماً نبحث عن تحديات جديدة ومشاريع تكسر المألوف. أخبرنا عن رؤيتك.
            </p>

            <div className="space-y-8">
                <div className="flex items-center gap-6 p-6 bg-white border border-zinc-100 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                    <div className="w-12 h-12 rounded-lg bg-zinc-50 flex items-center justify-center">
                        <MapPin size={20} className="text-zinc-900" />
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-bold uppercase text-zinc-400 tracking-normal block mb-1">المقر الرئيسي</span>
                        <p className="text-zinc-900 font-medium">بغداد، العراق</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-white border border-zinc-100 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                    <div className="w-12 h-12 rounded-lg bg-zinc-50 flex items-center justify-center">
                        <Mail size={20} className="text-zinc-900" />
                    </div>
                    <div className="text-right">
                         <span className="text-xs font-bold uppercase text-zinc-400 tracking-normal block mb-1">البريد الإلكتروني</span>
                        <p className="text-zinc-900 font-medium">hello@aiandthings.com</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex gap-4 justify-start">
                {[
                    { Icon: Twitter, label: 'twitter' },
                    { Icon: Github, label: 'github' }
                ].map(({ Icon, label }, i) => (
                    <a key={i} href="#" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 transition-colors">
                        <Icon size={16} className="text-zinc-600" />
                        <span className="text-xs font-bold uppercase text-zinc-600 tracking-normal">{label}</span>
                    </a>
                ))}
            </div>

          </motion.div>

          {/* Minimal Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-2xl border border-zinc-100 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)]"
          >
            <form className="space-y-8" dir="rtl" onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const button = form.querySelector('button');
                if (button) {
                    const originalText = button.innerHTML;
                    button.innerHTML = '<span>جاري الإرسال...</span>';
                    button.disabled = true;
                    
                    setTimeout(() => {
                        button.innerHTML = '<span>تم الإرسال بنجاح</span>';
                        button.classList.add('bg-green-600', 'text-white');
                        button.classList.remove('bg-black');
                        form.reset();
                        
                        setTimeout(() => {
                            button.innerHTML = originalText;
                            button.disabled = false;
                            button.classList.remove('bg-green-600');
                            button.classList.add('bg-black');
                        }, 3000);
                    }, 1500);
                }
            }}>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-zinc-500 tracking-normal mr-1">الاسم الكامل</label>
                    <input 
                        type="text" 
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-4 text-zinc-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder:text-zinc-400"
                        placeholder="الاسم الكريم"
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-zinc-500 tracking-normal mr-1">البريد الإلكتروني</label>
                    <input 
                        type="email" 
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-4 text-zinc-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder:text-zinc-400"
                        placeholder="example@domain.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-zinc-500 tracking-normal mr-1">نص الرسالة</label>
                    <textarea 
                        rows={4}
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-4 text-zinc-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder:text-zinc-400 resize-none"
                        placeholder="مشروعي عبارة عن..."
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full py-5 bg-black text-white rounded-xl font-bold text-sm hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <span>إرسال الطلب</span>
                    <ArrowRight size={16} className="group-hover:-translate-x-1 transition-transform" />
                </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
