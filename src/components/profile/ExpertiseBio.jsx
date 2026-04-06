export default function ExpertiseBio({ doctor }) {
  // Dynamically generate the expertise list based on the specific doctor's data
  const expertiseList = [
    `${doctor.experience} Years Clinical Practice`,
    doctor.title,
    "Certified Digital Consultant",
    "Verified Conbun Specialist"
  ];

  return (
    <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-8">
        <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-on-surface">
          <span className="w-12 h-1 bg-primary rounded-full shrink-0"></span>
          Clinical Philosophy
        </h2>
        <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed italic">
          <p>
            {doctor.about}
          </p>
          <p className="text-on-surface font-medium border-l-4 border-primary-container pl-6 py-2">
            "My mission is simple: to provide expert, empathetic care to every pet, ensuring their story continues with joy and comfort."
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Specializations Card */}
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/20">
            <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
              <span className="material-symbols-outlined shrink-0">science</span>
              Specializations
            </h3>
            <ul className="space-y-4">
              {doctor.specialties.map((item) => (
                <li key={item} className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                  <span className="w-2 h-2 bg-primary-container rounded-full shrink-0"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Card */}
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/20">
            <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
              <span className="material-symbols-outlined shrink-0">workspace_premium</span>
              Expertise
            </h3>
            <ul className="space-y-4">
              {expertiseList.map((item) => (
                <li key={item} className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                  <span className="w-2 h-2 bg-primary-container rounded-full shrink-0"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sticky Schedule Sidebar */}
      <div className="lg:col-span-4 bg-primary text-white p-10 rounded-[2.5rem] self-start sticky top-28 shadow-2xl">
        <h3 className="text-2xl font-bold mb-8">Weekly Schedule</h3>
        <div className="space-y-4 mb-10">
          {[
            { day: "Mon - Wed", time: "08:00 - 16:00" },
            { day: "Thursday", time: "08:00 - 18:00" },
            { day: "Friday", time: "Live Stream", highlight: true },
            { day: "Saturday", time: "Urgent Only" }
          ].map((row) => (
            <div key={row.day} className="flex justify-between items-center py-3 border-b border-white/10">
              <span className="font-bold">{row.day}</span>
              <span className={`px-4 py-1 rounded-full text-xs font-black ${row.highlight ? "bg-primary-container text-on-primary-container" : "bg-white/10 text-white"}`}>
                {row.time}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-white/5 p-6 rounded-2xl mb-8 border border-white/10">
          <div className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Next Available Slot</div>
          <div className="text-xl font-black">Tomorrow, 10:15 AM</div>
        </div>
        <button className="w-full bg-primary-container text-on-primary-container py-5 rounded-2xl font-black text-lg transition-transform hover:scale-[1.02] shadow-xl">
          Consult for ₹{doctor.price}
        </button>
      </div>
    </section>
  );
}