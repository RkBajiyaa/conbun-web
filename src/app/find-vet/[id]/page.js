import ProfileHero from "@/components/profile/ProfileHero";
import StatsBento from "@/components/profile/StatsBento";
import ExpertiseBio from "@/components/profile/ExpertiseBio";
import ClinicGallery from "@/components/profile/ClinicGallery";
import ReviewSection from "@/components/profile/ReviewSection";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";

async function getDoctor(id) {
  try {
    const client = await clientPromise;
    const db = client.db("conbun_db");
    
    // Look for the doctor by the ID string (e.g., "vet_001")
    const doctor = await db.collection("Vets").findOne({ _id: id });
    return doctor;
  } catch (e) {
    console.error("Database Fetch Error:", e);
    return null;
  }
}

// In Next.js 15+, params is a Promise that must be awaited
export default async function DoctorProfilePage({ params }) {
  // 1. Await the params to extract the ID
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 2. Fetch the doctor data
  const doctor = await getDoctor(id);

  // 3. Fallback UI if doctor is missing
  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-6 text-center">
        <span className="material-symbols-outlined text-6xl text-primary mb-6">person_search</span>
        <h1 className="text-4xl font-black text-on-surface mb-4">Expert Not Found</h1>
        <p className="text-on-surface-variant mb-8 italic max-w-md">
          We couldn't find a specialist with ID: <span className="font-bold text-primary">{id}</span>. 
          They might be offline or the link has expired.
        </p>
        <Link href="/find-vet" className="bg-primary text-white px-10 py-4 rounded-2xl font-black shadow-lg hover:scale-105 transition-transform">
          Back to Directory
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32">
      <Link
        href="/find-vet"
        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-10 font-bold uppercase tracking-widest text-[0.75rem]"
      >
        <span className="material-symbols-outlined text-lg">arrow_back</span>
        Back to Directory
      </Link>

      <ProfileHero doctor={doctor} />
      <StatsBento doctor={doctor} />
      <ExpertiseBio doctor={doctor} />
      <ClinicGallery />
      <ReviewSection />

      <section className="mb-24 relative overflow-hidden bg-primary-container rounded-[3rem] p-12 md:p-20 text-center shadow-2xl">
        <div className="relative z-10">
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
        </div>
        {/* Decorative background circle */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </section>
    </main>
  );
}