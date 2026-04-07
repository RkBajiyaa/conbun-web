import Image from 'next/image';

export default function BenefitsGrid() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-4">Empowering Your Practice</h2>
          <p className="text-on-surface-variant text-lg">
            We provide the infrastructure; you provide the care. Experience the future of work-life balance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Work from Anywhere */}
          <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-[2rem] editorial-shadow flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-2xl mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">language</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-on-surface">Work from Anywhere</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                Whether you're at home or on the move, our secure HIPAA-compliant platform keeps you connected to your patients without the commute.
              </p>
            </div>
            <div className="mt-12 h-48 rounded-xl overflow-hidden relative">
              <Image src="/dog.png" alt="Workspace" fill className="object-cover" />
            </div>
          </div>

          {/* Total Schedule Freedom */}
          <div className="bg-primary text-white p-10 rounded-[2rem] editorial-shadow flex flex-col justify-between">
            <div className="w-14 h-14 bg-white/10 flex items-center justify-center rounded-2xl mb-8">
              <span className="material-symbols-outlined text-white text-3xl">schedule</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Total Schedule Freedom</h3>
              <p className="text-white/80 leading-relaxed">
                Set your own hours. Open slots for immediate consultations or schedule follow-ups at your convenience. You are the boss of your time.
              </p>
            </div>
          </div>

          {/* Seamless Billing */}
          <div className="bg-surface-container-lowest p-10 rounded-[2rem] editorial-shadow flex flex-col md:flex-row gap-8 items-center md:col-span-2">
            <div className="w-20 h-20 bg-secondary-fixed flex-shrink-0 flex items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-on-secondary-fixed text-4xl">payments</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-on-surface">Seamless Billing</h3>
              <p className="text-on-surface-variant">
                Automated invoicing and instant payouts. No more chasing insurance or manual paperwork. Focus 100% on medical outcomes.
              </p>
            </div>
          </div>

          {/* Verified Professional */}
          <div className="bg-surface-container-highest p-10 rounded-[2rem] editorial-shadow">
            <div className="flex flex-col h-full">
              <div className="mb-6 text-primary-container">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-on-surface">Verified Professional</h3>
              <p className="text-on-surface-variant">
                Receive a Conbun Verified Badge that boosts your authority and trust among the pet community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}