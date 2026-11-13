import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sampleNotes = [
  { id: "note-01", quote: "The first draft already felt like the idea in my head — just sharper and more considered.", name: "Your client here", role: "Founder", company: "Startup name", project: "Brand identity", tone: "pink" },
  { id: "note-02", quote: "Clear communication, thoughtful details, and a result that feels like us.", name: "Your client here", role: "Project lead", company: "Company name", project: "Digital design", tone: "green" },
  { id: "note-03", quote: "Everything felt connected, from the big visual idea down to the smallest touchpoint.", name: "Your client here", role: "Client", company: "Brand name", project: "Campaign visuals", tone: "cream" },
  { id: "note-04", quote: "A smooth process, plenty of care, and creative choices that actually had a reason behind them.", name: "Your client here", role: "Founder", company: "Business name", project: "Website design", tone: "orange" },
  { id: "note-05", quote: "It felt collaborative from the start. The final work was playful, polished, and ready to use.", name: "Your client here", role: "Team member", company: "Organization", project: "Brand touchpoints", tone: "blue" },
];

export default function Reviews() {
  // Five editable sample notes for now. Replace these with approved client reviews later.
  const slides = sampleNotes;
  const [index, setIndex] = useState(0);
  const active = slides[index];
  useEffect(() => {
    // Auto-advance the sticky notes; respect reduced-motion preferences.
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 5200);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <motion.div className="sec-head sec-head--ink" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="badge reviews__badge">client notes</span>
          <h2 className="sec-title">WHAT PEOPLE SAY</h2>
          <p className="sec-copy">A little space for the good words. Sample notes for now — swap in real, approved feedback when ready.</p>
        </motion.div>

        <div className="reviews__slideshow">
          <AnimatePresence mode="wait">
            <motion.article key={active.id} className={`review-card review-card--${active.tone} review-card--sticky`}
              initial={{ opacity: 0, x: 44, y: 12, rotate: 3 }} animate={{ opacity: 1, x: 0, y: 0, rotate: index % 2 ? -1.4 : 1.2 }} exit={{ opacity: 0, x: -34, rotate: -3 }} transition={{ type: "spring", stiffness: 230, damping: 23 }}>
              <span className="review-card__tape" aria-hidden="true" />
              <div className="review-card__topline"><span className="pixel">NOTE {String(index + 1).padStart(2, "0")} / 05</span><span className="review-card__scribble" aria-hidden="true">✳</span></div>
              <div className="review-card__mark" aria-hidden="true">“</div>
              <blockquote>{active.quote}</blockquote>
              <footer><div><strong>{active.name}</strong><span>{active.role} · {active.company}</span></div><span className="review-card__project">{active.project}</span></footer>
            </motion.article>
          </AnimatePresence>
          <p className="reviews__auto-label" aria-live="polite">AUTOMATICALLY ROTATING NOTES · {String(index + 1).padStart(2, "0")} / 05</p>
        </div>
        </div>
        <p className="reviews__admin-note">Replace the sample notes in <code>src/components/Reviews.jsx</code> with approved client feedback.</p>
      
    </section>

  );
}
