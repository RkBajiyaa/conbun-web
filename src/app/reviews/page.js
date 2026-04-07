"use client";

import { useState, useEffect } from "react";
import ReviewsHero from "@/components/reviews/ReviewsHero";
import DeepDives from "@/components/reviews/DeepDives";
import MasonryGallery from "@/components/reviews/MasonryGallery";

export default function ReviewsPage() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [skip, setSkip] = useState(0);
  const LIMIT = 8; // Load 8 reviews at a time

  async function fetchReviews(isInitial = true) {
    try {
      const currentSkip = isInitial ? 0 : skip + LIMIT;
      const res = await fetch(`/api/reviews?limit=${LIMIT}&skip=${currentSkip}`);
      const data = await res.json();

      if (data.success) {
        if (isInitial) {
          setCaseStudies(data.cases);
          setFeedbacks(data.feedbacks);
        } else {
          setFeedbacks((prev) => [...prev, ...data.feedbacks]);
        }
        setHasMore(data.hasMore);
        setSkip(currentSkip);
      }
    } catch (err) {
      console.error("Failed to load reviews:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchReviews(true);
  }, []);

  return (
    <main className="bg-surface">
      <ReviewsHero />
      
      <DeepDives cases={caseStudies} loading={loading} />
      
      <MasonryGallery 
        feedbacks={feedbacks} 
        hasMore={hasMore} 
        onLoadMore={() => fetchReviews(false)}
        loading={loading}
      />
      
      {/* Fully Theme-Synced Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 mb-24 mt-24">
        <div className="relative bg-on-surface text-white rounded-[3rem] p-12 md:p-24 overflow-hidden text-center shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">Ready to start your own success story?</h2>
            <p className="text-xl opacity-80 mb-12 italic text-surface-container-low">Expert pet care is just one click away. Join the Conbun family today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
                Book Your Consultation
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all border border-white/20">
                View Pricing Plans
              </button>
            </div>
          </div>
          {/* Ambient Glows tied strictly to Primary */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/40 blur-[100px] rounded-full"></div>
        </div>
      </section>
    </main>
  );
}