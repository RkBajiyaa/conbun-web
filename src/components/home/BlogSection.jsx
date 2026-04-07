"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestBlogs() {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        if (data.success) {
          // Grab only the 3 newest blogs for the homepage
          setBlogs(data.blogs.slice(0, 3));
        }
      } catch (error) {
        console.error("Error loading homepage blogs:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLatestBlogs();
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
            Latest from the Blog
          </h2>
          <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] italic">
            Curated health guides and soulful stories for the modern pet parent.
          </p>
        </div>
        
        <Link 
          href="/blog" 
          className="text-primary font-extrabold flex items-center gap-2 group transition-all text-[0.9375rem] uppercase tracking-[0.05em] pb-2 border-b-2 border-transparent hover:border-primary"
        >
          Explore All 
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2.75rem]">
        {isLoading ? (
          // Loading Skeletons
          [1, 2, 3].map((n) => (
            <article key={n} className="animate-pulse flex flex-col">
              <div className="aspect-[16/10] rounded-[1.5rem] bg-surface-container-high mb-6"></div>
              <div className="h-3 w-20 bg-surface-container-high rounded-full mb-3"></div>
              <div className="h-6 w-full bg-surface-container-high rounded-full mb-3"></div>
              <div className="h-4 w-3/4 bg-surface-container-high rounded-full"></div>
            </article>
          ))
        ) : (
          // Live Data Mapping
          blogs.map((post) => (
            <Link key={post._id} href="/blog" className="group cursor-pointer flex flex-col">
              <article className="flex flex-col h-full">
                <div className="aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6 relative editorial-shadow shrink-0 bg-surface-container-high border border-outline-variant/20">
                  <Image 
                    src={post.image || "/dog.png"} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                <p className="text-[0.75rem] font-extrabold text-primary uppercase tracking-[0.1em] mb-3">
                  {post.category || "Article"}
                </p>
                
                <h3 className="text-[1.25rem] font-extrabold text-on-surface mb-3 group-hover:text-primary transition-colors leading-tight tracking-tight line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-on-surface-variant text-[1rem] leading-[1.6] line-clamp-2 italic mt-auto">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}