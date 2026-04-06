import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      pet: "Parent of Oliver",
      text: "The 60-second promise is real. My cat had an allergic reaction at 2 AM, and Dr. Patil was on screen before I could even panic. Truly a life saver!",
      img: "/dog.png",
    },
    {
      name: "Michael Chen",
      pet: "Parent of Luna",
      text: "The follow-up chat is what makes Conbun special. I could ask questions for a week after our consult. Dr. Jain was incredibly patient.",
      img: "/dog.png",
    },
    {
      name: "Emma Wilson",
      pet: "Parent of Bear",
      text: "Far more affordable than my local clinic and just as professional. I love that I don't have to stress my dog out with a car ride anymore.",
      img: "/dog.png",
    },
  ];

  return (
    /* Wrapper stripped down since page.js handles the layout container and padding */
    <div className="w-full">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
          Heartfelt Reviews
        </h2>
        <p className="text-on-surface-variant text-[1.125rem] leading-[1.6] max-w-2xl italic">
          Why 10,000+ pet parents trust Conbun daily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2.75rem]">
        {reviews.map((rev, i) => (
          /* Level 2 Surface (lowest) sitting on Level 1 background (applied in page.js) */
          <div 
            key={i} 
            className="bg-surface-container-lowest p-10 rounded-[2.5rem] flex flex-col justify-between editorial-shadow transition-transform hover:-translate-y-2 duration-500"
          >
            <div>
              {/* Star Rating */}
              <div className="flex gap-1 text-primary mb-8">
                {[...Array(5)].map((_, idx) => (
                  <span 
                    key={idx} 
                    className="material-symbols-outlined text-[1.25rem]" 
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              {/* Review Text */}
              <p className="text-[1.125rem] italic font-medium leading-[1.6] text-on-surface mb-12">
                "{rev.text}"
              </p>
            </div>

            <div className="flex items-center gap-5">
              {/* Profile Image with custom border to match primary color faintly */}
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary-container/10 relative flex-shrink-0">
                <Image src={rev.img} alt={rev.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-[1rem] font-extrabold text-on-surface tracking-tight">
                  {rev.name}
                </p>
                <p className="text-[0.75rem] text-on-surface-variant font-bold uppercase tracking-[0.1em]">
                  {rev.pet}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}