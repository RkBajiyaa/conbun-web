import JoinHero from "@/components/join/JoinHero";
import BenefitsGrid from "@/components/join/BenefitsGrid";
import OnboardingSteps from "@/components/join/OnboardingSteps";
import VetTestimonials from "@/components/join/VetTestimonials";

export default function JoinAsVetPage() {
  return (
    <main className="bg-surface pt-24">
      <JoinHero />
      <BenefitsGrid />
      <OnboardingSteps />
      <VetTestimonials />
      
      {/* Final CTA Section */}
      <section className="py-32 px-6 text-center bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-6">
            Ready to define the future of veterinary care?
          </h2>
          <p className="text-[1.125rem] text-on-surface-variant mb-12 italic">
            Applications take less than 5 minutes. Our team will review your credentials and get back to you within 48 hours.
          </p>
          <div className="bg-surface-container-low p-2 rounded-[2rem] inline-flex flex-col md:flex-row items-center gap-2 max-w-md md:max-w-xl w-full border border-outline-variant/20 editorial-shadow">
            <input 
              className="bg-transparent border-none focus:ring-0 px-6 py-4 w-full md:flex-grow text-lg outline-none text-on-surface placeholder:text-outline" 
              placeholder="Enter professional email" 
              type="email"
            />
            <button className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-[1.5rem] font-extrabold hover:brightness-105 active:scale-95 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}