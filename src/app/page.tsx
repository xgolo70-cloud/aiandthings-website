import InteractiveHero from '@/components/sections/InteractiveHero';
import Philosophy from '@/components/sections/Philosophy';
import HorizontalShowcase from '@/components/sections/HorizontalShowcase';
import Services from '@/components/sections/Services';
import Team from '@/components/sections/Team';
import Studio from '@/components/sections/Studio';
import TrustedBy from '@/components/sections/TrustedBy';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <InteractiveHero />
      <Philosophy />
      <HorizontalShowcase />
      <Services />
      <Team />
      <Studio />
      <TrustedBy />
      <Contact />
    </>
  );
}
