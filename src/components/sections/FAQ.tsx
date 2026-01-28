'use client';

import React, { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/Typography';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Terminal } from 'lucide-react';

const questions = [
  {
    id: "KB_01",
    q: "ما هي المدة المتوقعة لتنفيذ المشروع؟",
    a: "تتراوح دورات التنفيذ القياسية بين 8 إلى 14 أسبوعاً، اعتماداً على التعقيد المعماري. تتطلب المخرجات عالية الدقة مراحل اختبار صارمة لضمان الجودة."
  },
  {
    id: "KB_02",
    q: "ما هي القطاعات التي تستهدفونها؟",
    a: "أنظمتنا مرنة وقادرة على التكيف مع مختلف القطاعات. نحن نهندس حلولاً رقمية للتمويل، التكنولوجيا الرائدة، والتجزئة الفاخرة، مع إعطاء الأولوية للعمق في التنفيذ."
  },
  {
    id: "KB_03",
    q: "كيف يتم تحديد هيكل التكاليف؟",
    a: "التعاقدات لدينا مصممة حسب الطلب وبناءً على المشروع. نقدم مواصفات تقنية دقيقة وعروض تكلفة ثابتة بعد انتهاء مرحلة الاكتشاف (Discovery phase) الأولية."
  },
  {
    id: "KB_04",
    q: "هل توفرون بروتوكولات صيانة بعد الإطلاق؟",
    a: "جميع مخرجاتنا تتضمن نظام صيانة قياسي. نقوم بمراقبة السرعة، الكفاءة، والأداء، وضمان السلامة الجمالية للمنتج بعد الإطلاق."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-neutral-50 border-b border-neutral-100">
      
      <div className="mb-10">
        <Reveal>
           <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-0.5 bg-zinc-400" />
              <span className="text-sm font-medium text-zinc-500 arabic-text uppercase tracking-normal">
                  قاعدة المعرفة
              </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="text-zinc-900 pb-4 pt-2 leading-relaxed text-5xl md:text-7xl">
             تفاصيل <span className="text-zinc-400">النظام.</span>
          </SectionHeading>
        </Reveal>
      </div>

      <div className="bg-white border border-neutral-200 divide-y divide-neutral-100">
        {questions.map((item, i) => (
            <Reveal key={i} delay={i * 0.05} width="100%">
                <div className="group">
                    <button 
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-neutral-50 transition-colors text-left"
                    >
                        <div className="flex items-center gap-6">
                            <span className="text-[10px] text-neutral-400 w-12 shrink-0">
                                {item.id}
                            </span>
                            <span className="text-lg md:text-xl font-bold text-neutral-900 arabic-heading tracking-tight group-hover:text-brand-accent transition-colors">
                                {item.q}
                            </span>
                        </div>
                        <div className={`text-neutral-300 transition-transform duration-300 ${openIndex === i ? 'rotate-90 text-brand-dark' : 'group-hover:text-brand-dark'}`}>
                            <ChevronRight size={20} />
                        </div>
                    </button>
                    
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 md:px-8 pb-8 pt-0 pl-24 hidden md:block">
                                    <div className="flex gap-4">
                                        <Terminal size={16} className="text-brand-accent shrink-0 mt-1" />
                                        <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl arabic-text">
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                                {/* Mobile view without large padding */}
                                <div className="px-6 pb-8 pt-0 md:hidden">
                                     <p className="text-neutral-500 text-sm leading-relaxed arabic-text pl-12 border-l border-neutral-100 ml-3">
                                        {item.a}
                                     </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Reveal>
        ))}
      </div>

    </Section>
  );
}
