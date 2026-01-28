'use client';

import React from 'react';
import Section from '@/components/ui/Section';

export default function About() {
  return (
    <Section id="about" className="bg-white py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Huge Title */}
          <div>
              <h2 className="text-[8vw] leading-[0.9] font-bold tracking-tighter text-zinc-900 mb-12">
                  الجوهر<br/>
                  <span className="text-zinc-200">الرؤية.</span>
              </h2>
          </div>

          {/* Right: Abstract Composition */}
          <div className="flex flex-col justify-center space-y-12">
              <div className="pl-8 border-l-2 border-brand-accent">
                  <p className="text-3xl font-light leading-snug text-neutral-800 arabic-text">
                      نحن وحدة هندسية متخصصة في ابتكار وتطوير <span className="italic text-brand-accent">بنية تحتية رقمية ذكية.</span>
                  </p>
              </div>

              <div className="grid grid-cols-2 gap-8 text-xs arabic-text uppercase tracking-normal text-neutral-400">
                  <div className="p-6 bg-neutral-50">
                      كفاءة حسابية
                  </div>
                  <div className="p-6 bg-neutral-50">
                      معمارية عصبية
                  </div>
                  <div className="p-6 bg-neutral-50">
                      مختبرات الدفع
                  </div>
                  <div className="p-6 bg-brand-dark text-white">
                      نواة النظام
                  </div>
              </div>
          </div>
      </div>
    </Section>
  );
}
