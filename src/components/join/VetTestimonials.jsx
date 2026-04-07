import Image from 'next/image';

export default function VetTestimonials() {
  return (
    <section className="py-24 bg-primary-container text-on-primary-container overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">Trusted by Leading Veterinarians</h2>
            <p className="text-on-primary-container/80 text-lg mb-8">
              Hear from the doctors who have already transitioned their practice to Conbun.
            </p>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-on-primary-container/20 flex items-center justify-center hover:bg-on-primary-container/10 transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-on-primary-container/20 flex items-center justify-center hover:bg-on-primary-container/10 transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 flex">
            <div className="bg-surface-container-lowest p-10 rounded-[2rem] editorial-shadow text-on-surface w-full max-w-lg">
              <span className="material-symbols-outlined text-primary-container text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              <p className="text-xl font-medium leading-relaxed mb-8 italic">
                "The flexibility Conbun offers is unparalleled. I can spend more time on complex cases while the platform handles all the logistics and scheduling effortlessly."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative border border-primary-container/20 bg-surface-container">
                  <Image src="/dog.png" alt="Dr. Sarah Mitchell" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Dr. Sarah Mitchell</h4>
                  <p className="text-sm text-on-surface-variant">DVM, Senior Pet Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}