"use client";

import { useState, useEffect, useMemo } from "react";
import FindVetHero from "@/components/find-vet/FindVetHero";
import PetCategories from "@/components/find-vet/PetCategories";
import VetCard from "@/components/find-vet/VetCard";
import FindVetSidebar from "@/components/find-vet/FindVetSidebar";

export default function FindVetPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Pets");
  const [sortBy, setSortBy] = useState("Top Rated");

  // NEW: State to hold the live data from MongoDB
  const [vetsDatabase, setVetsDatabase] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // NEW: Fetch data from the database the moment the page loads
  useEffect(() => {
    async function fetchDoctors() {
      try {
        const res = await fetch("/api/vets");
        const data = await res.json();
        
        if (data.success) {
          setVetsDatabase(data.vets);
        }
      } catch (error) {
        console.error("Error loading doctors from cloud:", error);
      } finally {
        setIsLoading(false); // Stop the loading spinner
      }
    }
    
    fetchDoctors();
  }, []);

  // UPDATE: The filter engine now looks at 'vetsDatabase' instead of MOCK_VETS
  const filteredVets = useMemo(() => {
    let result = vetsDatabase.filter((vet) => {
      const matchesCategory = 
        activeCategory === "All Pets" || 
        (Array.isArray(vet.petTypes) && vet.petTypes.some(type => type === activeCategory));
      
      const searchLower = (searchQuery || "").toLowerCase();
      const matchesSearch = 
        !searchQuery || 
        vet.name?.toLowerCase().includes(searchLower) ||
        vet.specialties?.some(s => s.toLowerCase().includes(searchLower)) ||
        vet.about?.toLowerCase().includes(searchLower);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "Top Rated") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "Most Experienced") {
      const getExp = (expStr) => parseInt(expStr?.toString().replace(/[^0-9]/g, '')) || 0;
      result.sort((a, b) => getExp(b.experience) - getExp(a.experience));
    }

    return result;
  }, [searchQuery, activeCategory, sortBy, vetsDatabase]);

  // Premium Loading State while fetching from MongoDB
  if (isLoading) {
    return (
      <div className="min-h-screen pt-40 pb-24 flex flex-col items-center justify-center bg-surface">
         <span className="material-symbols-outlined animate-spin text-5xl text-primary mb-4">progress_activity</span>
         <h2 className="text-2xl font-extrabold text-on-surface tracking-tight">Connecting to Conbun Network...</h2>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      {/* Centered Hero Section */}
      <section className="mb-[8.5rem]">
        <FindVetHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </section>

      {/* Centered Category Title & Chips */}
      <section className="mb-24 text-center">
        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Specialties</span>
        <h2 className="text-4xl font-extrabold text-on-surface mb-12">Expertise Across All Species</h2>
        <PetCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2.75rem]">
        {/* Main Grid (8 Columns) */}
        <div className="lg:col-span-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">
              {filteredVets.length} Trusted Veterinarians
            </h2>
            
            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium hidden sm:flex">
              <span>Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none font-extrabold text-primary focus:ring-0 cursor-pointer p-0 outline-none"
              >
                <option value="Top Rated">Top Rated</option>
                <option value="Most Experienced">Most Experienced</option>
              </select>
            </div>
          </div>

          {/* Dynamic Vet Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredVets.length > 0 ? (
              filteredVets.map((vet) => (
                <VetCard key={vet._id} vet={vet} />
              ))
            ) : (
              <div className="col-span-full py-24 bg-surface-container-low rounded-[2rem] flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant/20 mb-6">search_off</span>
                <h3 className="text-xl font-extrabold text-on-surface mb-2">No specialists found</h3>
                <p className="text-on-surface-variant italic max-w-xs">
                  Try adjusting your search terms or selecting a different pet category.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar (4 Columns) */}
        <aside className="lg:col-span-4">
          <FindVetSidebar />
        </aside>
      </div>
    </main>
  );
}