import Image from 'next/image';
import Link from 'next/link';

export default function DeepDives({ cases = [], loading = false }) {
  return (
    <section className="bg-surface-container-low py-24 px-6 rounded-[3rem] max-w-7xl mx-auto my-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">The Deep Dives</h2>
          <p className="text-on-surface-variant mt-2 italic">In-depth chronicles of complex care journeys.</p>
        </div>
        <Link href="/blog" className="text-primary font-bold flex items-center gap-2 group">
          Explore all case studies <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-12 px-4">
        {loading && cases.length === 0 ? (
          // Premium Loading Skeletons
          // Swapped bg-white for bg-surface-container-lowest
          [1, 2].map((n) => (
            <div key={n} className="bg-surface-container-lowest rounded-3xl h-64 animate-pulse flex flex-col sm:flex-row">
              <div className="sm:w-2/5 bg-surface-container-high h-48 sm:h-auto rounded-l-3xl"></div>
              <div className="sm:w-3/5 p-8 flex flex-col justify-center gap-4">
                <div className="h-3 w-24 bg-surface-container-high rounded-full"></div>
                <div className="h-6 w-full bg-surface-container-high rounded-full"></div>
                <div className="h-4 w-3/4 bg-surface-container-high rounded-full"></div>
              </div>
            </div>
          ))
        ) : (
          // Live Data Mapping
          cases.map((c) => (
            // Swapped bg-white for bg-surface-container-lowest
            <div key={c._id} className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row editorial-shadow border border-outline-variant/10">
              <div className="sm:w-2/5 relative h-48 sm:h-auto bg-surface-container-high">
                <Image 
                  src={c.img || "/dog.png"} 
                  alt={c.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">
                  {c.tag || "Case Study"}
                </span>
                <h3 className="text-2xl font-bold mb-4 leading-tight text-on-surface line-clamp-2">
                  {c.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 italic line-clamp-3">
                  {c.desc}
                </p>
                <button className="text-on-surface font-bold text-sm flex items-center gap-2 hover:text-primary transition-colors mt-auto w-max">
                  Read full study <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}