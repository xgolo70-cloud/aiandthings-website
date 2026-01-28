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
    <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
        
        {/* Continuous Solid White Header - Ultra Compact Frame, Massive Content */}
        <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-white border-b border-zinc-100 py-1 px-6 md:px-16 flex items-center justify-between pointer-events-auto shadow-[0_5px_30px_rgba(0,0,0,0.08)]"
        >
            
            {/* Brand Logo - Massive but Absolute (doesn't stretch header height) */}
            <a href="#" className="relative pointer-events-auto group w-24 md:w-40 h-8 md:h-12">
                <motion.div 
                    animate={{ 
                        y: [-12, -18, -12] 
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="absolute top-1/2 -left-4 md:-left-8 w-32 h-32 md:w-56 md:h-56 group-hover:scale-110 transition-transform duration-500"
                >
                    <Image 
                        src="/images/Artboard 3.svg" 
                        alt="Logo" 
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </a>

            {/* Desktop Navigation - Center - MASSIVE & ULTRA BOLD */}
            <nav className="hidden md:flex items-center gap-10">
                {navLinks.map((item) => (
                    <a 
                        key={item.name} 
                        href={item.href}
                        className="px-4 py-0 text-3xl font-black text-zinc-950 hover:text-black transition-all arabic-heading relative group tracking-tight"
                    >
                        {item.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-300" />
                    </a>
                ))}
            </nav>

            {/* Action Group / Button - Right Side - MASSIVE */}
            <div className="flex items-center gap-6">
                <a href="#contact" className="hidden md:flex bg-zinc-950 text-white px-10 py-2.5 rounded-full text-xl font-black transition-all hover:bg-black hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.1)] arabic-impact">
                    ابدأ مشروعك
                </a>
                
                <button onClick={toggleMenu} className="md:hidden w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-zinc-900"></span>
                        <span className="block w-4 h-0.5 bg-zinc-900 mr-auto"></span>
                    </div>
                </button>
            </div>

        </motion.div>

        {/* Mobile Overlay */}
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 overflow-hidden md:hidden pointer-events-auto shadow-2xl"
                >
                    <div className="p-10 flex flex-col gap-6">
                        {navLinks.map((item) => (
                            <a 
                                key={item.name} 
                                href={item.href} 
                                onClick={toggleMenu} 
                                className="text-4xl font-black text-zinc-900 text-right arabic-heading py-3 border-b border-zinc-100 last:border-0"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a href="#contact" onClick={toggleMenu} className="mt-8 w-full py-6 bg-zinc-950 text-white rounded-2xl font-black text-2xl text-center arabic-impact">
                            ابدأ مشروعك
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

    </header>
  );
}
