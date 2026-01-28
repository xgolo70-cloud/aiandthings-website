'use client';

import React, { useEffect } from 'react';
import InteractiveHero from '@/components/sections/InteractiveHero';
import About from '@/components/sections/About';
import Philosophy from '@/components/sections/Philosophy';
import Process from '@/components/sections/Process';
import Metrics from '@/components/sections/Metrics';
import HorizontalShowcase from '@/components/sections/HorizontalShowcase';
import Services from '@/components/sections/Services';
import Team from '@/components/sections/Team';
import Studio from '@/components/sections/Studio';
import Testimonials from '@/components/sections/Testimonials';
import Insights from '@/components/sections/Insights';
import FAQ from '@/components/sections/FAQ';
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
      {/* Stacking Transition: Hero to About */}
      <div className="hero-stack sticky top-0 z-10 w-full min-h-screen">
        <InteractiveHero />
      </div>
      
      <div className="relative z-20 w-full bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <About />
      </div>

      <div className="relative z-25 w-full shadow-[0_-20px_50px_rgba(0,0,0,0.3)] bg-black">
        <Philosophy />
      </div>

      <div className="relative z-30 bg-black">
        <Process />
      </div>

      <div className="relative z-35 bg-white">
        <Metrics />
      </div>

      <div className="relative z-40 bg-black">
        <HorizontalShowcase />
      </div>

      <div className="relative z-50 w-full bg-black">
        <Services />
      </div>

      <div className="relative z-60 w-full bg-black">
        <Team />
      </div>

      <div className="relative z-70 w-full bg-black">
        <Studio />
      </div>

      <div className="relative z-75 bg-black">
        <Testimonials />
      </div>

      <div className="relative z-80 bg-white">
        <Insights />
      </div>

      <div className="relative z-90 bg-white">
        <FAQ />
      </div>

      <div className="relative z-100 bg-black">
        <TrustedBy />
      </div>

      <div className="relative z-110 bg-black">
        <Contact />
      </div>
    </main>
  );
}
