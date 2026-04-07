"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is Conbun available 24/7 for pet care consultation?",
      a: "Yes. Conbun offers 24/7 online pet care consultation. Whether it's a late-night emergency or a Sunday afternoon query, our veterinarians are available round the clock via chat, call, or video."
    },
    {
      q: "What types of pets can I get consultation for?",
      a: "Conbun covers dogs, cats, birds (parrots, cockatiels, finches), rabbits, fish (freshwater and marine), and exotic pets like reptiles. Veterinarians are trained in breed-specific care, so you always get advice relevant to your pet."
    },
    {
      q: "Are Conbun's pet consultants certified and verified?",
      a: "Absolutely. Every expert undergoes rigorous verification, credential/background checks, and quality review. We have 500+ certified vets & pet care consultants across veterinary health, nutrition, behaviour, and grooming."
    },
    {
      q: "How much does a pet consultation cost on Conbun?",
      a: "Conbun offers online vet consultations starting from just ₹199. Schedule a one-on-one appointment with a vet — far cheaper than a physical vet visit."
    },
    {
      q: "Can I get a consultation for my new puppy or kitten?",
      a: "Yes! Conbun is your pet care partner from kittenhood to adulthood. Our experts guide you through vaccinations, feeding schedules, socialisation, toilet training, and the first-year care roadmap."
    },
    {
      q: "Is Conbun available across India?",
      a: "Yes. Wherever you are in India, veterinary care is just a tap away. Talk to veterinarians online in your own language. Get localised veterinary help across all regions in India."
    }
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-on-surface">
          Frequently Asked Questions
        </h2>
        <p className="text-[1.125rem] text-on-surface-variant leading-[1.6] italic max-w-2xl mx-auto">
          Everything you need to know before your first consultation.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={`p-8 rounded-[2rem] cursor-pointer group transition-all duration-300 editorial-shadow
                ${isOpen ? "bg-surface-container-lowest" : "bg-surface-container-low hover:bg-surface-container-lowest"}`}
            >
              <div className="flex justify-between items-center gap-6">
                <h4 className={`text-[1.125rem] font-extrabold tracking-tight transition-colors
                  ${isOpen ? "text-primary" : "text-on-surface group-hover:text-primary"}`}>
                  {faq.q}
                </h4>

                <span className={`material-symbols-outlined transition-transform duration-300 shrink-0
                  ${isOpen ? "text-primary rotate-180" : "text-on-surface-variant/40 group-hover:text-primary"}`}>
                  {isOpen ? "remove" : "add"}
                </span>
              </div>

              <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-outline-variant/10" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="text-[1rem] leading-[1.6] text-on-surface-variant italic">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}