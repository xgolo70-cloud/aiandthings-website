import Hero from '@/components/sections/Hero';
import dynamic from 'next/dynamic';

const TrustedBy = dynamic(() => import('@/components/sections/TrustedBy'));
const Services = dynamic(() => import('@/components/sections/Services'));
const Work = dynamic(() => import('@/components/sections/Work'));
const Studio = dynamic(() => import('@/components/sections/Studio'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const About = dynamic(() => import('@/components/sections/About'));
const Contact = dynamic(() => import('@/components/sections/Contact'));
const Philosophy = dynamic(() => import('@/components/sections/Philosophy'));
const Process = dynamic(() => import('@/components/sections/Process'));
const FAQ = dynamic(() => import('@/components/sections/FAQ'));

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Philosophy />
      <Work />
      <Services />
      <Process />
      <Studio />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
    </>
  );
}
