"use client";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  // Interactive intent state
  const [activeConcern, setActiveConcern] = useState(null);

  const concerns = [
    { id: "skin", label: "Skin & Coat", icon: "pest_control", doctorType: "Dermatologist" },
    { id: "diet", label: "Diet & Digestion", icon: "nutrition", doctorType: "Nutritionist" },
    { id: "behavior", label: "Behavior", icon: "psychology", doctorType: "Behaviorist" },
    { id: "general", label: "General Checkup", icon: "stethoscope", doctorType: "Specialist" }
  ];

  const currentConcern = concerns.find(c => c.id === activeConcern) || concerns[3];

  return (
    <header className="relative pb-24 overflow-hidden max-w-7xl mx-auto px-6 pt-12 md:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-primary/10">
            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span className="text-primary text-[0.75rem] font-extrabold tracking-[0.1em] uppercase">
              Trusted by 6,000+ Pet Parents
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.02em] text-on-surface leading-[1.05] mb-6">
            Expert Vet Care. <br/>
            <span className="text-primary italic font-medium">Instantly.</span>
          </h1>
          
          <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] mb-10 max-w-xl italic">
            Skip the waiting room. Connect with world-class specialists in under 
            <span className="font-bold text-on-surface underline decoration-primary/40 mx-1">
              60 seconds
            </span> for immediate peace of mind.
          </p>

          {/* Interactive Concern Chips */}
          <div className="mb-8">
            <p className="text-sm font-extrabold text-on-surface-variant uppercase tracking-widest mb-4">What's bothering your pet?</p>
            <div className="flex flex-wrap gap-3">
              {concerns.map((concern) => (
                <button
                  key={concern.id}
                  onClick={() => setActiveConcern(concern.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeConcern === concern.id 
                      ? "bg-primary text-white editorial-shadow scale-105" 
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  <span className="material-symbols-outlined text-[1.1rem]">{concern.icon}</span>
                  {concern.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic CTA based on selection */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/find-vet" className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 transition-all hover:brightness-105 editorial-shadow active:scale-95">
              Find a {currentConcern.doctorType}
              <span className="text-sm opacity-80 font-normal border-l border-white/20 pl-3">₹199</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-4 border-surface overflow-hidden relative editorial-shadow bg-surface-container-low">
                   <Image src="/heroimage.png" alt="User" fill className="object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary flex items-center justify-center text-[10px] font-black text-white editorial-shadow">
                  4.9★
                </div>
              </div>
              <span className="text-sm font-medium text-on-surface-variant italic">
                "Saved my puppy late at night!"
              </span>
            </div>
          </div>
        </div>

        {/* Right Content: Editorial Overlap Layout */}
        <div className="lg:col-span-5 relative hidden md:block">
          <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] editorial-shadow group bg-surface-container-low">
            <Image 
              src="/heroimage.png" 
              alt="Expert Vet" 
              fill 
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              priority 
            />
            
            <div className="absolute bottom-8 left-8 right-8 glass-nav p-6 rounded-2xl ghost-border flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  timer
                </span>
              </div>
              <div>
                <p className="text-[0.75rem] font-extrabold text-primary uppercase tracking-widest mb-1">Live Response</p>
                <p className="text-lg font-extrabold text-on-surface tracking-tight">Connected in 42s</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </header>
  );
}