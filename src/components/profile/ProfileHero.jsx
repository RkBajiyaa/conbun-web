import Image from 'next/image';

export default function ProfileHero({ doctor }) {
  return (
    <section className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
      <div className="lg:col-span-7">
        {/* Verification Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full mb-8 shadow-sm">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified
          </span>
          <span className="text-xs font-bold tracking-widest uppercase">
            {doctor.title}
          </span>
        </div>

        {/* Doctor Name & Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-6">
          {doctor.name}
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-10 italic">
          {/* We use a fallback text here if the bio is too short, but usually the 'about' field handles this */}
          {doctor.about || "Pioneering compassionate care and holistic recovery. Blending clinical precision with a gentle touch."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-extrabold text-lg flex items-center gap-3 transition-all hover:brightness-105 active:scale-95 shadow-lg shadow-primary/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Join Live Now
          </button>
          <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-surface-container-highest transition-all active:scale-95">
            Consult for ₹{doctor.price}
          </button>
        </div>
      </div>

      {/* Portrait & Experience Card */}
      <div className="lg:col-span-5 relative">
        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-surface-container-low">
          <Image 
            src={doctor.image || "/dog.png"} 
            alt={doctor.name} 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-primary-container p-8 rounded-3xl shadow-xl max-w-[200px]">
          <div className="text-4xl font-extrabold text-on-primary-container mb-1 tracking-tight">
            {doctor.experience}
          </div>
          <div className="text-sm font-bold text-on-primary-container/80 leading-tight uppercase tracking-wider">
            Years of Clinical Excellence
          </div>
        </div>
      </div>
    </section>
  );
}