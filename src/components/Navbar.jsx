"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <nav className="relative w-full z-[100] bg-surface py-3">
      <div className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="cursor-pointer flex-shrink-0 flex items-center">
          <Image 
            src="/logo.png" 
            alt="Conbun Logo" 
            width={130}
            height={36}
            priority 
          />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-all duration-300 text-[0.9rem] tracking-tight ${
                  isActive 
                    ? "text-primary font-extrabold border-b-[2px] border-primary pb-1" 
                    : "text-gray-800 font-semibold hover:text-primary opacity-90 hover:opacity-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 md:gap-8">
          <button className="bg-primary text-white px-10 py-4 rounded-full font-extrabold transition-all duration-300 active:scale-95 editorial-shadow text-sm hover:brightness-105 shadow-md shadow-primary/30">
            Consult Now
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center p-2 text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 bg-surface ${isMenuOpen ? 'max-h-screen opacity-100 border-b border-outline-variant/20 shadow-xl' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-8 gap-6 text-center">
          {navLinks.map((link) => {
             const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
             return (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl tracking-tight ${isActive ? 'text-primary font-black' : 'text-gray-800 font-bold opacity-90'}`}
              >
                {link.name}
              </Link>
             )
          })}
        </div>
      </div>
    </nav>
  );
}