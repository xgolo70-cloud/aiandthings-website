'use client';

import dynamic from 'next/dynamic';

const ParticleScroll = dynamic(() => import('./ParticleScroll'), { 
  ssr: false,
  loading: () => <div className="h-screen w-full bg-black" /> 
});

export default function ParticleScrollWrapper() {
  return <ParticleScroll />;
}
