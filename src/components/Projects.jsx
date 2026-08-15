import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="work__head">
          <motion.span
            className="badge work__badge"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Selected work
          </motion.span>
          <motion.h2
            className="work__title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            A few things
            <br />
            worth showing.
          </motion.h2>
        </div>

        <div className="work__grid">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href="#contact"
              className={`work__card work__card--${p.size}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            >
              <div className="work__frame">
                <SmartImage
                  src={p.image}
                  alt={`${p.title} — ${p.category}`}
                  fit={p.fit}
                  placeholderLabel={`project ${i + 1} image`}
                  className="work__img"
                />
                <span className="work__overlay" aria-hidden="true" />
              </div>
              <div className="work__meta">
                <span className="work__cat">{p.category}</span>
                <h3 className="work__name">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
