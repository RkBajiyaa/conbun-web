import Link from 'next/link';

export default function ClosingCTA() {
  return (
    <section className="bg-primary text-white rounded-[3rem] md:rounded-[4rem] mx-4 md:mx-12 mb-16 editorial-shadow overflow-hidden relative">
      {/* Decorative background blob */}
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-white/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center flex flex-col items-center gap-8">
        {/* Icon */}
        <div className="w-12 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <span
            className="material-symbols-outlined text-white text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            pets
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
          Your Pet Deserves Expert Care Today.
        </h2>

        <p className="text-white/90 text-[1.125rem] leading-[1.6] italic max-w-xl">
          Care and the sanctuary is a tap away. Get a professional opinion in minutes — any time, anywhere across India.
        </p>

        <Link
          href="/find-vet"
          className="bg-white text-primary px-12 py-5 rounded-2xl font-extrabold text-lg flex items-center gap-3 transition-all hover:bg-white/90 active:scale-95 editorial-shadow"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            videocam
          </span>
          Start Consultation Now
        </Link>

        <p className="text-white/60 text-sm font-medium">
          Starting at just ₹199 · No appointment needed · Available 24/7
        </p>
      </div>
    </section>
  );
}