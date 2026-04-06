import Image from 'next/image';

export default function VetTestimonials() {
  return (
    <section className="py-24 bg-[#f28c38] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center text-white">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">Trusted by Leading Veterinarians</h2>
            <p className="text-white/80 text-lg mb-8">
              Hear from the doctors who have already transitioned their practice to Conbun.
            </p>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 flex">
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_12px_32px_-4px_rgba(85,67,55,0.08)] text-[#1b1c1c] w-full max-w-lg">
              <span className="material-symbols-outlined text-[#f28c38] text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              <p className="text-xl font-medium leading-relaxed mb-8 italic">
                "The flexibility Conbun offers is unparalleled. I can spend more time on complex cases while the platform handles all the logistics and scheduling effortlessly."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative border border-[#f28c38]/20">
                  <Image src="/dog.png" alt="Dr. Sarah Mitchell" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1b1c1c]">Dr. Sarah Mitchell</h4>
                  <p className="text-sm text-[#554337]">DVM, Senior Pet Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}