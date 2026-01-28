'use client';

import React, { useEffect } from 'react';
import InteractiveHero from '@/components/sections/InteractiveHero';
import Philosophy from '@/components/sections/Philosophy';
import HorizontalShowcase from '@/components/sections/HorizontalShowcase';
import Services from '@/components/sections/Services';
import Team from '@/components/sections/Team';
import Studio from '@/components/sections/Studio';
import TrustedBy from '@/components/sections/TrustedBy';
import Contact from '@/components/sections/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Cinematic Section Stacking Effect
    const sections = document.querySelectorAll('.stacking-section');
    
    sections.forEach((section, i) => {
      if (i === sections.length - 1) return; // Don't animate the last section scaling down

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false
        },
        scale: 0.9,
        opacity: 0.5,
        ease: "none"
      });
    });
  }, []);

  return (
    <main className="relative bg-black">
      <div className="stacking-section sticky top-0 z-10 w-full min-h-screen">
        <InteractiveHero />
      </div>
      
      <div className="stacking-section sticky top-0 z-20 w-full min-h-screen shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <Philosophy />
      </div>

      <div className="relative z-30 bg-black">
        <HorizontalShowcase />
      </div>

      <div className="stacking-section sticky top-0 z-40 w-full min-h-screen shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-black">
        <Services />
      </div>

      <div className="stacking-section sticky top-0 z-50 w-full min-h-screen shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-black">
        <Team />
      </div>

      <div className="stacking-section sticky top-0 z-60 w-full min-h-screen shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-black">
        <Studio />
      </div>

      <div className="relative z-70 bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <TrustedBy />
      </div>

      <div className="relative z-80 bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <Contact />
      </div>
    </main>
  );
}
