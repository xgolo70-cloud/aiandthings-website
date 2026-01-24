
import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  backgroundDecoration?: React.ReactNode;
}

export default function Section({ id, className = "", children, backgroundDecoration }: SectionProps) {
  return (
    <section id={id} className={`py-32 px-6 bg-white relative overflow-hidden ${className}`}>
      {backgroundDecoration}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}
