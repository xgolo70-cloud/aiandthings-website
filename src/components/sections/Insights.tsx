'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SilkDivider from '@/components/ui/SilkDivider';

const insights = [
  {
    date: "2024 / 03",
    title: "The Death of Skeuomorphism",
    category: "Theory",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&q=80"
  },
  {
    date: "2024 / 02",
    title: "Latency as an Emotion",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80"
  },
  {
    date: "2024 / 01",
    title: "Interface Fluidity Standards",
    category: "Design",
    image: "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?w=800&h=600&fit=crop&q=80"
  }
];

export default function Insights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Mouse position state for the floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the image movement
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="insights" className="bg-white py-40 border-b border-neutral-100 relative cursor-default">
      <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-end justify-between mb-24">
              <h2 className="text-7xl md:text-9xl font-display font-extrabold text-brand-dark tracking-tighter">
                  The Journal.
              </h2>
              <span className="text-sm font-mono uppercase tracking-widest text-neutral-400 hidden md:block">Read More</span>
          </div>

          <div className="flex flex-col">
              {insights.map((item, index) => (
                  <div 
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group border-t border-neutral-200 py-16 flex flex-col md:flex-row justify-between items-baseline hover:bg-neutral-50 transition-colors duration-300 px-4 -mx-4 cursor-none"
                  >
                      <div className="w-full md:w-1/4 mb-4 md:mb-0">
                          <span className="text-sm font-mono text-neutral-500 group-hover:text-brand-accent transition-colors">0{index + 1} / {item.category}</span>
                      </div>
                      <div className="w-full md:w-1/2">
                          <h3 className="text-4xl md:text-6xl font-display font-bold text-neutral-900 group-hover:-translate-x-4 transition-transform duration-500 ease-out">
                              {item.title}
                          </h3>
                      </div>
                      <div className="w-full md:w-1/4 flex justify-end items-center mt-4 md:mt-0">
                          <span className="text-sm font-mono text-neutral-400 mr-8">{item.date}</span>
                          <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-white transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                          </div>
                      </div>
                  </div>
              ))}
              <SilkDivider />
          </div>
      </div>

      {/* Floating Image Portal */}
      <AnimatePresence>
        {hoveredIndex !== null && (
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                style={{ 
                    x: springX, 
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-50 overflow-hidden rounded-lg shadow-2xl hidden md:block"
            >
                <Image 
                    src={insights[hoveredIndex].image}
                    alt={insights[hoveredIndex].title}
                    fill
                    className="object-cover"
                />
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
