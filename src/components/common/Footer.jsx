import Link from 'next/link';

export default function Footer() {
  return (
    /* Level 1 Surface Base (surface-container-low) sitting against Level 0 background */
    <footer className="w-full rounded-t-[3rem] bg-surface-container-low mt-[8.5rem]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 px-8 py-24 max-w-7xl mx-auto">
        <div className="col-span-1">
          {/* Editorial Logo Style */}
          <div className="text-2xl font-extrabold tracking-tighter text-on-surface mb-8 italic">
            Conbun
          </div>
          {/* Body Large Scale: 1rem with 1.6 line-height */}
          <p className="text-on-surface-variant text-[1rem] leading-[1.6] italic">
            Redefining pet healthcare with editorial warmth, expert precision, and soulful care.
          </p>
          <div className="flex gap-4 mt-10">
            <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-white transition-all cursor-pointer editorial-shadow">
              <span className="material-symbols-outlined text-[1.25rem]">public</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-white transition-all cursor-pointer editorial-shadow">
              <span className="material-symbols-outlined text-[1.25rem]">share</span>
            </div>
          </div>
        </div>
        
        <div>
          <h5 className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] mb-8 text-on-surface">Platform</h5>
          <ul className="space-y-4 text-on-surface-variant text-[0.9375rem] font-medium">
            <li><Link className="hover:text-primary transition-all" href="/find-vet">Online Consultation</Link></li>
            <li><Link className="hover:text-primary transition-all" href="#">Digital Prescription</Link></li>
            <li><Link className="hover:text-primary transition-all" href="#">Pet Pharmacy</Link></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] mb-8 text-on-surface">Resources</h5>
          <ul className="space-y-4 text-on-surface-variant text-[0.9375rem] font-medium">
            <li><Link className="hover:text-primary transition-all" href="/blog">Pet Care Blog</Link></li>
            <li><Link className="hover:text-primary transition-all" href="#">Vet Reviews</Link></li>
            <li><Link className="hover:text-primary transition-all" href="#">Community</Link></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] mb-8 text-on-surface">Company Info</h5>
          <ul className="space-y-4 text-on-surface-variant text-[0.9375rem] font-medium">
            <li><Link className="hover:text-primary transition-all" href="#">About Us</Link></li>
            <li><Link className="hover:text-primary transition-all" href="#">Terms of Service</Link></li>
            <li><Link className="hover:text-primary transition-all" href="#">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Label Medium Scale: 0.75rem All-Caps */}
      <div className="max-w-7xl mx-auto px-8 pb-12 text-center text-on-surface-variant/50 text-[0.75rem] font-bold tracking-[0.1em] uppercase">
        © 2026 Conbun Pet Care. Editorial warmth for your companions.
      </div>
    </footer>
  );
}