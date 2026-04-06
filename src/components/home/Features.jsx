import Link from 'next/link';

export default function Features() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-on-surface">
            The Conbun Edge
          </h2>
          <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] italic">
            We've reimagined pet healthcare to be as fast, personal, and professional as you deserve.
          </p>
        </div>
        <div className="hidden md:block h-[1.5px] flex-1 bg-outline-variant/20 mb-4 mx-10"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-[2.75rem] min-h-[650px]">
        
        {/* Item 1: Hero Branding Card */}
        <div className="md:col-span-3 bg-primary p-12 rounded-[2rem] text-white flex flex-col justify-between group overflow-hidden relative editorial-shadow transition-transform hover:-translate-y-1">
          <div className="z-10">
            <span className="material-symbols-outlined text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
            <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Connect under 60s</h3>
            <p className="text-white/90 leading-[1.6] text-[1.125rem] italic">No more waiting days for an appointment. Our system pairs you with available experts in real-time.</p>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
            <span className="material-symbols-outlined text-[18rem]">rocket_launch</span>
          </div>
        </div>

        {/* Item 2: Personal Conversations */}
        <div className="md:col-span-3 bg-surface-container-low p-12 rounded-[2rem] flex flex-col justify-between group editorial-shadow transition-all hover:-translate-y-1">
          <div>
            <span className="material-symbols-outlined text-primary text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
            <h3 className="text-3xl font-extrabold mb-4 text-on-surface tracking-tight">Personal Conversations</h3>
            <p className="text-on-surface-variant leading-[1.6] text-[1.125rem] italic">Talk directly with experienced vets who listen to your concerns and your pet's needs with deep empathy.</p>
          </div>
          <Link href="/find-vet" className="flex items-center gap-3 mt-10 text-primary font-extrabold text-[0.9375rem] cursor-pointer group-hover:gap-4 transition-all w-fit">
            LEARN MORE <span className="material-symbols-outlined !text-lg">arrow_forward</span>
          </Link>
        </div>

        {/* Item 3: Multimedia */}
        <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between editorial-shadow transition-all hover:-translate-y-1">
          <span className="material-symbols-outlined text-primary text-4xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>photo_library</span>
          <div>
            <h3 className="text-[1.25rem] font-extrabold mb-3 text-on-surface tracking-tight">Multimedia Share</h3>
            <p className="text-on-surface-variant text-[1rem] leading-[1.6] italic">Send videos, photos, or old prescriptions instantly during your call.</p>
          </div>
        </div>

        {/* Item 4: Digital RX */}
        <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between editorial-shadow transition-all hover:-translate-y-1">
          <span className="material-symbols-outlined text-primary text-4xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
          <div>
            <h3 className="text-[1.25rem] font-extrabold mb-3 text-on-surface tracking-tight">Digital RX</h3>
            <p className="text-on-surface-variant text-[1rem] leading-[1.6] italic">Get authorized, personalized digital prescriptions directly in your inbox.</p>
          </div>
        </div>

        {/* Item 5: Free Follow-up */}
        <div className="md:col-span-2 bg-primary-container/10 p-10 rounded-[2rem] flex flex-col justify-between border border-primary-container/10 editorial-shadow transition-all hover:-translate-y-1">
          <span className="material-symbols-outlined text-primary text-4xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>history</span>
          <div>
            <h3 className="text-[1.25rem] font-extrabold mb-3 text-primary tracking-tight italic">7 Days Free Follow-up</h3>
            <p className="text-on-surface-variant text-[1rem] leading-[1.6]">Chat with the same doctor for a full week after your consultation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}