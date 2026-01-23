'use client';

import React from 'react';
import { Lightbulb, Target, Zap } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
            <Reveal>
                <div className="inline-block px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold mb-8 uppercase tracking-widest text-neutral-500">
                    Vision & Goals
                </div>
            </Reveal>
            <Reveal delay={0.1}>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 max-w-lg font-display text-neutral-950">
                    Rapid Creation. <br />
                    High Efficiency. <br />
                    Masterful Products.
                </h2>
            </Reveal>
            <Reveal delay={0.2}>
                <p className="text-neutral-500 text-xl leading-relaxed mb-10 font-light">
                    At <strong className="font-semibold text-neutral-900">ai and things</strong>, we believe in a future where technology is seamless, intelligent, and beautiful. 
                    Our research and development wing is constantly pushing the boundaries of what&apos;s possible, 
                    ensuring your project isn&apos;t just current, but future-proof.
                </p>
            </Reveal>
          
          <Reveal delay={0.3}>
            <button className="text-neutral-950 hover:text-neutral-600 transition-colors font-medium border-b border-neutral-950 hover:border-neutral-300 pb-1 text-lg">
                Read our Manifesto
            </button>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal delay={0.2}>
          <div className="p-10 rounded-4xl bg-white border border-neutral-100 hover:border-neutral-200 transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <Zap className="text-orange-500 mb-6" strokeWidth={1.5} size={36} />
            <h3 className="text-2xl font-bold mb-3 font-display text-neutral-950">High Efficiency</h3>
            <p className="text-neutral-500 text-base leading-relaxed">
                Optimized workflows and intelligent automation to deliver results faster without compromising quality.
            </p>
          </div>
          </Reveal>
          
          <Reveal delay={0.3}>
          <div className="p-10 rounded-4xl bg-white border border-neutral-100 hover:border-neutral-200 transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <Target className="text-red-500 mb-6" strokeWidth={1.5} size={36} />
            <h3 className="text-2xl font-bold mb-3 font-display text-neutral-950">Integrated Solutions</h3>
            <p className="text-neutral-500 text-base leading-relaxed">
                From backend architecture to frontend design, we handle every layer of the stack with precision.
            </p>
          </div>
          </Reveal>

          <Reveal delay={0.4}>
          <div className="p-10 rounded-4xl bg-white border border-neutral-100 hover:border-neutral-200 transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <Lightbulb className="text-blue-500 mb-6" strokeWidth={1.5} size={36} />
            <h3 className="text-2xl font-bold mb-3 font-display text-neutral-950">R&D Focussed</h3>
            <p className="text-neutral-500 text-base leading-relaxed">
                Dedicated research division exploring new AI models and creative tech solutions.
            </p>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
