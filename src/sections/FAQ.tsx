import { useState } from "react";

const QA = [
  {
    q: "Where can you deliver in Austin and surrounding areas?",
    a: "We deliver anywhere in North Austin and the greater metropolitan area. From high-rises and hotels to private residences, tech campuses, and event venues, our concierge delivery service brings your chosen vehicle directly to you. Whether you're in Downtown, North Austin, or the surrounding suburbs, we make the entire process effortless and precise."
  },
  {
    q: "Can I book last minute?",
    a: "Yes, last minute reservations are welcome across Austin. Simply contact our concierge team by phone or through our online form, and we'll confirm availability as quickly as possible. We specialize in providing smooth, timely experiences for spontaneous plans and luxury getaways."
  },
  {
    q: "Is insurance required?",
    a: "Yes, valid insurance is required for every rental. If your personal auto policy includes full coverage, it may apply to your rental. If not, we can assist with temporary rental insurance options to ensure complete protection. We verify coverage and driver eligibility before handing over the keys, so your rental experience begins seamlessly."
  },
  {
    q: "Do you offer hourly rentals for events?",
    a: "Yes, we provide flexible hourly rentals across Austin for events, photoshoots, business occasions, and private gatherings. Whether you're in North Austin, Downtown, South Congress, or beyond, you can rent by the hour for convenience, style, and maximum value."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="uv-section uv-bg-b uv-pad text-white relative" style={{ scrollMarginTop: '40px' }}>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-black pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-0">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.03]">
          {QA.map((item, i) => {
            const isOpen = open === i;
            const buttonId = `faq-button-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={i}>
                <button
                  id={buttonId}
                  className="w-full flex items-center justify-between px-5 py-4 text-left focus-ring"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-semibold">{item.q}</span>
                  <span className="text-white/70">{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 text-white/80"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
