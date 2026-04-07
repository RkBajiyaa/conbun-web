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

  if (featuredDoctors.length === 0) return null;

  return (
    <div className="w-full">
      {/* Centered Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
          Meet Our Expert Vets
        </h2>
        <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] italic max-w-2xl mx-auto">
          World-class veterinary care delivered with editorial warmth and precision.
        </p>
      </div>

      {/* Center Focus Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.75rem] items-start">
        {featuredDoctors.map((doc, index) => {
          const isFeatured = index === 1;
          return (
            <div
              key={doc._id}
              className={`group bg-surface-container-lowest rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500
                ${isFeatured
                  ? 'scale-[1.05] editorial-shadow shadow-2xl ring-2 ring-primary/20'
                  : 'editorial-shadow hover:-translate-y-2'
                }`}
            >
              <div className="h-80 overflow-hidden relative shrink-0 bg-surface-container-low">
                <Image
                  src={doc.image || "/dog.png"}
                  alt={doc.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[0.75rem] font-extrabold text-primary shadow-sm uppercase tracking-wider">
                  {doc.experience} Yrs Exp
                </div>
                {isFeatured && (
                  <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-xl text-[0.75rem] font-extrabold uppercase tracking-wider">
                    ⭐ Top Rated
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col grow">
                <div className="mb-4">
                  <h4 className="text-[1.25rem] font-extrabold text-on-surface tracking-tight mb-1 line-clamp-1">
                    {doc.name}
                  </h4>
                  <p className="text-primary font-extrabold text-[0.75rem] uppercase tracking-[0.1em] line-clamp-1">
                    {doc.title}
                  </p>
                </div>

                <p className="text-on-surface-variant text-[1rem] leading-[1.6] mb-8 line-clamp-2 italic">
                  {doc.about}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                  <Link href={`/find-vet/${doc._id}`} className="block">
                    <button className="w-full bg-primary text-white py-4 rounded-xl font-extrabold text-[0.9375rem] hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2">
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
          );
        })}
      </div>

      {/* Bottom centered CTA */}
      <div className="flex justify-center mt-14">
        <Link
          href="/find-vet"
          className="border-2 border-primary text-primary px-10 py-4 rounded-2xl font-extrabold text-[0.9375rem] flex items-center gap-2 hover:bg-primary hover:text-white transition-all active:scale-95"
        >
          View All Doctors
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}