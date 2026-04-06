import Image from 'next/image';

export default function MasonryGallery() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-8 tracking-tight">Community Gallery</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["All Stories", "Dogs", "Cats", "Exotics"].map((tag, i) => (
            <span key={tag} className={`px-5 py-2 rounded-full text-xs font-bold cursor-pointer transition-all ${i === 0 ? "bg-primary text-white" : "bg-surface-container-high hover:bg-surface-container-highest"}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Story Card 1 */}
        <div className="bg-white p-8 rounded-3xl border border-outline-variant/10 shadow-sm flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-slate-200 relative overflow-hidden"><Image src="/dog.png" fill alt="Pet" /></div>
            <div><p className="font-bold text-sm">Cooper</p><p className="text-[10px] text-on-surface-variant font-bold uppercase">The Benson Family</p></div>
          </div>
          <p className="text-sm leading-relaxed text-on-surface-variant italic font-medium">"The preventative care plan caught Cooper's heart murmur early. We had no idea."</p>
        </div>

        {/* Join CTA Card (Spans 2 rows) */}
        <div className="bg-[#944a00] text-white p-10 rounded-3xl flex flex-col justify-center items-center text-center gap-6 lg:row-span-2 shadow-2xl">
          <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
          <h3 className="text-3xl font-black leading-tight">Join 20,000+ Happy Tails</h3>
          <p className="opacity-80 italic">Experience pet care designed with empathy.</p>
          <button className="w-full bg-white text-[#944a00] py-4 rounded-xl font-black text-sm active:scale-95 transition-all">Start Your Journey</button>
        </div>

        {/* Add Your Story Card */}
        <div className="bg-[#f5f3f3] border-2 border-dashed border-[#dbc2b2]/40 p-8 rounded-3xl flex flex-col justify-center items-center text-center gap-4">
          <span className="material-symbols-outlined text-[#887365] text-4xl">add_a_photo</span>
          <p className="font-bold text-on-surface-variant">Your Story Next?</p>
          <a className="text-xs text-primary font-black underline underline-offset-4" href="#">Submit Testimonial</a>
        </div>
        
        {/* Placeholder for more cards... */}
      </div>
    </section>
  );
}