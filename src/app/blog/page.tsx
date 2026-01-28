'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-20">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-24 text-center">
         <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-zinc-500 font-mono text-xs uppercase tracking-normal block mb-4"
          >
              المدونة
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold arabic-heading mb-6"
          >
              أفكار <span className="text-zinc-600">ورؤى</span>
          </motion.h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              نستكشف تقاطعات التكنولوجيا والتصميم والإنسانية. مقالات حول المستقبل الذي نبنيه اليوم.
          </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 gap-12">
              {blogPosts.map((post, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                      <Link href={`/blog/${post.slug}`} className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-zinc-900 pb-12">
                          
                          <div className="md:col-span-4 relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-900">
                              <Image 
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                          </div>

                          <div className="md:col-span-8 text-right">
                              <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-mono">
                                  <span>{post.date}</span>
                                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                  <span>{post.readTime}</span>
                              </div>
                              <h2 className="text-3xl font-bold text-white mb-4 arabic-heading group-hover:text-zinc-300 transition-colors">
                                  {post.title}
                              </h2>
                              <p className="text-zinc-400 font-light leading-relaxed mb-6 line-clamp-2">
                                  {post.excerpt}
                              </p>
                              <span className="text-sm font-bold text-white uppercase tracking-normal group-hover:underline decoration-zinc-700 underline-offset-4">
                                  اقرأ المزيد
                              </span>
                          </div>

                      </Link>
                  </motion.div>
              ))}
          </div>
      </div>

    </main>
  );
}
