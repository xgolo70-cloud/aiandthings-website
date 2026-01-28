'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InteractiveHero() {
  return (
    <section className="relative w-full h-dvh flex flex-col items-center justify-center bg-black overflow-hidden">
      
      {/* Background - Elegant Gradient & Grid */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 inset-x-0 h-[500px] bg-linear-to-b from-white/3 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-[500px] bg-linear-to-t from-black to-transparent pointer-events-none" />
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_100%,transparent_0%)] opacity-50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-sm font-medium tracking-normal">
                  الذكاء الاصطناعي والإبداع
              </span>
          </motion.div>

          {/* Main Title - Clean & Arabic Optimized */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white mb-8 arabic-heading leading-[1.1]"
          >
            نصنع <span className="text-zinc-500">المستقبل</span> <br className="hidden md:block"/>
            بكل <span className="text-transparent bg-clip-text bg-linear-to-br from-white to-zinc-500">دقة وإتقان</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed arabic-text font-light mb-12"
          >
            نحول الأفكار المعقدة إلى تجارب رقمية سلسة، تجمع بين قوة الهندسة وجمال التصميم.
          </motion.p>

          {/* CTA Buttons - Premium Minimalist */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-4"
          >
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors duration-300 w-full md:w-auto arabic-text">
                  ابدأ مشروعك
              </button>
              <Link href="/works" className="px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300 w-full md:w-auto arabic-text inline-flex justify-center">
                  تصفح أعمالنا
              </Link>
          </motion.div>

      </div>

      {/* Floating Abstract Element - Subtle */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-[30vw] h-[30vw] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen opacity-40"
      />
       <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-[10%] w-[25vw] h-[25vw] bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-overlay"
      />

    </section>
  );
}
