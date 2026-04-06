import Image from 'next/image';
import Link from 'next/link';

export default function CareEssentials() {
  const articles = [
    {
      title: "The Ultimate Pet First-Aid Kit: What's Missing?",
      desc: "From charcoal powder to digital thermometers, the professional-grade items you need for emergencies.",
      img: "/dog.png",
      slug: "#"
    },
    {
      title: "Golden Years: Tailoring Care for the Aging Companion",
      desc: "Managing mobility, cognitive changes, and metabolic health in your senior dog or cat.",
      img: "/dog.png",
      slug: "#"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2.75rem] py-[8.5rem]"> {/* Spacing 8 & 24 Tokens */}
      
      {/* Left Content: Articles */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Care Essentials</h2> {/* Headline Large */}
          <span className="h-[1.5px] flex-1 mx-10 bg-outline-variant/20"></span>
        </div>
        
        <div className="space-y-[4rem]">
          {articles.map((article, i) => (
            <Link href={article.slug} key={i} className="flex flex-col md:flex-row gap-10 group cursor-pointer block">
              {/* FIXED: Added 'relative' and 'bg-surface-container-low' to this parent div */}
              <div className="w-full md:w-80 h-56 rounded-[1rem] overflow-hidden flex-shrink-0 editorial-shadow relative bg-surface-container-low"> 
                <Image 
                  src={article.img} 
                  alt={article.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[1.125rem] font-extrabold mb-4 group-hover:text-primary transition-colors leading-tight"> {/* Title Medium */}
                  {article.title}
                </h3>
                <p className="text-on-surface-variant text-[1rem] leading-[1.6] mb-6 italic"> {/* Body Large */}
                  {article.desc}
                </p>
                <div className="text-primary font-extrabold text-[0.75rem] uppercase tracking-[0.05em] flex items-center gap-2 group-hover:underline"> {/* Label Medium */}
                  Read Article 
                  <span className="material-symbols-outlined !text-sm">open_in_new</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Content: Sidebar - Following Tonal Layering */}
      <aside className="space-y-12">
        
        {/* Trending Topics - Level 2 Surface */}
        <div className="bg-surface-container-lowest rounded-[2rem] p-10 editorial-shadow">
          <h3 className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] mb-8 text-on-surface">Trending Topics</h3>
          <div className="flex flex-wrap gap-3">
            {["#Hydration", "#PuppyTraining", "#RawDiet", "#MentalStimulation"].map(tag => (
              <Link 
                href={`#`}
                key={tag} 
                className="px-5 py-2 bg-surface-container-low text-[0.75rem] font-extrabold uppercase tracking-[0.05em] rounded-full hover:bg-primary text-on-surface-variant hover:text-white transition-colors cursor-pointer block"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Product Reviews Card - Tonal Shift Shift */}
        <div className="bg-surface-container-low rounded-[2rem] p-10">
          <h3 className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] mb-8 text-primary">Product Reviews</h3>
          <Link href="#" className="group cursor-pointer block">
            {/* Note: This one already had the 'relative' class, which is why it might have worked for you earlier! */}
            <div className="aspect-video rounded-[1rem] overflow-hidden mb-6 editorial-shadow relative bg-surface-container-low">
              <Image 
                src="/dog.png" 
                alt="Smart Bowl" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <h4 className="font-extrabold text-[1rem] group-hover:text-primary transition-colors leading-tight italic">
              SmartFeed Pro: Is the automated luxury worth it?
            </h4>
            <div className="flex items-center mt-6 text-primary gap-1">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
              <span className="material-symbols-outlined text-sm">star_half</span>
              <span className="ml-3 text-[0.75rem] font-extrabold text-on-surface-variant/50 uppercase tracking-widest">4.5/5</span>
            </div>
          </Link>
        </div>

      </aside>
    </div>
  );
}