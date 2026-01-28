'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "INTEGRATION SUCCESSFUL. SYSTEM EFFICIENCY INCREASED BY 400%.",
    author: "SARAH JENKINS",
    role: "CEO::LUMINA STUDIOS",
  },
  {
    quote: "ARCHITECTURAL PRECISION UNMATCHED. DEPLOYMENT FLAWLESS.",
    author: "MARCUS CHEN",
    role: "CTO::VERTEX AI",
  },
  {
    quote: "UX LATENCY REDUCED TO NEAR ZERO. A MASTERPIECE OF LOGIC.",
    author: "ELENA RODRIGUEZ",
    role: "LEAD::NEBULA CORP",
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-black text-white py-40 overflow-hidden relative border-t border-white/5">
      
      <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-20 border-b border-white/20 pb-6">
              <span className="text-xs font-bold uppercase tracking-normal text-neutral-400 arabic-text">سجلات النقل</span>
              <div className="flex gap-4">
                  <button onClick={prev} className="hover:text-brand-accent transition-colors"><ArrowLeft /></button>
                  <button onClick={next} className="hover:text-brand-accent transition-colors"><ArrowRight /></button>
              </div>
          </div>

          <div className="h-[40vh] flex items-center">
              <AnimatePresence mode='wait'>
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                      <h2 className="text-[4vw] md:text-[5vw] font-bold leading-relaxed tracking-tight mb-8 pb-10 pt-4 overflow-visible arabic-heading">
                          &quot;{testimonials[index].quote}&quot;
                      </h2>
                      <div className="flex flex-col md:flex-row gap-4 items-baseline">
                          <span className="text-xl arabic-text text-brand-accent">{testimonials[index].author}</span>
                          <span className="text-sm arabic-text text-neutral-500">{testimonials[index].role}</span>
                      </div>
                  </motion.div>
              </AnimatePresence>
          </div>
      </div>
    </section>
  );
}
