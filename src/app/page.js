import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Expertise from "@/components/home/Expertise";
import AppFeatures from "@/components/home/AppFeatures";
import Doctors from "@/components/home/Doctors";
import Reviews from "@/components/home/Reviews";
import BlogSection from "@/components/home/BlogSection";
import FAQSection from "@/components/home/FAQ";
import ClosingCTA from "@/components/common/ClosingCTA";

export default function Home() {
  return (
    // Removed pt-24 because Hero.jsx perfectly handles its own top spacing now!
    <main className="bg-surface selection:bg-primary/20 overflow-x-hidden">

      {/* 1. Hero: Centered, no chips */}
      <Hero />

      {/* 2. Trust Bar: Most trusted among pet parents */}
      {/* Replaced massive mb-32 with our responsive section-gap utility */}
      <section className="bg-surface-container-low section-gap px-6">
        <div className="max-w-7xl mx-auto">
          <TrustBar />
        </div>
      </section>

      {/* 3. Expertise: Dog, Cat, Bird/Exotic cards */}
      <section className="section-gap px-6">
        <div className="max-w-7xl mx-auto">
          <Expertise />
        </div>
      </section>

      {/* 4. App Features: The Sanctuary in Your Pocket (merged Features + Steps) */}
      <section className="bg-surface-container-low section-gap px-6 rounded-[3rem] md:rounded-[4rem] mx-4 md:mx-12">
        <div className="max-w-7xl mx-auto">
          <AppFeatures />
        </div>
      </section>

      {/* 5. Doctors: Meet Our Expert Vets (center focus, no grayscale) */}
      <section className="section-gap px-6">
        <div className="max-w-7xl mx-auto">
          <Doctors />
        </div>
      </section>

      {/* 6. Reviews: Loved by Pet Parents (editorial quote style, center focus) */}
      {/* Updated to bg-primary to match the solid orange block in your mockup */}
      <section className="bg-primary section-gap px-6 rounded-[3rem] md:rounded-[4rem] mx-4 md:mx-12">
        <div className="max-w-7xl mx-auto">
          <Reviews />
        </div>
      </section>

      {/* 7. Blog: Latest from our Blog (center focus, Explore Blog CTA) */}
      <section className="section-gap px-6">
        <div className="max-w-7xl mx-auto">
          <BlogSection />
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="section-gap px-6">
        <div className="max-w-4xl mx-auto">
          <FAQSection />
        </div>
      </section>

      {/* 9. Closing CTA: Your Pet Deserves Expert Care Today */}
      <ClosingCTA />

    </main>
  );
}