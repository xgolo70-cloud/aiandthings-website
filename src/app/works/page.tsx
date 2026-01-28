'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { projects } from '@/data/projects';
import Link from 'next/link';

export default function WorksPage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
        >
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-normal block mb-4">معرض الأعمال</span>
            <h1 className="text-5xl md:text-7xl font-bold arabic-heading mb-6">ابتكاراتنا <span className="text-zinc-600">الرقمية</span></h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                مجموعة مختارة من المشاريع التي تحدت الحدود التقنية والإبداعية. نحن نبني ما يعتقد الآخرون أنه مستحيل.
            </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((work, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="group"
                >
                    <Link href={`/works/${work.slug}`} className="block">
                        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 mb-6 group-hover:border-zinc-700 transition-colors cursor-pointer">
                            <Image 
                                src={work.image}
                                alt={work.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>

                        <div className="text-right">
                            <span className="text-xs font-bold text-zinc-500 uppercase tracking-normal mb-2 block">{work.category}</span>
                            <h3 className="text-3xl font-bold text-white mb-3 arabic-heading group-hover:text-zinc-300 transition-colors">{work.title}</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">{work.desc}</p>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>

      </div>
    </main>
  );
}
