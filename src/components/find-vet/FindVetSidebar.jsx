import Image from 'next/image';
import Link from 'next/link';

export default function FindVetSidebar() {
  return (
    <aside className="space-y-8 h-fit sticky top-32">
      {/* 1. Urgent Help Section - Tonal Layering with Editorial Shadow */}
      <div className="bg-primary p-10 rounded-[2rem] text-white editorial-shadow">
        <div className="flex items-start gap-4 mb-6">
          <span className="material-symbols-outlined text-4xl shrink-0 !w-10 !h-10">
            emergency_home
          </span>
          <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-white">Urgent Help?</h3>
        </div>
        <p className="text-white/80 mb-10 leading-[1.6] text-[1rem] italic">
          If your pet is experiencing a medical emergency, connect with a 24/7 emergency veterinarian immediately.
        </p>
        <a 
          href="tel:+1800PETMED" 
          className="block w-full text-center py-5 bg-white text-primary font-extrabold rounded-2xl hover:bg-primary-container hover:text-white transition-all shadow-lg active:scale-95"
        >
          Call Hotline Now
        </a>
      </div>

      {/* 2. Trust Metrics Section - Level 1 Surface Base */}
      <div className="bg-surface-container-low p-10 rounded-[2rem]">
        <h3 className="text-[1.125rem] font-extrabold mb-8 text-on-surface tracking-tight">Why Conbun Vets?</h3>
        <div className="space-y-8">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center editorial-shadow shrink-0">
              <span className="material-symbols-outlined text-primary shrink-0">verified</span>
            </div>
            <div>
              <h4 className="font-extrabold text-[0.9375rem] text-on-surface">Verified Credentials</h4>
              <p className="text-[0.875rem] text-on-surface-variant leading-[1.6] mt-2">
                Every vet on our platform is board-certified and vetted.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center editorial-shadow shrink-0">
              <span className="material-symbols-outlined text-primary shrink-0">reviews</span>
            </div>
            <div>
              <h4 className="font-extrabold text-[0.9375rem] text-on-surface">Community Trusted</h4>
              <p className="text-[0.875rem] text-on-surface-variant leading-[1.6] mt-2">
                Over 10k+ verified reviews from pet parents like you.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-surface-container-lowest rounded-xl flex items-center justify-center editorial-shadow shrink-0">
              <span className="material-symbols-outlined text-primary shrink-0">support_agent</span>
            </div>
            <div>
              <h4 className="font-extrabold text-[0.9375rem] text-on-surface">24/7 Support</h4>
              <p className="text-[0.875rem] text-on-surface-variant leading-[1.6] mt-2">
                Access your pet's health history anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Expert Spotlight Section (Updated for Telehealth) */}
      <div className="rounded-[2rem] overflow-hidden bg-surface-container-low">
        <div className="h-40 relative">
          {/* We'll use the placeholder for now, but this will look great with a real doctor photo */}
          <Image src="/dog.png" alt="Featured Expert" fill className="object-cover" />
          <div className="absolute inset-0 bg-on-surface/20"></div>
          <span className="absolute bottom-5 left-5 text-white text-[0.75rem] font-extrabold uppercase tracking-[0.05em]">
            Expert Spotlight
          </span>
        </div>
        <div className="p-10">
          <h4 className="text-[1.125rem] font-extrabold mb-3 text-on-surface tracking-tight">Dr. Devyani Mate</h4>
          <p className="text-[0.875rem] text-on-surface-variant mb-6 leading-[1.6] italic">
            Top-rated Veterinary Microbiologist & Nutrition Specialist. Available for instant video consults.
          </p>
          <Link href="/find-vet/vet_002" className="text-primary text-sm font-extrabold flex items-center gap-2 group">
            Book Consultation 
            <span className="material-symbols-outlined !text-sm shrink-0 group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}