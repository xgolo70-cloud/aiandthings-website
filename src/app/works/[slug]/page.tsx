import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

// Valid Static Params for SSG
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params in newer Next.js versions if needed, but for now treating as prop
  // However, removing 'use client' means we can't use framer-motion directly in the main component easily unless we wrap it or accept it's server side.
  // For simplicity to fix build, we remove framer-motion animations from the server component or move them to a client component.
  // Let's remove 'use client' and animations for now to ensure build stability, as mixing headers and static params is tricky.
  // Actually, 'generateStaticParams' works with Server Components. The issue is 'use client' with 'generateStaticParams' in the same file is sometimes problematic or just the 'export' pattern. 
  // But the error "The exported configuration object..." usually refers to page config options.
  
  // Let's split it. Page is Server Component, animation parts are client.
  // For now, I will keep it simple: Server Component, no framer-motion on the main layout heavy lifting.
  
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-20">
      
      {/* Navigation Back */}
      <div className="container mx-auto px-6 mb-12">
          <Link href="/works" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-normal font-mono group">
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              <span>العودة للأعمال</span>
          </Link>
      </div>

      {/* Project Header */}
      <div className="container mx-auto px-6 mb-20 text-center">
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-normal block mb-6">
              {project.category}
          </span>
          <h1 className="text-5xl md:text-8xl font-bold arabic-heading mb-8">
              {project.title}
          </h1>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[80vh] relative mb-24">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
      </div>

      {/* Project Info Grid */}
      <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-zinc-900 pb-20 mb-20">
              <div className="md:col-span-8">
                  <h3 className="text-2xl font-bold mb-6 arabic-heading">النبذة</h3>
                  <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                      {project.desc}
                  </p>
              </div>
              <div className="md:col-span-4 flex flex-col gap-8 text-right md:text-left dir-rtl md:dir-ltr">
                  <div>
                      <span className="text-zinc-500 text-xs uppercase tracking-normal block mb-1">العميل</span>
                      <span className="text-white text-lg font-medium">{project.client}</span>
                  </div>
                  <div>
                      <span className="text-zinc-500 text-xs uppercase tracking-normal block mb-1">السنة</span>
                      <span className="text-white text-lg font-medium">{project.year}</span>
                  </div>
              </div>
          </div>
          
          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
              <div className="bg-zinc-900/30 p-10 rounded-2xl border border-white/5">
                   <h3 className="text-3xl font-bold mb-6 arabic-heading text-white">التحدي</h3>
                   <p className="text-zinc-400 leading-relaxed text-lg">
                       {project.challenge}
                   </p>
              </div>
              <div className="bg-zinc-900/30 p-10 rounded-2xl border border-white/5">
                   <h3 className="text-3xl font-bold mb-6 arabic-heading text-white">الحل</h3>
                   <p className="text-zinc-400 leading-relaxed text-lg">
                       {project.solution}
                   </p>
              </div>
          </div>

          {/* Gallery */}
           <div className="mb-32">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-normal mb-12 text-center">معرض الصور</h3>
              <div className="grid grid-cols-1 gap-8">
                  {project.gallery?.map((img, i) => (
                      <div key={i} className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900">
                          <Image 
                            src={img}
                            alt={`${project.title} - ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                      </div>
                  ))}
              </div>
           </div>

      </div>

    </main>
  );
}
