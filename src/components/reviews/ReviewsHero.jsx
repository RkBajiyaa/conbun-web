import Image from 'next/image';

export default function ReviewsHero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest uppercase bg-[#ffdbcd] text-[#360f00] rounded-full">
            Community Voices
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
            Stories of <span className="text-primary italic">Resilience</span> and Love.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl italic">
            From midnight scares to milestone birthdays, explore how our dedicated veterinary team empowers pet parents every day.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold text-lg shadow-lg">Book Your Consultation</button>
            <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold text-lg">Read Journal</button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-500">
            <Image src="/dog.png" alt="Happy pet" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-[240px] -rotate-3 border border-outline-variant/10">
            <div className="flex items-center gap-1 mb-2 text-[#f28c38]">
              {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
            </div>
            <p className="text-sm font-medium italic text-on-surface">"Conbun saved Milo's life when we were miles from help. Forever grateful."</p>
            <span className="block text-xs mt-3 text-on-surface-variant font-bold">— Sarah & Milo</span>
          </div>
        </div>
      </div>
    </section>
  );
}