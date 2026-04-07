import Image from 'next/image';

export default function JoinHero() {
  return (
    <header className="relative overflow-hidden pt-12 pb-32 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-extrabold tracking-widest uppercase mb-6">
            Partner Program
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.05] mb-8">
            Launch Your Online <br/> 
            <span className="text-primary-container italic font-medium">Pet Clinic</span> in Minutes
          </h1>
          <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] mb-10 max-w-lg italic">
            Join the digital revolution in veterinary care. Reach thousands of pet parents while maintaining the clinical excellence you're known for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-extrabold editorial-shadow hover:brightness-105 active:scale-95 transition-all">
              Start Your Application
            </button>
            <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl text-lg font-extrabold hover:bg-surface-container-high transition-all active:scale-95">
              View Demo
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden editorial-shadow transform lg:rotate-2">
            <Image 
              src="/dog.png" 
              alt="Veterinary Clinic" 
              fill 
              className="w-full h-full object-cover" 
              priority
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-3xl editorial-shadow max-w-[240px]">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                groups
              </span>
              <span className="text-3xl font-black text-on-surface tracking-tight">6000+</span>
            </div>
            <p className="text-sm font-bold text-on-surface-variant leading-relaxed">
              Active pet parents looking for your expertise right now.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}