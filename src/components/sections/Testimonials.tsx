'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "They didn't just build a website; they crafted a digital soul for our brand. The attention to detail is unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, Lumina Studios"
  },
  {
    quote: "The efficiency of their AI integration saved us countless hours. A perfect blend of art and engineering.",
    author: "Marcus Chen",
    role: "CTO, Vertex AI"
  },
  {
    quote: "Working with the studio was transformative. They pushed us to reimagine what our user experience could be.",
    author: "Elena Rodriguez",
    role: "Product Lead, Nebula"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
            <Reveal width="100%">
                 <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-display text-neutral-950">
                    Client Stories.
                </h2>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
                <Reveal key={index} delay={index * 0.1}>
                    <div className="p-10 rounded-4xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col justify-between">
                        <div className="mb-8">
                            <div className="flex gap-1 mb-6 text-orange-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-relaxed italic">
                                &quot;{item.quote}&quot;
                            </p>
                        </div>
                        <div>
                            <p className="font-bold text-neutral-950 font-display text-lg">{item.author}</p>
                            <p className="text-sm text-neutral-500 uppercase tracking-wider font-medium">{item.role}</p>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
