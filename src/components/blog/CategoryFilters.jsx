"use client";

export default function CategoryFilters({ active, setActive }) {
  // You can pull these from your constants file later, hardcoded for now to fix the build
  const categories = [
    "All", 
    "Nutrition", 
    "Behavior", 
    "Senior Pets", 
    "Puppies & Kittens", 
    "Preventative Care"
  ];

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-6 py-3 rounded-full font-extrabold text-[0.875rem] transition-all whitespace-nowrap ${
            active === cat
              ? "bg-primary text-white editorial-shadow"
              : "bg-surface-container-low text-on-surface-variant hover:bg-outline-variant/20"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}