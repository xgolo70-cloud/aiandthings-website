'use client';

import CustomCursor from '../ui/CustomCursor';

import React, { type ReactNode, useState } from 'react';
import { Menu, X, ArrowRight, Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-950 font-sans selection:bg-accent-200 selection:text-neutral-900">
      <CustomCursor />
      
      {/* Floating Island Header */}
      <header className="fixed top-6 inset-x-0 z-50 mx-auto max-w-5xl px-6">
        <div className="bg-white/70 backdrop-blur-xl border border-neutral-200/60 rounded-full shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] h-14 md:h-16 px-6 flex items-center justify-between transition-all duration-300 hover:border-accent-200/50 hover:bg-white/90">
            {/* Logo */}
            <a href="#" className="text-xl font-bold tracking-tighter text-neutral-950 hover:opacity-70 transition-opacity">
                ai <span className="font-serif italic font-normal text-accent-500">and</span> things
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
                {['Work', 'Services', 'Studio', 'About'].map((item) => (
                    <Magnetic key={item} strength={0.2}>
                        <a 
                            href={`#${item.toLowerCase()}`} 
                            className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-accent-600 transition-colors rounded-full"
                        >
                            {item}
                        </a>
                    </Magnetic>
                ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
                <Magnetic strength={0.3}>
                    <button className="hidden md:flex items-center gap-2 bg-neutral-950 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent-600 transition-colors group">
                        <span>Contact</span>
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </Magnetic>
                <button 
                    className="md:hidden p-2 text-neutral-500 hover:text-neutral-950 transition-colors" 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-32 px-6 md:hidden flex flex-col"
            >
                <nav className="flex flex-col gap-8">
                    {['Work', 'Services', 'Studio', 'About'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            onClick={toggleMenu}
                            className="text-6xl font-display font-bold text-neutral-900 tracking-tighter hover:text-accent-500 transition-colors"
                        >
                            {item}.
                        </a>
                    ))}
                    <a href="#contact" onClick={toggleMenu} className="pt-8 text-2xl font-serif italic text-accent-600 flex items-center gap-3">
                        Start a conversation <ArrowRight size={24} />
                    </a>
                </nav>
            </motion.div>
        )}
      </AnimatePresence>

      <main className="grow">
        {children}
      </main>

      <footer className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        {/* Artistic Footer Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 mb-24">
                <div>
                    <h3 className="text-4xl md:text-7xl font-bold tracking-tighter mb-10 leading-[0.9]">
                        Let&apos;s build the <br/>
                        <span className="font-serif italic text-accent-400 font-normal underline decoration-accent-400/30">extraordinary.</span>
                    </h3>
                    <div className="flex flex-wrap gap-6">
                        <Magnetic strength={0.4}>
                            <button className="bg-white text-neutral-950 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-accent-400 transition-colors">
                                Start a Project
                            </button>
                        </Magnetic>
                        <a href="mailto:hello@aiandthings.com" className="group flex flex-col justify-center">
                            <span className="text-accent-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Email us</span>
                            <span className="text-xl font-light group-hover:text-accent-400 transition-colors border-b border-white/10 group-hover:border-accent-400/50 pb-1">hello@aiandthings.com</span>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-12 text-sm">
                    <div>
                        <h4 className="text-accent-500 font-bold uppercase tracking-[0.2em] mb-8 text-[10px]">Navigate</h4>
                        <ul className="space-y-5 text-neutral-400 font-light text-lg">
                            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-accent-500 font-bold uppercase tracking-[0.2em] mb-8 text-[10px]">Follow</h4>
                        <div className="flex gap-6">
                            {[
                                { Icon: Twitter, href: "#" },
                                { Icon: Instagram, href: "#" },
                                { Icon: Linkedin, href: "#" },
                                { Icon: Github, href: "#" }
                            ].map((social, i) => (
                                <Magnetic key={i} strength={0.5}>
                                    <a href={social.href} className="text-neutral-500 hover:text-accent-400 transition-colors block p-2 bg-white/5 rounded-full">
                                        <social.Icon size={18} strokeWidth={1.5} />
                                    </a>
                                </Magnetic>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-neutral-500 font-bold uppercase tracking-[0.2em]">
                <p>© 2026 AI AND THINGS. CRAFTED BY ARTISANS.</p>
                <div className="flex gap-10">
                    <a href="#" className="hover:text-accent-500 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-accent-500 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
