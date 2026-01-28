import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-20">
      
      {/* Navigation Back */}
      <div className="container mx-auto px-6 mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-mono group">
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              <span>العودة للمدونة</span>
          </Link>
      </div>

      <article className="container mx-auto px-6 max-w-4xl">
          
              <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-6 text-xs text-zinc-500 font-mono mb-6 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                           <Calendar size={14} />
                           <span>{post.date}</span>
                      </div>
                      <span className="w-1 h-1 rounded-full bg-zinc-700" />
                      <div className="flex items-center gap-2">
                           <Clock size={14} />
                           <span>{post.readTime}</span>
                      </div>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold arabic-heading leading-tight mb-8">
                      {post.title}
                  </h1>
              </div>

          {/* Hero Image */}
          <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-16 border border-zinc-900">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
          </div>

          {/* Content Body */}
          <div className="prose prose-invert prose-lg mx-auto prose-zinc prose-headings:font-bold prose-headings:tracking-tight prose-a:text-white prose-img:rounded-xl">
               <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Footer / Author Block (Optional Future Add) */}
          <div className="mt-20 pt-12 border-t border-zinc-900 text-center">
              <p className="text-zinc-500 text-sm">شكراً للقراءة. شارك هذا المقال إذا وجدته ملهماً.</p>
          </div>

      </article>

    </main>
  );
}
