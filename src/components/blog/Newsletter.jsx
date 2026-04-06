"use client";

import { useState } from "react";

export default function Newsletter() {
  // Add state to handle the form and success message
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here is where you would normally send the email to your API/database
      setSubscribed(true);
    }
  };

  return (
    /* Level 1 Surface Base (surface-container-low) sitting against Level 0 background. 
       Removed 'border' class to follow the "No-Line" Rule. */
    <section className="mb-[8.5rem] bg-surface-container-low rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center overflow-hidden relative">
      
      {/* Signature Geometric Corner Shapes (Replaced blurred orbs with crisp vector-style circles matching design) */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-primary-container opacity-10 rounded-full -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary opacity-[0.05] rounded-full translate-x-16 translate-y-16"></div>
      
      <div className="max-w-2xl relative z-10">
        {/* Bold Duotone Icon matching Typography Weight */}
        <span className="material-symbols-outlined text-primary text-7xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>
          mail
        </span>
        
        {/* Headline Large Scale with -0.01em tracking */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-on-surface">
          A dose of wisdom in your inbox
        </h2>
        
        {/* Body Large Scale: 1rem with 1.6 line-height */}
        <p className="text-on-surface-variant text-[1.125rem] leading-[1.6] mb-12 italic">
          Join 15,000+ pet parents receiving our weekly editorial on pet longevity, holistic health, and mindful care.
        </p>
        
        {/* Conditional Rendering: Show success message OR the form */}
        {subscribed ? (
          <div className="bg-surface-container-lowest py-5 px-8 rounded-full inline-flex items-center gap-3 text-primary font-bold text-lg editorial-shadow animate-fade-in">
            <span className="material-symbols-outlined icon-filled">check_circle</span>
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full">
            <input 
              className="flex-1 rounded-full px-8 py-5 bg-surface-container-lowest ghost-border focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40 text-on-surface" 
              placeholder="Email address" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* Primary CTA: Hero Amber with Editorial Shadow */}
            <button 
              type="submit" 
              className="bg-primary text-white px-12 py-5 rounded-full font-extrabold hover:brightness-105 transition-all editorial-shadow active:scale-95"
            >
              Subscribe Now
            </button>
          </form>
        )}
        
        {/* Label Medium Scale: 0.75rem All-Caps */}
        <p className="mt-8 text-[0.75rem] text-on-surface-variant/50 font-bold uppercase tracking-[0.1em]">
          Respecting your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}