export default function UrgentCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      {/* Editorial Layering: Removed standard border, added editorial-shadow and tonal background */}
      <div className="flex items-center gap-5 bg-surface-container-lowest editorial-shadow rounded-full p-2 pl-8 transition-all hover:scale-105 active:scale-95 animate-bounce">
        
        {/* Label Medium Scale: 0.75rem All-Caps with 0.05em tracking */}
        <div className="text-[0.75rem] font-extrabold text-on-surface uppercase tracking-[0.05em]">
          Urgent? Talk now
        </div>
        
        {/* Hero Amber Button with Level 2 elevation */}
        <button className="w-14 h-14 bg-primary-container rounded-full flex items-center justify-center text-white editorial-shadow hover:brightness-105 transition-all">
          <span className="material-symbols-outlined text-[1.5rem]" style={{ fontVariationSettings: "'FILL' 1" }}>
            medical_services
          </span>
        </button>
      </div>
    </div>
  );
}