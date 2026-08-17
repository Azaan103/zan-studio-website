import { motion } from "framer-motion";

const STAGES = [
  { n: "01", label: "Discover", copy: "Understand the problem, the audience and where the brand stands today.", color: "var(--ticket-green)" },
  { n: "02", label: "Define", copy: "Turn that understanding into a strategy and a clear creative direction.", color: "var(--ticket-orange)" },
  { n: "03", label: "Design", copy: "Create, test and refine the actual solution until it earns its place.", color: "var(--ticket-pink)" },
  { n: "04", label: "Deliver", copy: "Hand off polished, organized assets and systems — ready to use.", color: "var(--ticket-tan)" },
];

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <span className="badge process__badge">How I work</span>

        <div className="process__row">
          {STAGES.map((s, i) => (
            <motion.div
              key={s.n}
              className="process__stub"
              style={{ background: s.color }}
              initial={{ opacity: 0, y: 20, rotate: i % 2 ? 3 : -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ rotate: 0, y: -10 }}
            >
              <span className="process__n pixel">{s.n}</span>
              <h3 className="process__label">{s.label}</h3>
              <p className="process__copy">{s.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
