export default function OnboardingSteps() {
  const steps = [
    { id: 1, title: "Complete Profile", desc: "Upload your credentials, specialization, and professional background for verification." },
    { id: 2, title: "Orientation", desc: "A quick 15-minute walkthrough of our proprietary clinical interface and diagnostic tools." },
    { id: 3, title: "Go Live", desc: "Set your availability and start accepting video consultations and text inquiries immediately." }
  ];

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-on-surface">Your Journey to Digital Success</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Three simple steps to start consulting with pet parents across the platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant -z-10"></div>
          
          {steps.map((step) => (
            <div key={step.id} className="bg-surface p-8 text-center rounded-2xl border border-transparent hover:border-outline-variant/30 transition-all editorial-shadow">
              <div className="w-16 h-16 bg-primary-container text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 border-4 border-surface shadow-lg">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-4 text-on-surface">{step.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}