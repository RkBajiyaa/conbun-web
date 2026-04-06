import Image from 'next/image';
import Link from 'next/link';

export default function VetCard({ vet }) {
  // Destructure the data coming from our mockVets database
  const { 
    _id, 
    name, 
    rating, 
    experience,
    appointments,
    image, 
    specialties,
    price
  } = vet;

  // Grab the first specialty to use as the top-right badge
  const topBadge = specialties && specialties.length > 0 ? specialties[0] : "Specialist";

  return (
    <div className="group bg-surface-container-lowest rounded-[1rem] overflow-hidden editorial-shadow transition-transform hover:-translate-y-1 flex flex-col">
      <div className="relative h-48 overflow-hidden bg-surface-container-low shrink-0">
        <Image 
          src={image || "/dog.png"} 
          alt={name} 
          fill 
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-primary-container text-white px-3 py-1 rounded-full text-[0.75rem] font-bold uppercase tracking-[0.05em] shadow-md">
          {topBadge}
        </div>
      </div>

      <div className="p-8 flex flex-col grow"> 
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-[1.125rem] font-extrabold text-on-surface tracking-tight line-clamp-1">{name}</h3>
          <div className="flex items-center gap-1 text-primary shrink-0 ml-2">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-sm font-extrabold">{rating}</span>
          </div>
        </div>
        
        {/* Updated for Telehealth: Replaced location with Trust Metrics */}
        <p className="text-[1rem] leading-[1.6] text-on-surface-variant mb-6 italic line-clamp-2">
          {experience} Years Experience • {appointments} Consultations
        </p>

        {/* Dynamic Specialties Chips */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {specialties.slice(0, 2).map((spec, idx) => (
            <span key={idx} className="text-[0.75rem] uppercase tracking-[0.05em] font-bold bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-md">
              {spec}
            </span>
          ))}
        </div>

        {/* Telehealth Booking CTA */}
        <Link href={`/find-vet/${_id}`}>
          <button className="w-full py-4 bg-surface-container-low text-on-surface font-extrabold rounded-xl hover:bg-primary-container hover:text-white transition-all duration-300 flex justify-center items-center gap-2">
            Consult for ₹{price}
            <span className="material-symbols-outlined !text-[1.25rem]">videocam</span>
          </button>
        </Link>
      </div>
    </div>
  );
}