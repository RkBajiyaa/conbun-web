"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Find Vet", href: "/find-vet" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Join as Vet", href: "/join" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav ghost-border border-x-0 border-t-0 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-8 py-5 max-w-7xl mx-auto">
        {/* Editorial Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-on-surface cursor-pointer italic">
          Conbun
        </Link>
        
        {/* Desktop Links - Minimalist Editorial Style */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-all duration-300 text-[0.9375rem] tracking-tight ${
                  isActive 
                    ? "text-primary font-extrabold border-b-[2px] border-primary pb-1" 
                    : "text-on-surface-variant font-medium hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 md:gap-8">
          <span className="material-symbols-outlined text-on-surface-variant/70 cursor-pointer hover:text-primary transition-colors hidden sm:block">
            notifications
          </span>
          {/* Updated to rounded-full to match the premium pill-shape in the mockup */}
          <button className="bg-primary-container text-white px-8 py-3 rounded-full font-extrabold transition-all duration-300 active:scale-95 editorial-shadow text-sm hover:brightness-105">
            Consult Now
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center p-2 text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Following the Tonal Shift */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 bg-surface ${isMenuOpen ? 'max-h-screen opacity-100 border-b border-outline-variant/20 shadow-editorial' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => {
             const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
             return (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-extrabold tracking-tight ${isActive ? 'text-primary' : 'text-on-surface'}`}
              >
                {link.name}
              </Link>
             )
          })}
          <div className="mt-4 pt-6 border-t border-outline-variant/10 flex items-center gap-4 text-on-surface-variant font-bold">
            <span className="material-symbols-outlined">notifications</span>
            <span>Notifications</span>
          </div>
        </div>
      </div>
    </nav>
  );
}