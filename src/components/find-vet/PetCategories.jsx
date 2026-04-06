"use client";

// We pass in the state from the main page so the chips know which one is selected
export default function PetCategories({ activeCategory, setActiveCategory }) {
  
  // Removed the hardcoded 'active' booleans from the data
  const categories = [
    { name: "All Pets", icon: "pets" },
    { name: "Dogs", icon: "pets" },
    { name: "Cats", icon: "pets" },
    { name: "Exotic", icon: "sound_detection_dog_barking" },
    { name: "Birds", icon: "potted_plant" },
    { name: "Aquatic", icon: "water_drop" },
  ];

  return (
    <section className="overflow-x-auto pb-4 no-scrollbar">
      <div className="flex gap-3 min-w-max">
        {categories.map((cat) => {
          // Check if this specific chip matches the currently active category state
          const isActive = activeCategory === cat.name;

          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full shrink-0 transition-all duration-300 cursor-pointer ${
                isActive 
                  ? "bg-primary text-white editorial-shadow scale-105" 
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
            >
              {/* Design System: 0.75rem Label Scale */}
              <span className="material-symbols-outlined shrink-0 text-[1.25rem]">
                {cat.icon}
              </span>
              <span className="text-[0.75rem] font-extrabold uppercase tracking-[0.05em] whitespace-nowrap leading-none">
                {cat.name}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  );
}