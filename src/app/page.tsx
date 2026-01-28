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
    // Cinematic Section Stacking Effect - Restricted to Hero -> Philosophy
    const hero = document.querySelector('.hero-stack');
    
    if (hero) {
      gsap.to(hero, {
        scrollTrigger: {
          trigger: hero,
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
    }
  }, []);

  return (
    <main className="relative bg-black">
      {/* Stacking Transition: Hero to Philosophy */}
      <div className="hero-stack sticky top-0 z-10 w-full min-h-screen">
        <InteractiveHero />
      </div>
      
      <div className="relative z-20 w-full min-h-screen shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-black">
        <Philosophy />
      </div>

      <div className="relative z-30 bg-black">
        <HorizontalShowcase />
      </div>

      <div className="relative z-40 w-full bg-black">
        <Services />
      </div>

      <div className="relative z-50 w-full bg-black">
        <Team />
      </div>

      <div className="relative z-60 w-full bg-black">
        <Studio />
      </div>

      <div className="relative z-70 bg-black">
        <TrustedBy />
      </div>

      <div className="relative z-80 bg-black">
        <Contact />
      </div>
    </main>
  );
}
