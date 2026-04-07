export default function TrustBar() {
  const stats = [
    {
      label: "Happy Pet Parents",
      value: "200K+",
      icon: "favorite",
    },
    {
      label: "Certified Vets",
      value: "500+",
      icon: "local_hospital",
    },
    {
      label: "Consultations Done",
      value: "9,000+",
      icon: "task_alt",
    },
  ];

  return (
    <div className="w-full text-center">
      <p className="text-[0.75rem] font-extrabold text-primary uppercase tracking-[0.15em] mb-4">
        Most trusted among pet parents
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2">
            <span
              className="material-symbols-outlined text-primary text-3xl mb-1"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {stat.icon}
            </span>
            <p className="text-5xl md:text-6xl font-extrabold text-primary tracking-[-0.02em]">
              {stat.value}
            </p>
            <p className="text-[0.75rem] font-extrabold text-on-surface-variant uppercase tracking-[0.1em] opacity-80 italic">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}