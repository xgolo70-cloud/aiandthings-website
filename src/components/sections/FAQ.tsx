'use client';

import React, { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const questions = [
  {
    q: "How long does a typical project take?",
    a: "Quality takes time. A standard high-fidelity digital artifact usually ranges from 8 to 14 weeks depending on the complexity of the intelligence layers."
  },
  {
    q: "Do you only work with tech companies?",
    a: "We work with any brand that values depth over breadth. Whether it's high-fashion, specialized finance, or frontier tech, we bring the same level of artisan engineering."
  },
  {
    q: "What is your typical project cost?",
    a: "Our engagements are bespoke. We work on a project basis that covers research, design, and artisan development. Contact us for a specialized quote."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Every artifact we build comes with a personalized maintenance ecosystem to ensure the logic remains sharp and the aesthetics remain pristine."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-40 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <Reveal width="100%">
            <span className="text-accent-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Common Inquiries</span>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-neutral-950 font-display">
               The <span className="font-serif italic text-accent-500 font-normal">Details.</span>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-4 border-t border-neutral-100">
          {questions.map((item, i) => (
            <div key={i} className="border-b border-neutral-100">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="text-xl md:text-2xl font-black text-neutral-900 uppercase tracking-tighter group-hover:text-accent-600 transition-colors">
                  {item.q}
                </span>
                <div className="ml-4 text-accent-500">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-10 text-lg text-neutral-500 font-light leading-relaxed max-w-2xl">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
