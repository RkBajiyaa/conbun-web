import JoinHero from "@/components/join/JoinHero";
import BenefitsGrid from "@/components/join/BenefitsGrid";
import OnboardingSteps from "@/components/join/OnboardingSteps";
import VetTestimonials from "@/components/join/VetTestimonials";

export default function JoinAsVetPage() {
  return (
    <main className="bg-surface">
      <JoinHero />
      <BenefitsGrid />
      <OnboardingSteps />
      <VetTestimonials />
      
      {/* Final CTA Section */}
      <section className="py-32 px-6 text-center bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-on-surface tracking-tight mb-8">Ready to define the future of veterinary care?</h2>
          <p className="text-xl text-on-surface-variant mb-12">Applications take less than 5 minutes. Our team will review your credentials and get back to you within 48 hours.</p>
          <div className="bg-surface-container-low p-2 rounded-[2rem] inline-flex items-center gap-2 max-w-md w-full border border-outline-variant/20">
            <input className="bg-transparent border-none focus:ring-0 px-6 py-4 flex-grow text-lg outline-none" placeholder="Enter professional email" type="email"/>
            <button className="bg-primary text-white px-8 py-4 rounded-[1.75rem] font-bold shadow-lg hover:opacity-90 transition-all">Get Started</button>
          </div>
        </div>
      </section>
    </main>
  );
}