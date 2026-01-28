'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    title: "مشروع النبراس",
    category: "الذكاء الاصطناعي / تصميم الهوية",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop&q=80",
    desc: "نظام رؤية حاسوبية ذكي مخصص لتحليل البيانات الصناعية الكبرى."
  },
  {
    title: "منصة التفاعل",
    category: "تطوير الويب / تجربة المستخدم",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop&q=80",
    desc: "إعادة ابتكار التفاعل الرقمي بين الإنسان والآلة."
  },
  {
      title: "أتمتة الغد",
      category: "تحليل البيانات / أتمتة",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&q=80",
      desc: "خوارزميات متطورة تعمل في الخلفية لجعل كل شيء أسهل."
  }
];

export default function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const totalWidth = container.scrollWidth;
    const amountToScroll = totalWidth - window.innerWidth;

    const ctx = gsap.context(() => {
        gsap.to(container, {
            x: () => `+=${amountToScroll}`, // RTL direction moves to the right
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalWidth}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="works" className="relative overflow-hidden bg-zinc-950 pb-20 mesh-gradient-tech">
      <div className="absolute top-20 right-20 z-10">
          <span className="text-xs text-zinc-500 mb-4 block font-light">أعمال مختارة</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white arabic-impact leading-relaxed pb-12 pt-4">أعمالنا</h2>
      </div>

      <div ref={containerRef} className="flex flex-nowrap h-screen items-center px-[20vw] gap-[10vw]">
        {works.map((work, i) => (
          <div key={i} className="shrink-0 w-[70vw] md:w-[60vw] lg:w-[45vw] group">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-2xl group-hover:border-electric-violet/50 transition-all duration-500">
              <Image 
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              
              {/* Vibrant Glow Effect */}
              <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              <div className="absolute bottom-10 right-10 text-right">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase mb-3 block arabic-impact">{work.category}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-relaxed pb-2">{work.title}</h3>
              </div>
            </div>
            <div className="mt-8 max-w-sm mr-auto text-right">
                <p className="text-zinc-300 text-lg md:text-xl font-normal leading-relaxed">
                    {work.desc}
                </p>
                <button className="mt-6 flex items-center gap-4 text-[11px] font-bold text-white uppercase group-hover:gap-6 transition-all arabic-impact">
                    <span>عرض التفاصيل</span>
                    <div className="w-8 h-px bg-white/20 group-hover:w-12 transition-all" />
                </button>
            </div>
          </div>
        ))}
        
        {/* Call to Action Item */}
        <div className="shrink-0 w-[40vw] flex flex-col items-center justify-center text-center">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-relaxed pb-12 pt-4">جاهز لتبدأ <br/> قصتك معنا؟</h2>
             <button className="px-12 py-5 bg-white text-black rounded-full font-bold text-sm hover:bg-electric-cyan hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                 تواصل الآن
             </button>
        </div>
      </div>
    </section>
  );
}
