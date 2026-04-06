"use client";

import { useState } from "react";

export default function FAQSection() {
  // Keeps track of which FAQ is currently open. (0 means the first one is open by default)
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What animals do you treat?",
      a: "We specialize in cats and dogs, but our network includes experts for birds, rabbits, and exotic pets as well."
    },
    {
      q: "Is a digital prescription valid?",
      a: "Yes, our digital prescriptions are digitally signed and recognized by most major pharmacies. You can show them right from your phone."
    },
    {
      q: "How do the free follow-ups work?",
      a: "After your initial consultation, your chat window remains open with the same doctor for 7 days. You can ask follow-up questions or share recovery progress at no extra cost."
    }
  ];

  return (
    <div className="w-full">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-tight text-on-surface">
        Frequently Asked Questions
      </h2>
      
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

              {/* Expanded Content with a smooth grid transition */}
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