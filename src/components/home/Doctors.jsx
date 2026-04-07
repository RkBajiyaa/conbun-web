"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Doctors() {
  const [featuredDoctors, setFeaturedDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedVets() {
      try {
        const res = await fetch("/api/vets");
        const data = await res.json();
        
        if (data.success) {
          // Filter for featured only and limit to 3 for the homepage layout
          const featured = data.vets.filter(doc => doc.featured).slice(0, 3);
          setFeaturedDoctors(featured);
        }
      } catch (error) {
        console.error("Error loading homepage experts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchFeaturedVets();
  }, []);

  // Premium Skeleton/Loading State
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-10 w-64 bg-surface-container-high rounded-full mb-4"></div>
          <div className="h-4 w-96 bg-surface-container rounded-full opacity-50"></div>
        </div>
      </div>
    );
  }

  // If no featured doctors exist in DB, hide the section or show a message
  if (featuredDoctors.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6">
            Meet Our Experts
          </h2>
          <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] italic">
            World-class veterinary care delivered with editorial warmth and precision.
          </p>
        </div>
        
        <div className="flex gap-4">
          <button className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-surface-container-high transition-all editorial-shadow group active:scale-95">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">chevron_left</span>
          </button>
          <button className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center editorial-shadow hover:brightness-105 transition-all active:scale-95">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.75rem]">
        {featuredDoctors.map((doc) => (
          <div 
            key={doc._id} 
            className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden editorial-shadow hover:-translate-y-2 transition-all duration-500 flex flex-col"
          >
            <div className="h-80 overflow-hidden relative shrink-0 bg-surface-container-low">
              <Image 
                src={doc.image || "/dog.png"} 
                alt={doc.name} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[0.75rem] font-extrabold text-primary shadow-sm uppercase tracking-wider">
                {doc.experience} Years Exp
              </div>
            </div>

            <div className="p-10 flex flex-col grow">
              <div className="mb-6">
                <h4 className="text-[1.25rem] font-extrabold text-on-surface tracking-tight mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {doc.name}
                </h4>
                <p className="text-primary font-extrabold text-[0.75rem] uppercase tracking-[0.1em] line-clamp-1">
                  {doc.title}
                </p>
              </div>
              
              <p className="text-on-surface-variant text-[1rem] leading-[1.6] mb-10 line-clamp-2 italic">
                {doc.about}
              </p>
              
              <div className="flex flex-col gap-4 mt-auto">
                <Link href={`/find-vet/${doc._id}`} className="block">
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-extrabold text-[0.9375rem] shadow-sm hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                    Consult for ₹{doc.price}
                    <span className="material-symbols-outlined !text-[1.125rem]">videocam</span>
                  </button>
                </Link>
                
                <Link href={`/find-vet/${doc._id}`} className="block">
                  <button className="w-full py-4 bg-surface-container-low text-on-surface font-extrabold rounded-xl text-[0.875rem] hover:bg-surface-container-high transition-all">
                    View Full Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}