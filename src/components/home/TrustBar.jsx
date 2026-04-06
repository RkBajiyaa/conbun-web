export default function TrustBar() {
  const stats = [
    { label: "Appointments Done", value: "9,000+" },
    { label: "Star User Rating", value: "4.9/5" },
    { label: "Trusted Pet Parents", value: "6,000+" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left">
      {stats.map((stat) => (
        <div key={stat.label} className="group cursor-default">
          <p className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-[-0.02em] mb-3 group-hover:text-primary transition-colors duration-500">
            {stat.value}
          </p>
          <p className="text-[0.75rem] font-extrabold text-on-surface-variant uppercase tracking-[0.1em] opacity-80 italic">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}