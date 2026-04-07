"use client";

import Image from 'next/image';
import { useMemo } from "react";

// We removed the MOCK_BLOGS import because we are now getting live 'blogs' as a prop
export default function BlogGrid({ category, query, blogs = [] }) {
  
  // 1. Filtering logic now uses the 'blogs' prop from MongoDB
  const filtered = useMemo(() => {
    return (blogs || []).filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchSearch =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, query, blogs]);

  // 2. Separate the first item as the "Featured" large layout
  // We check the 'featured' boolean we added in the DB insert
  const featured = filtered.find((p) => p.featured) || filtered[0];
  
  // 3. Take the next items for the smaller side layouts
  const sideArticles = filtered.filter((p) => p._id !== featured?._id).slice(0, 2);

  // Fallback if search or category returns nothing
  if (filtered.length === 0) {
    return (
      <section className="py-[8.5rem] text-center">
        <span className="material-symbols-outlined text-6xl mb-4 block text-on-surface-variant/40">search_off</span>
        <p className="text-[1.75rem] font-extrabold text-on-surface">No insights found</p>
        <p className="text-on-surface-variant mt-2 italic">Try adjusting your search or selecting a different category.</p>
      </section>
    );
  }

  return (
    <section className="py-[8.5rem]">
      <div className="flex items-end justify-between mb-16">
        <h2 className="text-4xl font-extrabold text-on-surface tracking-tight">Latest Insights</h2>
        <button className="text-primary font-extrabold flex items-center gap-2 group transition-all text-[0.9375rem]">
          View all 
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[2.75rem]">
        
        {/* Featured Large Article */}
        {featured && (
          <article className="md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-[1rem] overflow-hidden group editorial-shadow transition-all cursor-pointer">
            <div className="aspect-[4/3] md:aspect-video relative overflow-hidden bg-surface-container-low">
              <Image 
                src={featured.image || "/dog.png"} 
                alt={featured.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="p-10 flex flex-col h-full">
              <span className="text-primary-container font-extrabold text-[0.75rem] uppercase tracking-[0.05em] mb-4">
                {featured.category || "General"}
              </span>
              <h3 className="text-[1.75rem] font-extrabold mb-6 group-hover:text-primary transition-colors leading-tight line-clamp-3">
                {featured.title}
              </h3>
              
              <p className="text-[1rem] text-on-surface-variant line-clamp-2 italic mb-8 leading-[1.6]">
                {featured.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between pt-8 border-t border-outline-variant/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 relative overflow-hidden flex items-center justify-center text-primary font-black border border-primary/20">
                    {featured.author?.name?.[0] || "C"}
                  </div>
                  <div>
                    <p className="text-[0.9375rem] font-extrabold text-on-surface leading-none mb-1">
                      {featured.author?.name || "Editorial Team"}
                    </p>
                    <p className="text-[0.65rem] uppercase font-black text-primary tracking-[0.1em]">
                      Verified Expert
                    </p>
                  </div>
                </div>
                <span className="text-[0.7rem] font-black text-on-surface-variant/40 uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full">
                  {featured.readTime || "5 min read"}
                </span>
              </div>
            </div>
          </article>
        )}

        {/* Small Articles Side Layout */}
        {sideArticles.map((post) => (
          <article key={post._id} className="md:col-span-2 bg-surface-container-lowest rounded-[1rem] overflow-hidden flex flex-col md:flex-row group editorial-shadow transition-all cursor-pointer">
            <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden bg-surface-container-low border-r border-outline-variant/10">
              <Image 
                src={post.image || "/dog.png"} 
                alt={post.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <span className="text-primary-container font-extrabold text-[0.65rem] uppercase tracking-[0.1em] mb-3 block opacity-70">
                {post.category || "Article"}
              </span>
              <h3 className="text-[1.125rem] font-extrabold mb-3 group-hover:text-primary transition-colors leading-tight italic line-clamp-2">
                {post.title}
              </h3>
              <p className="text-[0.875rem] text-on-surface-variant line-clamp-2 italic mb-4 leading-[1.6]">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[0.65rem] font-black text-on-surface-variant/50 uppercase tracking-widest">
                  {post.readTime || "4 min read"}
                </span>
                <span className="material-symbols-outlined text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                   arrow_outward
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}