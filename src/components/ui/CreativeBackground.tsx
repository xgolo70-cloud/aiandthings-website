'use client';

import React from 'react';

// Static seed-like data to avoid Math.random in render
const DEBRIS_DATA = [
    { id: 1, w: '2px', h: '2px', t: '15%', l: '10%', d: '0.5s', dur: '12s' },
    { id: 2, w: '3px', h: '3px', t: '45%', l: '85%', d: '2.1s', dur: '15s' },
    { id: 3, w: '2px', h: '2px', t: '75%', l: '25%', d: '1.5s', dur: '18s' },
    { id: 4, w: '4px', h: '4px', t: '10%', l: '60%', d: '3.2s', dur: '14s' },
    { id: 5, w: '2px', h: '2px', t: '85%', l: '50%', d: '0.8s', dur: '20s' },
    { id: 6, w: '3px', h: '3px', t: '30%', l: '40%', d: '4.5s', dur: '11s' },
    { id: 7, w: '2px', h: '2px', t: '60%', l: '15%', d: '1.2s', dur: '16s' },
    { id: 8, w: '2px', h: '2px', t: '20%', l: '90%', d: '2.5s', dur: '19s' },
    { id: 9, w: '3px', h: '3px', t: '90%', l: '10%', d: '0.2s', dur: '13s' },
    { id: 10, w: '4px', h: '4px', t: '5%', l: '30%', d: '5.1s', dur: '17s' },
];

export default function CreativeBackground() {
  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-zinc-950"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 70%),
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 80px 80px, 80px 80px',
      }}
    >
        {/* Animated Digital Debris */}
        <div className="absolute inset-0">
            {DEBRIS_DATA.map((item) => (
                <div 
                    key={item.id}
                    className="absolute bg-white/10 rounded-full blur-[2px] animate-float"
                    style={{
                        width: item.w,
                        height: item.h,
                        top: item.t,
                        left: item.l,
                        animationDelay: item.d,
                        animationDuration: item.dur
                    }}
                />
            ))}
        </div>
    </div>
  );
}
