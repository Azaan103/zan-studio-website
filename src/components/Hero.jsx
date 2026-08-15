import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import TornEdge from "./TornEdge";

const TICKETS = [
  { label: "UI/UX", color: "var(--ticket-pink)", rotate: -6 },
  { label: "Branding", color: "var(--ticket-tan)", rotate: 4 },
  { label: "Social", color: "var(--ticket-green)", rotate: -3 },
  { label: "Packaging", color: "var(--ticket-orange)", rotate: 5 },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true" />

      <div className="section hero__inner">
        <div className="container hero__grid">
          <div className="hero__copy">
            <motion.span
              className="badge hero__badge"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Karachi · Est. now
            </motion.span>

            <motion.h1
              className="pixel hero__title"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              ZAN
              <br />
              STUDIO.
            </motion.h1>

            <motion.p
              className="hero__statement"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Designing brands people actually remember.
            </motion.p>

            <motion.p
              className="hero__sub"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              A one-person studio building UI/UX, brand identity and social
              design for founders who'd rather stand out than fit in.
            </motion.p>

            <motion.div
              className="hero__ctas"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.36 }}
            >
              <a
                className="btn btn--primary"
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Work →
              </a>
              <a
                className="btn btn--ghost"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's Talk
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero__frame"
            initial={{ opacity: 0, scale: 0.94, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="polaroid polaroid--hero">
              <div className="polaroid__pin" aria-hidden="true" />
              <div className="polaroid__photo">
                <SmartImage
                  src="/images/hero/Azaan.jpeg"
                  alt="Azaan Rahim, designer behind ZAN Studio"
                  fit="cover"
                  placeholderLabel="hero photo"
                />
              </div>
              <span className="polaroid__caption">Azaan Rahim — Founder</span>
            </div>

            {TICKETS.map((t, i) => (
              <motion.span
                key={t.label}
                className="ticket hero__tag"
                style={{ background: t.color, rotate: `${t.rotate}deg` }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              >
                {t.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <TornEdge fill="var(--cream)" />
    </section>
  );
}
