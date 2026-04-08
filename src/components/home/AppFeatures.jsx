"use client";
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    screen: "/app-screen-1.png", 
    badge: "Step 01",
    title: "Describe Concern & Connect",
    desc: "Start by telling us what's wrong. Our smart system matches and connects you with the right doctor in under 30 seconds.",
    icon: "edit_note",
  },
  {
    screen: "/app-screen-2.png", 
    badge: "Step 02",
    title: "Personal Conversations & Multimedia",
    desc: "Talk directly with experienced vets who listen with deep empathy. Share videos, photos, and old prescriptions during and after the call.",
    icon: "forum",
    featured: true,
  },
  {
    screen: "/app-screen-3.png", 
    badge: "Step 03",
    title: "Digital RX & Free Follow-up",
    desc: "Get your digital prescription immediately after the call and enjoy 7 days of free follow-up chat with the same doctor.",
    icon: "description",
  },
];

export default function AppFeatures() {
  return (
    <div className="w-full py-10">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
          How to consult with our Vet
        </h2>
        <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] italic max-w-2xl mx-auto">
          We've reimagined pet healthcare to be as instant, personal, and professional as you deserve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 items-start max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.badge}
            className={`flex flex-col items-center text-center transition-all duration-500 ease-out
              ${step.featured ? 'md:-translate-y-8' : 'hover:-translate-y-2'}`}
          >
            <p className="text-[0.75rem] font-extrabold text-primary uppercase tracking-[0.15em] mb-3">
              {step.badge}
            </p>

            {/* CHANGED: Removed the rigid height, white background, and borders. 
                Using h-auto so the image dictates its own height and shows 100% of itself. */}
            <div className="relative mb-8 w-full flex justify-center">
              <Image
                src={step.screen}
                alt={step.title}
                width={300}
                height={600}
                className={`w-[220px] sm:w-[240px] h-auto object-contain transition-all duration-300
                  ${step.featured ? 'drop-shadow-2xl' : 'drop-shadow-lg'}`}
                priority={step.featured}
              />
            </div>

            <div className="px-2">
              <h3 className="text-[1.25rem] font-extrabold text-on-surface tracking-tight mb-4 leading-tight">
                {step.title}
              </h3>

              <p className="text-on-surface-variant text-[1rem] leading-[1.6] italic max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 md:mt-16">
        <Link
          href="/find-vet"
          className="bg-primary text-white px-12 py-5 rounded-full font-extrabold text-lg flex items-center gap-3 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
        >
          Start a Consultation
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}