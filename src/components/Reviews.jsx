import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sampleNotes = [
  { id: "note-01", quote: ".< , very chatpati and tea (T_T) memories best of luck for everything may your clients bother you less for designs", name: "Community Member", role: "Community", company: "GDG-DSU", project: "Designer", tone: "pink" },
  { id: "note-02", quote: "ZAN STUDIO understood our vision and brought OnScene to life across every touchpoint from business cards and event branding to our QR holder and app store screenshots. Everything felt consistent, modern, energetic, and unmistakably OnScene. We loved how it all came together.", name: "Muhammad Samee", role: "Founder", company: "OnScene", project: "Brand Design · Print", tone: "pink" },
  { id: "note-03", quote: "We really liked the UI concept ZAN STUDIO created for Kaqaz Qalam. We wanted something playful and funky that matched our stationery and toys, and the design captured that really well. It feels fun, colourful, and true to what we had in mind.", name: "Hussain", role: "Web Developer", company: "Kagaz Qalam", project: "UI-UX Design", tone: "green" },
  { id: "note-04", quote: "We’re really happy with the card ZAN STUDIO designed for us. They understood what we wanted and made it look clean and professional. We’re also looking forward to working with them on our website and other designs.", name: "Rahim Rajab Ali", role: "Director", company: "Al Zehra Diagnostic Center", project: "Brand Design · Print", tone: "cream" },
  { id: "note-05", quote: "I wanted a brand identity with the fun, playful energy of Duolingo, but something that still felt unique to my brand. ZAN Studio understood the direction right away and translated the idea into an identity that felt cohesive, distinctive, and full of personality.", name: "Saad Jangda", role: "Founder", company: "Subjectify", project: "Brand Identity", tone: "orange" },
  { id: "note-06", quote: "It felt collaborative from the start. The final work was playful, polished, and ready to use.", name: "Shayan", role: "Founder", company: "Nutty Bliss", project: "Physical touchpoints", tone: "blue" },
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
          <p className="sec-copy">A little space for the good words. Sample notes for now swap in real, approved feedback when ready.</p>
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
          <p className="reviews__auto-label" aria-live="polite">{String(index + 1).padStart(2, "0")} / 05</p>
        </div>
        </div>
        {/* <p className="reviews__admin-note">Replace the sample notes in <code>src/components/Reviews.jsx</code> with approved client feedback.</p> */}
      
    </section>

  );
}
