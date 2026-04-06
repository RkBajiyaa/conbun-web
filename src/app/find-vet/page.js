"use client";

import { useState, useMemo } from "react";
import FindVetHero from "@/components/find-vet/FindVetHero";
import PetCategories from "@/components/find-vet/PetCategories";
import VetCard from "@/components/find-vet/VetCard";
import FindVetSidebar from "@/components/find-vet/FindVetSidebar";
import { MOCK_VETS } from "@/lib/mockVets";

export default function FindVetPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Pets");
  const [sortBy, setSortBy] = useState("Top Rated");

  const filteredVets = useMemo(() => {
    let result = MOCK_VETS.filter((vet) => {
      const matchesCategory = 
        activeCategory === "All Pets" || 
        (vet.petTypes && vet.petTypes.includes(activeCategory));
      
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
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <section className="mb-[8.5rem]">
        <FindVetHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </section>

      <section className="mb-[8.5rem]">
        <PetCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2.75rem]">
        <div className="lg:col-span-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">
              {filteredVets.length} Trusted Veterinarians
            </h2>
            
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredVets.length > 0 ? (
              filteredVets.map((vet) => (
                <VetCard key={vet._id} vet={vet} />
              ))
            ) : (
              <div className="col-span-full py-24 bg-surface-container-low rounded-[2rem] flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant/20 mb-6">
                  search_off
                </span>
                <h3 className="text-xl font-extrabold text-on-surface mb-2">No specialists found</h3>
                <p className="text-on-surface-variant italic max-w-xs">
                  Try adjusting your search terms or selecting a different pet category.
                </p>
              </div>
            )}
          </div>

          {filteredVets.length > 0 && (
            <div className="mt-20 flex justify-center">
              <button className="px-10 py-4 bg-surface-container-high text-on-surface font-extrabold rounded-xl hover:bg-surface-container-highest transition-all editorial-shadow active:scale-95">
                Load More Professionals
              </button>
            </div>
          )}
        </div>

        <aside className="lg:col-span-4">
          <FindVetSidebar />
        </aside>
      </div>
    </main>
  );
}