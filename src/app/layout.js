import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";

// Using Next.js Font Optimization for your primary typography
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: "Conbun | Expert Vet Care. Instantly.",
  description: "Connect with world-class veterinary specialists in under 60 seconds. Skip the waiting room.",
  keywords: "online vet, pet care, veterinary consultation, Conbun app", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Bulletproof Material Icons Import */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap" 
        />
      </head>
      <body 
        className={`
          ${jakarta.variable} 
          font-sans 
          bg-surface 
          text-on-surface 
          antialiased
        `}
      >
        {/* <Navbar /> */} 
        {/* Note: Make sure Navbar and Footer exist in these paths, or comment them out until we build them! */}
        <Navbar />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}