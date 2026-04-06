import Image from 'next/image';
import Link from 'next/link';

export default function BlogSection() {
  const posts = [
    {
      category: "Nutrition",
      title: "Wet vs Dry Cat Food: The Definitive Guide",
      desc: "Understanding which texture provides the best hydration and nutrient density for your feline friend.",
      img: "/dog.png",
    },
    {
      category: "Wellness",
      title: "Dog Gut Health: 5 Warning Signs to Watch",
      desc: "How to identify and treat common digestive issues before they become chronic problems.",
      img: "/dog.png",
    },
    {
      category: "New Owners",
      title: "The Ultimate New Pet Owner Checklist",
      desc: "Everything you need from the first 24 hours to the first 6 months with your new companion.",
      img: "/dog.png",
    }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
            Latest from the Blog
          </h2>
          <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] italic">
            Curated health guides and soulful stories for the modern pet parent.
          </p>
        </div>
        
        <Link 
          href="/blog" 
          className="text-primary font-extrabold flex items-center gap-2 group transition-all text-[0.9375rem] uppercase tracking-[0.05em] pb-2 border-b-2 border-transparent hover:border-primary"
        >
          Explore All 
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2.75rem]">
        {posts.map((post, i) => (
          <article key={i} className="group cursor-pointer flex flex-col">
            <div className="aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6 relative editorial-shadow shrink-0">
              <Image 
                src={post.img} 
                alt={post.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            <p className="text-[0.75rem] font-extrabold text-primary uppercase tracking-[0.1em] mb-3">
              {post.category}
            </p>
            
            <h3 className="text-[1.25rem] font-extrabold text-on-surface mb-3 group-hover:text-primary transition-colors leading-tight tracking-tight">
              {post.title}
            </h3>
            
            <p className="text-on-surface-variant text-[1rem] leading-[1.6] line-clamp-2 italic mt-auto">
              {post.desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}