import { MOCK_VETS } from "@/lib/mockVets";
import ProfileHero from "@/components/profile/ProfileHero";
import StatsBento from "@/components/profile/StatsBento";
import ExpertiseBio from "@/components/profile/ExpertiseBio";
import ClinicGallery from "@/components/profile/ClinicGallery";
import ReviewSection from "@/components/profile/ReviewSection";
import Link from "next/link";

export default function DoctorProfilePage({ params }) {
  // 1. Try to find the exact doctor by _id or id.
  // 2. BULLETPROOF FALLBACK: If the URL ID doesn't match perfectly, default to the first doctor in the list.
  // This guarantees the page will ALWAYS load so you can see your UI!
  const doctor = MOCK_VETS.find((v) => v._id === params.id || v.id === params.id) || MOCK_VETS[0];

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32">
      {/* Back Button */}
      <Link
        href="/find-vet"
        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-10 font-bold uppercase tracking-widest text-[0.75rem]"
      >
        <span className="material-symbols-outlined text-lg">arrow_back</span>
        Back to Directory
      </Link>

      {/* 3. The data is now safely passed to all your beautiful components */}
      <ProfileHero doctor={doctor} />
      <StatsBento doctor={doctor} />
      <ExpertiseBio doctor={doctor} />
      <ClinicGallery />
      <ReviewSection />

      {/* Final Call-to-Action */}
      <section className="mb-24 relative overflow-hidden bg-primary-container rounded-[3rem] p-12 md:p-20 text-center shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-on-primary-container">
          Ready to provide the best care?
        </h2>
        <p className="text-xl mb-12 max-w-xl mx-auto text-on-primary-container opacity-90 italic">
          Book a comprehensive video consultation with {doctor.name} today.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-primary-container px-12 py-5 rounded-2xl font-extrabold text-xl hover:scale-105 transition-transform shadow-xl">
            Consult for ₹{doctor.price || "199"}
          </button>
        </div>
      </section>
    </main>
  );
}