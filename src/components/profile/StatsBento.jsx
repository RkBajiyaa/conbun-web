export default function StatsBento({ doctor }) {
  // Pulling real data from the doctor object passed down from page.js
  const stats = [
    { label: "Consultations", value: `${doctor.appointments}+`, icon: "pets" },
    { label: "Parent Rating", value: `${doctor.rating}/5`, icon: "star" },
    { label: "Years Experience", value: `${doctor.experience}`, icon: "work" },
    { label: "Verified Reviews", value: `${doctor.reviewCount}`, icon: "reviews" },
  ];

  return (
    <section className="py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div 
          key={i} 
          className="bg-surface-container-low p-8 rounded-[2rem] text-center border-none flex flex-col items-center editorial-shadow transition-transform hover:-translate-y-1"
        >
          <span 
            className="material-symbols-outlined text-primary text-4xl mb-4 shrink-0"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {stat.icon}
          </span>
          <div className="text-2xl font-extrabold block text-on-surface tracking-tight">
            {stat.value}
          </div>
          <div className="text-sm text-on-surface-variant font-bold mt-1 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}