export default function Steps() {
  const steps = [
    {
      id: 1,
      title: "Describe Concern",
      desc: "Tell us what's happening with your pet via our simple intake form.",
    },
    {
      id: 2,
      title: "Match & Connect",
      desc: "Our smart algorithm finds the best specialist available in under 60 seconds.",
    },
    {
      id: 3,
      title: "Expert Advice",
      desc: "Consult via video or audio and receive your digital RX and care plan.",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-20 text-center tracking-tight">
        Expert Care in 3 Simple Steps
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-[2.75rem] relative">
        {steps.map((step, index) => (
          <div key={step.id} className="relative group z-10">
            {/* Step ID Badge */}
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white text-[1.5rem] font-black mb-8 group-hover:bg-white group-hover:text-primary transition-all duration-300 editorial-shadow">
              {step.id}
            </div>
            
            <h3 className="text-[1.25rem] font-extrabold text-white mb-3 tracking-tight">
              {step.title}
            </h3>
            
            <p className="text-white/80 text-[1rem] leading-[1.6] italic">
              {step.desc}
            </p>
            
            {/* Ghost Connector Line - hidden on mobile, carefully sized on desktop */}
            {index < 2 && (
              <div className="hidden md:block absolute top-8 left-[4.5rem] w-[calc(100%-2rem)] h-[1.5px] bg-white/15 -z-10"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}