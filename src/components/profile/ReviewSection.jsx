import Image from 'next/image';

export default function ReviewSection() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      pet: "Cooper",
      text: "Dr. Thorne saved our Golden Retriever's mobility when others said surgery was too risky. He treated Cooper like his own.",
      img: "/dog.png"
    },
    {
      name: "David Lawson",
      pet: "Bella & Max",
      text: "The level of detail in the consult was incredible. I never felt rushed. Best vet experience in 20 years of pet ownership.",
      img: "/dog.png"
    },
    {
      name: "Elena Rodriguez",
      pet: "Luna",
      text: "His holistic approach to recovery made all the difference. Our kitty is back to her old self. Dr. Thorne is a miracle worker.",
      img: "/dog.png"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low -mx-6 lg:-mx-8 px-6 lg:px-8 rounded-[4rem] mb-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-on-surface">Pet Parent Stories</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg italic">
            Real experiences from our community. We take pride in every wag and purr restored.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-surface p-8 rounded-[2.5rem] shadow-sm flex flex-col justify-between border border-outline-variant/10 transition-transform hover:-translate-y-1">
              <div>
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, star) => (
                    <span key={star} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="text-on-surface-variant italic mb-8 leading-relaxed font-medium">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-surface-container">
                  <Image src={review.img} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-on-surface">{review.name}</div>
                  <div className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Parent of {review.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Proof Footer */}
        <div className="mt-16 pt-8 border-t border-outline-variant/20 flex flex-wrap justify-center items-center gap-6">
          <div className="bg-surface/50 px-6 py-3 rounded-2xl text-center border border-surface">
            <span className="font-black text-on-surface text-lg">78+</span>
            <span className="text-[10px] font-black uppercase tracking-tighter block text-on-surface-variant">More Stories</span>
          </div>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-12 h-12 rounded-full border-4 border-surface-container-low overflow-hidden relative bg-surface-container">
                <Image src="/dog.png" alt="User avatar" fill className="object-cover" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-surface-container-low bg-primary-container flex items-center justify-center text-white text-xs font-black">
              +12
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}