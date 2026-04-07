import Link from 'next/link';

const species = [
  {
    emoji: "🐕",
    title: "Dog Consultation",
    color: "bg-primary/5 border-primary/20",
    accentColor: "text-primary",
    points: [
      "Skin, coat & allergy issues",
      "Digestion & diet planning",
      "Vaccination & deworming",
      "Behaviour & training concerns",
    ],
  },
  {
    emoji: "🐈",
    title: "Cat Consultation",
    color: "bg-surface-container-lowest border-outline-variant/40",
    accentColor: "text-primary",
    featured: true,
    points: [
      "Urinary tract & kidney care",
      "Feline nutrition & weight",
      "Dental & oral health",
      "Anxiety & behavioural issues",
    ],
  },
  {
    emoji: "🦜",
    title: "Bird & Exotic Pets",
    color: "bg-primary/5 border-primary/20",
    accentColor: "text-primary",
    points: [
      "Avian health & feather care",
      "Reptile diet & habitat",
      "Rabbit & guinea pig care",
      "Aquatic & fish wellness",
    ],
  },
];

export default function Expertise() {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
          Expertise Across All Species
        </h2>
        <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] italic max-w-2xl mx-auto">
          Whether you have a dog, a cat, or an exotic companion — our certified specialists have you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2.75rem] items-center">
        {species.map((s, i) => (
          <div
            key={s.title}
            className={`rounded-[2rem] border p-10 flex flex-col gap-6 editorial-shadow transition-all duration-500
              ${s.color}
              ${s.featured ? 'scale-[1.05] shadow-2xl ring-2 ring-primary/30' : 'hover:-translate-y-1'}`}
          >
            <div className="text-5xl">{s.emoji}</div>
            <h3 className="text-[1.25rem] font-extrabold text-on-surface tracking-tight">
              {s.title}
            </h3>
            <ul className="space-y-3">
              {s.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-[1rem] text-on-surface-variant leading-[1.5]">
                  <span
                    className={`material-symbols-outlined text-[1.1rem] mt-0.5 shrink-0 ${s.accentColor}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
            <Link
              href="/find-vet"
              className="mt-2 inline-flex items-center gap-2 text-primary font-extrabold text-[0.9375rem] uppercase tracking-[0.05em] group w-fit"
            >
              Consult Now
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}