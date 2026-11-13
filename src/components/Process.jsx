import { motion } from "framer-motion";
import { process } from "../data/site";

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <span className="badge process__badge">{process.badge}</span>
        <h2 className="sr-only">How ZAN works</h2>
        <div className="process__row process__row--5">
          {process.steps.map((s, i) => (
            <motion.div key={s.n} className="process__stub" style={{ background: s.color }}
              initial={{ opacity: 0, y: 20, rotate: i % 2 ? 3 : -3 }} whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 2 : -2 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ rotate: 0, y: -10 }}>
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
