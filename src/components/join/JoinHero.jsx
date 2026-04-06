import Image from 'next/image';

export default function JoinHero() {
  return (
    <header className="relative overflow-hidden pt-20 pb-32 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-[#ffdbcd] text-[#360f00] text-xs font-bold tracking-widest uppercase mb-6">
            Partner Program
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1b1c1c] tracking-tight leading-[1.1] mb-8">
            Launch Your Online <br/> 
            <span className="text-[#f28c38] italic">Pet Clinic</span> in Minutes
          </h1>
          <p className="text-xl text-[#554337] leading-relaxed mb-10 max-w-lg">
            Join the digital revolution in veterinary care. Reach thousands of pet parents while maintaining the clinical excellence you're known for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#944a00] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-[0_12px_32px_-4px_rgba(85,67,55,0.08)] hover:opacity-95 transition-all">
              Start Your Application
            </button>
            <button className="bg-[#e4e2e2] text-[#1b1c1c] px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#efeded] transition-all">
              View Demo
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_12px_32px_-4px_rgba(85,67,55,0.08)] transform lg:rotate-2">
            {/* The source uses a placeholder, we use your dog image */}
            <Image src="/dog.png" alt="Veterinary Clinic" fill className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-[0_12px_32px_-4px_rgba(85,67,55,0.08)] max-w-[240px]">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-[#f28c38] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              <span className="text-3xl font-black text-[#1b1c1c]">6000+</span>
            </div>
            <p className="text-sm font-medium text-[#554337]">
              Active pet parents looking for your expertise right now.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}