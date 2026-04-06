import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Features from "@/components/home/Features";
import Steps from "@/components/home/Steps";
import Doctors from "@/components/home/Doctors";
import Reviews from "@/components/home/Reviews";
import BlogSection from "@/components/home/BlogSection";
import FAQSection from "@/components/home/FAQ";
import UrgentCTA from "@/components/common/UrgentCTA";

export default function Home() {
  return (
    <main className="bg-surface selection:bg-primary/20 overflow-x-hidden pt-24">
      
      {/* 1. Hero: Interactive intent */}
      <Hero />

      {/* 2. Trust Bar: Tighter padding so it anchors the Hero visually */}
      <section className="bg-surface-container-low py-16 px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <TrustBar />
        </div>
      </section>

      {/* 3. Features: The Conbun Edge */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <Features />
        </div>
      </section>

      {/* 4. Steps: High-Contrast Pill */}
      <section className="bg-primary text-white rounded-[3rem] md:rounded-[4rem] mx-4 md:mx-12 mb-32 editorial-shadow">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Steps />
        </div>
      </section>

      {/* 5. Doctors: Meet the Experts (Kept as requested!) */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <Doctors />
        </div>
      </section>

      {/* 6. Reviews: Social Proof */}
      <section className="bg-surface-container-low px-6 py-24 rounded-[3rem] md:rounded-[4rem] mx-4 md:mx-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <Reviews />
        </div>
      </section>

      {/* 7. Blog: Authority */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <BlogSection />
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="pb-[8.5rem] px-6">
        <div className="max-w-4xl mx-auto">
          <FAQSection />
        </div>
      </section>

      <UrgentCTA />
    </main>
  );
}