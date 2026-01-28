'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'أعمالنا', href: '#works' },
  { name: 'الخبرات', href: '#services' },
  { name: 'الفريق', href: '#studio-collective' },
  { name: 'تواصل', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
        
        <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl bg-zinc-950/60 backdrop-blur-2xl border border-white/5 rounded-full px-2 py-2 flex items-center justify-between shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] pointer-events-auto"
        >
            
            {/* Brand */}
            <a href="#" className="flex items-center gap-5 px-6 py-2 group">
                <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-500">
                    <Image 
                        src="/images/Artboard 2.svg" 
                        alt="الذكاء والأشياء Logo" 
                        fill
                        className="object-contain"
                    />
                </div>
                <span className="text-2xl font-bold text-white arabic-impact hidden md:block">الذكاء والأشياء</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
                {navLinks.map((item) => (
                    <a 
                        key={item.name} 
                        href={item.href}
                        className="px-6 py-3 rounded-full text-sm font-bold text-zinc-400 hover:text-white hover:bg-white/5 transition-all arabic-impact relative overflow-hidden group"
                    >
                        <span className="relative z-10">{item.name}</span>
                        <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </a>
                ))}
            </nav>

            {/* Action Group */}
            <div className="flex items-center gap-2 pr-2">
                 <button onClick={toggleMenu} className="md:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <div className="space-y-1.5">
                        <span className="block w-5 h-0.5 bg-white"></span>
                        <span className="block w-3 h-0.5 bg-white mr-auto"></span>
                    </div>
                </button>

                <a href="#contact" className="hidden md:flex bg-white text-black px-6 py-3 rounded-full text-xs font-bold transition-all hover:bg-electric-cyan hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] arabic-impact items-center gap-2">
                    <span>ابدأ مشروعك</span>
                </a>
            </div>

        </motion.div>

        {/* Mobile Overlay */}
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="fixed top-24 left-4 right-4 bg-zinc-950/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 md:hidden flex flex-col gap-2 pointer-events-auto"
                >
                    {navLinks.map((item) => (
                        <a 
                            key={item.name} 
                            href={item.href} 
                            onClick={toggleMenu} 
                            className="p-4 rounded-xl hover:bg-white/5 text-lg font-bold text-white text-right arabic-impact border-b border-white/5 last:border-0"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a href="#contact" onClick={toggleMenu} className="mt-4 w-full py-4 bg-white text-black rounded-xl font-bold text-center arabic-impact">
                        ابدأ مشروعك
                    </a>
                </motion.div>
            )}
        </AnimatePresence>

    </header>
  );
}
