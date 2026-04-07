"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="relative pb-0 overflow-visible max-w-7xl mx-auto px-6 pt-8 md:pt-12">
      {/* Top centered text block - Reduced top padding to pull image up */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8">
        
        {/* Increased text size to take more area for the main message */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-on-surface leading-[1.05] mb-6">
          Expert Vet Care.<br className="hidden md:block" />{' '}
          <span className="text-primary italic font-medium">Instantly.</span>
        </h1>

        <p className="text-lg md:text-xl text-on-surface-variant leading-[1.6] mb-8 max-w-2xl italic">
          Skip the waiting room. Connect with world-class specialists in under{' '}
          <span className="font-bold text-on-surface underline decoration-primary/40">
            30 seconds
          </span>{' '}
          for immediate peace of mind.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Link
            href="/find-vet"
            className="bg-primary text-white px-10 py-4 md:py-5 rounded-full font-extrabold text-lg flex items-center justify-center gap-3 transition-all hover:brightness-105 editorial-shadow active:scale-95 w-full sm:w-auto"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              videocam
            </span>
            Consult Now
          </Link>

          <Link
            href="/download"
            className="bg-surface-container-low text-on-surface px-8 py-4 md:py-5 rounded-full font-extrabold text-lg flex items-center justify-center gap-3 transition-all hover:bg-surface-container-high active:scale-95 w-full sm:w-auto border border-outline-variant"
          >
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
              </svg>
            </div>
            Download App
          </Link>
        </div>
      </div>

      {/* Full-width pet image pinned to bottom of hero */}
      <div className="relative w-full flex justify-center mt-2">
        {/* Gradient fade at top so image blends into background */}
        <div
          className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, var(--color-surface, #faf9f7) 0%, transparent 100%)',
          }}
        />
        
        {/* Increased max-height slightly to allow more image to show */}
        <div className="relative w-full flex justify-center overflow-hidden" style={{ maxHeight: '500px' }}>
          <Image
            src="/heroimage.png"
            alt="Happy pets — dogs and cats"
            width={1400}
            height={500}
            className="object-cover object-top w-full"
            priority
          />
        </div>
      </div>
    </header>
  );
}