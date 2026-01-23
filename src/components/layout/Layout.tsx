'use client';

import CustomCursor from '../ui/CustomCursor';

import React, { type ReactNode, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-950 font-sans selection:bg-orange-100 selection:text-orange-900">
      <CustomCursor />
      
      {/* Floating Island Header */}
      <header className="fixed top-6 inset-x-0 z-50 mx-auto max-w-5xl px-6">
        <div className="bg-white/70 backdrop-blur-xl border border-neutral-200/60 rounded-full shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)] h-14 md:h-16 px-6 flex items-center justify-between transition-all duration-300 hover:border-neutral-300 hover:bg-white/80 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.04)]">
            {/* Logo */}
            <a href="#" className="text-lg font-bold font-display tracking-tight text-neutral-950 hover:opacity-70 transition-opacity">
                ai and things
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
                {['Work', 'Services', 'Studio', 'About'].map((item) => (
                    <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`} 
                        className="px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors rounded-full hover:bg-neutral-100/50"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
                <button className="hidden md:flex items-center gap-2 bg-neutral-950 text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors group">
                    <span>Contact</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
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
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden"
            >
                <nav className="flex flex-col gap-6">
                    {['Work', 'Services', 'Studio', 'About'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            onClick={toggleMenu}
                            className="text-4xl font-display font-medium text-neutral-900 tracking-tight"
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#contact" onClick={toggleMenu} className="pt-8 text-xl font-medium text-neutral-500 flex items-center gap-2">
                        Contact Us <ArrowRight size={18} />
                    </a>
                </nav>
            </motion.div>
        )}
      </AnimatePresence>

      <main className="grow">
        {children}
      </main>

      <footer className="py-24 border-t border-neutral-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-20">
                <div>
                    <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-8">
                        Ready to shape <br/> the future?
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-neutral-950 text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors">
                            Start a Project
                        </button>
                        <button className="text-neutral-950 border border-neutral-200 px-8 py-4 rounded-full font-medium hover:border-neutral-950 transition-colors">
                            hello@aiandthings.com
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 text-sm md:text-base">
                    <div>
                        <h4 className="font-semibold mb-6 text-neutral-950">Company</h4>
                        <ul className="space-y-4 text-neutral-500 font-light">
                            <li><a href="#" className="hover:text-neutral-950 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-neutral-950 transition-colors">Work</a></li>
                            <li><a href="#" className="hover:text-neutral-950 transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-neutral-950 transition-colors">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-6 text-neutral-950">Social</h4>
                        <ul className="space-y-4 text-neutral-500 font-light">
                            <li><a href="#" className="hover:text-neutral-950 transition-colors">Twitter (X)</a></li>
                            <li><a href="#" className="hover:text-neutral-950 transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-neutral-950 transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-neutral-950 transition-colors">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400 font-medium">
                <p>© 2026 ai and things. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-neutral-950 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-neutral-950 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
