import Image from 'next/image';

export default function DeepDives() {
  const cases = [
    {
      tag: "Emergency Response",
      title: "Milo's Midnight Allergy Scare",
      desc: "How a 2 AM video consultation identified severe anaphylaxis.",
      img: "/dog.png"
    },
    {
      tag: "Chronic Care",
      title: "Luna: Managing Senior Vitality",
      desc: "A holistic approach that gave 15-year-old Luna a second act.",
      img: "/dog.png"
    }
  ];

  return (
    <section className="bg-surface-container-low py-24 px-6 rounded-[3rem] max-w-7xl mx-auto my-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight">The Deep Dives</h2>
          <p className="text-on-surface-variant mt-2 italic">In-depth chronicles of complex care journeys.</p>
        </div>
        <button className="text-primary font-bold flex items-center gap-2 group">
          Explore all case studies <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-12 px-4">
        {cases.map((c, i) => (
          <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row">
            <div className="sm:w-2/5 relative h-48 sm:h-auto">
              <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div className="sm:w-3/5 p-8 flex flex-col justify-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">{c.tag}</span>
              <h3 className="text-2xl font-bold mb-4 leading-tight">{c.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 italic">{c.desc}</p>
              <button className="text-on-surface font-bold text-sm flex items-center gap-2 hover:text-primary transition-colors">
                Read full study <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}