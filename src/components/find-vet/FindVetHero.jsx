"use client";

export default function FindVetHero({ searchQuery, setSearchQuery }) {
  return (
    <section className="mb-[8.5rem]"> {/* Spacing 24 Token */}
      <div className="max-w-4xl">
        {/* Display Large Scale: 3.5rem (text-6xl) with -0.02em tracking */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-[-0.02em] text-on-surface mb-8 leading-[1.1]">
          Expert care for your <br />
          <span className="text-primary-container italic font-medium">beloved companions</span>.
        </h1>
        
        {/* Body Large Scale: 1rem with 1.6 line-height */}
        <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] max-w-2xl italic mb-10">
          Connect with top-rated veterinarians instantly. Specialized video consultations for dogs, cats, and exotic friends.
        </p>

        {/* Telehealth Search Bar - Single Input focused on the problem */}
        <div className="flex flex-col md:flex-row gap-4 p-2 bg-surface-container-lowest rounded-2xl editorial-shadow max-w-2xl">
          <div className="flex-1 flex items-center px-6 py-4 bg-surface-container-low rounded-xl focus-within:ring-2 ring-primary-container transition-all">
            <span className="material-symbols-outlined text-on-surface-variant/50 mr-3 text-[1.5rem]">search</span>
            
            {/* Input wired to State */}
            <input 
              className="bg-transparent border-none p-0 focus:ring-0 w-full text-on-surface placeholder:text-on-surface-variant/50 outline-none font-medium" 
              placeholder="What does your pet need? (e.g., diet, limping, skin)" 
              type="text"
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            {/* Clear Button */}
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="ml-2 text-on-surface-variant/40 hover:text-primary transition-colors flex items-center"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            )}
          </div>
          
          <button className="bg-primary text-white px-10 py-4 rounded-xl font-extrabold hover:brightness-105 active:scale-95 transition-all editorial-shadow shrink-0">
            Find Vet
          </button>
        </div>
      </div>
    </section>
  );
}