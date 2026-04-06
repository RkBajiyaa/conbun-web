import Image from 'next/image';

export default function ClinicGallery() {
  return (
    <section className="py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3 block">
            Atmosphere
          </span>
          <h2 className="text-4xl font-extrabold text-on-surface tracking-tight">
            Inside the Clinic
          </h2>
        </div>
        <p className="text-on-surface-variant max-w-sm italic leading-[1.6]">
          A glimpse into our state-of-the-art facility designed for comfort, clarity, and rapid recovery.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
        {/* Main Surgical Theatre */}
        <div className="col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden relative group editorial-shadow">
          <Image src="/dog.png" alt="Surgical suite" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
            <p className="text-white font-extrabold text-xl tracking-tight">Precision Surgical Theatre</p>
          </div>
        </div>

        {/* Smaller Detail Images */}
        <div className="rounded-[2.5rem] overflow-hidden relative editorial-shadow group">
          <Image src="/dog.png" alt="Consultation room" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="rounded-[2.5rem] overflow-hidden relative editorial-shadow group">
          <Image src="/dog.png" alt="Recovery area" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="col-span-2 rounded-[2.5rem] overflow-hidden relative editorial-shadow group">
          <Image src="/dog.png" alt="Lab equipment" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </section>
  );
}