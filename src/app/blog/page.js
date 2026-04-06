"use client";

import { useState } from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import Newsletter from "@/components/blog/Newsletter";
import CareEssentials from "@/components/blog/CareEssentials";
// We are adding this new component to house Claude's category buttons cleanly
import CategoryFilters from "@/components/blog/CategoryFilters"; 

export default function BlogPage() {
  // 1. Lift state up so the Hero, Filters, and Grid can share it
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    /* Background Surface Level 0 with your custom selection color */
    <main className="bg-surface min-h-screen selection:bg-primary/20">
      
      {/* 2. Editorial Hero (Pass search state to make it interactive) */}
      <BlogHero 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* 3. Category Filters (Horizontal scroll, matching editorial spacing) */}
        <div className="mb-14">
          <CategoryFilters 
            active={activeCategory} 
            setActive={setActiveCategory} 
          />
        </div>

        {/* 4. Bento Grid (Pass the state down so it knows what to render) */}
        <section className="section-gap pt-0">
          <BlogGrid 
            category={activeCategory} 
            query={searchQuery} 
          />
        </section>

        {/* 5. Tonal Shift Newsletter (Level 1 Surface Layering) */}
        <section className="mb-32">
          <Newsletter />
        </section>

        {/* 6. Asymmetric Bottom Section */}
        <CareEssentials />
      </div>
    </main>
  );
}