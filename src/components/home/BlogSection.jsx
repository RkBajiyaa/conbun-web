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
      {/* Centered header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
          Latest from our Blog
        </h2>
        <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] italic">
          Knowledge treat for your pet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2.75rem] items-start">
        {isLoading ? (
          [1, 2, 3].map((n) => (
            <article key={n} className="animate-pulse flex flex-col">
              <div className="aspect-[16/10] rounded-[1.5rem] bg-surface-container-high mb-6"></div>
              <div className="h-3 w-20 bg-surface-container-high rounded-full mb-3"></div>
              <div className="h-6 w-full bg-surface-container-high rounded-full mb-3"></div>
              <div className="h-4 w-3/4 bg-surface-container-high rounded-full"></div>
            </article>
          ))
        ) : (
          blogs.map((post, i) => {
            const isFeatured = i === 1;
            return (
              <Link
                key={post._id}
                href="/blog"
                className={`group cursor-pointer flex flex-col transition-all duration-500
                  ${isFeatured ? 'scale-[1.04]' : ''}`}
              >
                <article className="flex flex-col h-full">
                  <div
                    className={`rounded-[1.5rem] overflow-hidden mb-6 relative shrink-0 bg-surface-container-high border border-outline-variant/20
                      ${isFeatured ? 'aspect-[4/3] editorial-shadow shadow-2xl ring-2 ring-primary/20' : 'aspect-[16/10] editorial-shadow'}`}
                  >
                    <Image
                      src={post.image || "/dog.png"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {isFeatured && (
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 rounded-lg text-[0.7rem] font-extrabold uppercase tracking-wider">
                        Editor's Pick
                      </div>
                    )}
                  </div>

                  <p className="text-[0.75rem] font-extrabold text-primary uppercase tracking-[0.1em] mb-3">
                    {post.category || "Article"}
                  </p>

                  <h3 className={`font-extrabold text-on-surface mb-3 group-hover:text-primary transition-colors leading-tight tracking-tight line-clamp-2
                    ${isFeatured ? 'text-[1.375rem]' : 'text-[1.25rem]'}`}>
                    {post.title}
                  </h3>

                  <p className="text-on-surface-variant text-[1rem] leading-[1.6] line-clamp-2 italic mt-auto">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            );
          })
        )}
      </div>

      {/* Bottom centered CTA */}
      <div className="flex justify-center mt-14">
        <Link
          href="/blog"
          className="border-2 border-primary text-primary px-10 py-4 rounded-2xl font-extrabold text-[0.9375rem] flex items-center gap-2 hover:bg-primary hover:text-white transition-all active:scale-95"
        >
          Explore Blog
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}