"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function MasonryGallery({ feedbacks = [], hasMore, onLoadMore, loading }) {
  const categories = ["All Stories", "Dogs", "Cats", "Birds", "Exotics"];
  const [activeCategory, setActiveCategory] = useState("All Stories");

  const filteredFeedbacks = feedbacks.filter(f => 
    activeCategory === "All Stories" || f.category === activeCategory
  );

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-on-surface">Community Gallery</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((tag) => (
            <button 
              key={tag} 
              onClick={() => setActiveCategory(tag)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
                activeCategory === tag 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {filteredFeedbacks.length > 0 && (
          <ReviewCard review={filteredFeedbacks[0]} />
        )}

        {/* Static CTA: Join 20,000+ Happy Tails */}
        {/* Swapped #944a00 for bg-primary and text-primary */}
        <div className="bg-primary text-white p-10 rounded-3xl flex flex-col justify-center items-center text-center gap-6 lg:row-span-2 shadow-2xl editorial-shadow relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          <span className="material-symbols-outlined text-6xl relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
          <h3 className="text-3xl font-black leading-tight relative z-10">Join 20,000+ Happy Tails</h3>
          <p className="opacity-90 italic relative z-10">Experience pet care designed with empathy.</p>
          <button className="w-full bg-surface-container-lowest text-primary py-4 rounded-xl font-black text-sm active:scale-95 transition-transform hover:shadow-lg relative z-10">
            Start Your Journey
          </button>
        </div>

        {/* Static CTA: Add Your Story Card */}
        {/* Swapped hardcoded grays/browns for surface-container-low, outline-variant, and on-surface-variant */}
        <div className="bg-surface-container-low border border-outline-variant p-8 rounded-3xl flex flex-col justify-center items-center text-center gap-4 hover:bg-surface-container-lowest transition-colors cursor-pointer group">
          <span className="material-symbols-outlined text-on-surface-variant opacity-50 text-4xl group-hover:scale-110 transition-transform">add_a_photo</span>
          <p className="font-bold text-on-surface-variant">Your Story Next?</p>
          <span className="text-xs text-primary font-black underline underline-offset-4">Submit Testimonial</span>
        </div>

        {filteredFeedbacks.slice(1).map((review, index) => (
          <ReviewCard key={review._id || index} review={review} />
        ))}
      </div>

      {!loading && filteredFeedbacks.length === 0 && (
        <div className="text-center py-12 text-on-surface-variant italic">
          No stories found for this category yet. Check back soon!
        </div>
      )}

      {hasMore && (
        <div className="mt-16 text-center">
          <button 
            onClick={onLoadMore}
            disabled={loading}
            className="bg-surface-container-high text-on-surface px-10 py-4 rounded-full font-bold text-sm hover:bg-surface-container-highest transition-all disabled:opacity-50 flex items-center gap-2 mx-auto active:scale-95"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin">refresh</span>
                Curating Stories...
              </>
            ) : (
              "Load More Stories"
            )}
          </button>
        </div>
      )}
    </section>
  );
}

function ReviewCard({ review }) {
  // Replaced generic Tailwind colors with your specific theme variables
  const bgColors = [
    'bg-primary/10 text-primary', 
    'bg-surface-container-high text-on-surface', 
    'bg-secondary/10 text-secondary' // Utilizing the --color-secondary from your CSS
  ];
  const colorClass = bgColors[review.author.length % bgColors.length];

  return (
    <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant shadow-sm flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${colorClass}`}>
            {review.author[0]}
          </div>
          <div>
            <p className="font-bold text-sm text-on-surface line-clamp-1">{review.author}</p>
            <p className="text-[10px] text-primary font-black uppercase tracking-widest">
              {review.category || "Pet Parent"}
            </p>
          </div>
        </div>
        {/* Swapped #f28c38 for text-primary */}
        {review.rating && (
          <div className="flex text-primary">
            <span className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
        )}
      </div>
      <p className="text-sm leading-relaxed text-on-surface-variant italic font-medium line-clamp-6">
        "{review.text}"
      </p>
      {review.platform === "Play Store" && (
        <div className="mt-auto pt-6 flex items-center gap-2 opacity-50">
          <span className="material-symbols-outlined text-[1rem] text-on-surface-variant">shop</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Play Store Review</span>
        </div>
      )}
    </div>
  );
}