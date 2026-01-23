import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Studio from '@/components/sections/Studio';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Work />
      <Services />
      <Studio />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
}
