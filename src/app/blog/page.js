"use client";

import { useState, useEffect } from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import Newsletter from "@/components/blog/Newsletter";
import CareEssentials from "@/components/blog/CareEssentials";
import CategoryFilters from "@/components/blog/CategoryFilters"; 

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        if (data.success) setAllBlogs(data.blogs);
      } catch (err) {
        console.error("Failed to load blogs:", err);
      } finally {
        setLoading(false);
      }
    }
    getBlogs();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="animate-pulse text-primary font-bold">Curating Stories...</div>
    </div>
  );

  return (
    <main className="bg-surface min-h-screen selection:bg-primary/20">
      <BlogHero 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        // Pass the first featured blog to the hero if you want it dynamic!
        featuredPost={allBlogs.find(b => b.featured)}
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-14">
          <CategoryFilters 
            active={activeCategory} 
            setActive={setActiveCategory} 
          />
        </div>

        <section className="section-gap pt-0">
          <BlogGrid 
            category={activeCategory} 
            query={searchQuery} 
            blogs={allBlogs} // Pass the LIVE data here
          />
        </section>

        <section className="mb-32">
          <Newsletter />
        </section>

        <CareEssentials />
      </div>
    </main>
  );
}