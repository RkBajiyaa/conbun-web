import Image from 'next/image';
import Link from 'next/link';

export default function ReviewsHero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Decorative Element using Primary Tint */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest uppercase bg-primary/10 text-primary rounded-full shadow-sm">
            Community Voices
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
            Stories of <span className="text-primary italic">Resilience</span> and Love.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl italic">
            From midnight scares to milestone birthdays, explore how our dedicated veterinary team empowers pet parents every day.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/find-vet">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:brightness-105 active:scale-95 transition-all">
                Book Your Consultation
              </button>
            </Link>
            <Link href="/blog">
              <button className="bg-surface-container-low text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-highest active:scale-95 transition-all">
                Read Journal
              </button>
            </Link>
          </div>
        </div>
        
        <div className="relative">
          {/* Main Image Container */}
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-500 bg-surface-container-low">
            <Image 
              src="/dog.png" 
              alt="Happy pet" 
              fill 
              priority 
              className="object-cover" 
            />
          </div>
          
          {/* Overlapping Floating Card utilizing your editorial-shadow */}
          <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-2xl max-w-[240px] -rotate-3 border border-outline-variant/10 editorial-shadow">
            <div className="flex items-center gap-1 mb-2 text-primary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="text-sm font-medium italic text-on-surface">
              "Conbun saved Milo's life when we were miles from help. Forever grateful."
            </p>
            <span className="block text-xs mt-3 text-on-surface-variant font-bold">
              — Sarah & Milo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}