import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    /* Level 1 Surface Base (surface-container-low) sitting against Level 0 background */
    <footer className="w-full rounded-t-[3rem] bg-surface-container-low mt-20 md:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        
        {/* Brand Column */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Official Image Logo - Fixed Next.js Image logic */}
          <Link href="/" className="mb-6 flex-shrink-0 flex items-center justify-center md:justify-start">
            <Image 
              src="/logo.png" 
              alt="Conbun Logo" 
              width={144}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
          
          {/* Body Large Scale: 1rem with 1.6 line-height */}
          <p className="text-on-surface-variant text-[1rem] leading-[1.6] italic">
            Redefining pet healthcare with editorial warmth, expert precision, and soulful care.
          </p>
          
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm hover:-translate-y-1">
              <span className="material-symbols-outlined text-[1.25rem]">public</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm hover:-translate-y-1">
              <span className="material-symbols-outlined text-[1.25rem]">share</span>
            </div>
          </div>
        </div>
        
        {/* Links Column 1 */}
        <div className="text-center md:text-left">
          <h5 className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] mb-8 text-on-surface">Platform</h5>
          <ul className="space-y-4 text-on-surface-variant text-[0.9375rem] font-medium">
            <li><Link className="hover:text-primary transition-all" href="/find-vet">Online Consultation</Link></li>
            <li><Link className="hover:text-primary transition-all" href="#">Digital Prescription</Link></li>
            <li><Link className="hover:text-primary transition-all" href="#">Pet Pharmacy</Link></li>
          </ul>
        </div>
        
        {/* Links Column 2 */}
        <div className="text-center md:text-left">
          <h5 className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] mb-8 text-on-surface">Resources</h5>
          <ul className="space-y-4 text-on-surface-variant text-[0.9375rem] font-medium">
            <li><Link className="hover:text-primary transition-all" href="/blog">Pet Care Blog</Link></li>
            <li><Link className="hover:text-primary transition-all" href="#">Vet Reviews</Link></li>
            <li><Link className="hover:text-primary transition-all" href="#">Community</Link></li>
          </ul>
        </div>
        
        {/* Links Column 3 */}
        <div className="text-center md:text-left">
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