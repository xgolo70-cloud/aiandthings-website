
import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionEyebrow({ children, className = "" }: TypographyProps) {
  return (
    <span className={`text-accent-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeading({ children, className = "" }: TypographyProps) {
  return (
    <h2 className={`text-6xl md:text-8xl font-bold tracking-tighter text-neutral-950 font-display ${className}`}>
      {children}
    </h2>
  );
}

export function SectionSubheading({ children, className = "" }: TypographyProps) {
  return (
    <p className={`text-lg md:text-xl text-neutral-500 font-light leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
