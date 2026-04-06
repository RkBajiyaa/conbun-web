import Image from 'next/image';

export default function BlogHero({ searchQuery, setSearchQuery }) {
  return (
    /* Spacing 24 (8.5rem) token for the header padding */
    <header className="max-w-7xl mx-auto px-6 pt-32 pb-[8.5rem]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2.75rem] items-center">
        <div className="lg:col-span-7 relative">
          {/* Editorial Radius (lg) and Amber-tinted Ambient Shadow */}
          <div className="aspect-[4/3] rounded-[1rem] overflow-hidden editorial-shadow relative z-0">
            <Image src="/dog.png" alt="Bonding" fill className="object-cover" priority />
          </div>
          
          {/* Floating Featured Card - ADDED z-10 HERE TO FIX MISSING CARD */}
          <div className="absolute -bottom-8 -right-8 bg-primary text-white p-10 rounded-[2rem] hidden md:block max-w-xs editorial-shadow z-10">
            <span className="text-[0.75rem] font-extrabold uppercase tracking-[0.1em] opacity-70 mb-4 block">
              Featured Insight
            </span>
            <h3 className="text-[1.125rem] font-extrabold leading-tight tracking-tight">
              The Psychology of Play: Why Fetch is More Than a Game
            </h3>
          </div>
        </div>
        
        <div className="lg:col-span-5 lg:pl-12">
          {/* Label Medium Scale: 0.75rem All-Caps */}
          <span className="text-primary font-extrabold tracking-[0.1em] uppercase text-[0.75rem] mb-6 block">
            Editorial Wellness Hub
          </span>
          
          {/* Display Large Scale: 3.5rem (6xl) with -0.02em tracking */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-[-0.02em]">
            Caring for them, <br/>
            <span className="text-primary-container italic font-medium">beautifully.</span>
          </h1>
          
          {/* Body Large Scale: 1rem with 1.6 line-height */}
          <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] mb-10 max-w-md italic">
            Expert perspectives, curated health guides, and soulful stories for the modern pet parent.
          </p>
          
          {/* Minimalist Input: surface-container-low with ghost-border fallback */}
          <div className="bg-surface-container-low ghost-border rounded-full px-8 py-5 flex items-center group focus-within:ring-2 ring-primary-container transition-all">
            <span className="material-symbols-outlined text-on-surface-variant/40 mr-4">search</span>
            
            {/* INPUT WIRED TO STATE */}
            <input 
              className="bg-transparent border-none p-0 focus:ring-0 w-full text-on-surface placeholder:text-on-surface-variant/40 outline-none text-[1rem]" 
              placeholder="Search for insights..." 
              type="text"
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Optional UX: Show a clear 'X' button if they typed something */}
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="ml-2 flex items-center justify-center text-on-surface-variant/40 hover:text-primary transition-colors"
                aria-label="Clear search"
              >
                <span className="material-symbols-outlined text-[1.25rem]">close</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}