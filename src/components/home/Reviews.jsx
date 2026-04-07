"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTopReviews() {
      try {
        // Fetch only the top 3 latest reviews for the homepage
        const res = await fetch("/api/reviews?limit=3");
        const data = await res.json();
        if (data.success) {
          setReviews(data.feedbacks);
        }
      } catch (error) {
        console.error("Error loading homepage reviews:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTopReviews();
  }, []);

  return (
    <div className="w-full">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
          Heartfelt Reviews
        </h2>
        <p className="text-on-surface-variant text-[1.125rem] leading-[1.6] max-w-2xl italic">
          Why 10,000+ pet parents trust Conbun daily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2.75rem]">
        {isLoading ? (
          // Premium Loading Skeletons
          [1, 2, 3].map((n) => (
            <div key={n} className="bg-surface-container-lowest p-10 rounded-[2.5rem] h-80 animate-pulse flex flex-col justify-between editorial-shadow">
              <div className="space-y-4">
                <div className="h-4 w-32 bg-surface-container-high rounded-full"></div>
                <div className="h-20 w-full bg-surface-container-high rounded-xl"></div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-surface-container-high rounded-2xl"></div>
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-surface-container-high rounded-full"></div>
                  <div className="h-3 w-16 bg-surface-container-high rounded-full"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Live Data Mapping
          reviews.map((rev, i) => {
            // Theme-compliant colors for avatars without images
            const bgColors = ['bg-primary/10 text-primary', 'bg-surface-container-high text-on-surface', 'bg-secondary/10 text-secondary'];
            const colorClass = bgColors[rev.author?.length % bgColors.length || 0];

            return (
              <div 
                key={rev._id || i} 
                className="bg-surface-container-lowest p-10 rounded-[2.5rem] flex flex-col justify-between editorial-shadow transition-transform hover:-translate-y-2 duration-500 border border-outline-variant/30"
              >
                <div>
                  {/* Star Rating mapped to theme primary */}
                  <div className="flex gap-1 text-primary mb-8">
                    {[...Array(rev.rating || 5)].map((_, idx) => (
                      <span 
                        key={idx} 
                        className="material-symbols-outlined text-[1.25rem]" 
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  {/* Review Text */}
                  <p className="text-[1.125rem] italic font-medium leading-[1.6] text-on-surface mb-12 line-clamp-4">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center gap-5 mt-auto">
                  {/* Profile Avatar (Image fallback to Initials) */}
                  <div className={`w-14 h-14 rounded-2xl overflow-hidden border border-outline-variant relative flex-shrink-0 flex items-center justify-center font-black text-xl ${!rev.image && colorClass}`}>
                    {rev.image ? (
                      <Image src={rev.image} alt={rev.author} fill className="object-cover" />
                    ) : (
                      rev.author?.[0] || "P"
                    )}
                  </div>
                  <div>
                    <p className="text-[1rem] font-extrabold text-on-surface tracking-tight line-clamp-1">
                      {rev.author}
                    </p>
                    <p className="text-[0.75rem] text-on-surface-variant font-bold uppercase tracking-[0.1em] line-clamp-1">
                      {rev.category ? `Parent of ${rev.category}` : "Pet Parent"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}