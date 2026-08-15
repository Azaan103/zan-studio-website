import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    n: "01",
    title: "UI/UX Design",
    copy: "Interfaces and product experiences designed around how people actually use them.",
    color: "var(--ticket-pink)",
  },
  {
    n: "02",
    title: "Brand Identity",
    copy: "Logo systems, color and type that make a brand recognizable at a glance.",
    color: "var(--ticket-green)",
  },
  {
    n: "03",
    title: "Social Design",
    copy: "Content built to communicate a message — not just fill a feed slot.",
    color: "var(--ticket-orange)",
  },
  {
    n: "04",
    title: "Graphic Design",
    copy: "Packaging, print and campaign visuals with a clear point of view.",
    color: "var(--ticket-tan)",
  },
  {
    n: "05",
    title: "Digital Experiences",
    copy: "Small, considered web experiences — like this one — for brands worth remembering.",
    color: "var(--blue)",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section className="section services">
      <div className="container">
        <div className="services__head">
          <motion.span
            className="pixel services__eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            what-i-do.sys
          </motion.span>
          <span className="services__cursor" aria-hidden="true">
            &gt; select a service_
          </span>
        </div>

        <div className="services__list" role="list">
          {SERVICES.map((s, i) => {
            const isActive = active === s.n;
            return (
              <motion.button
                key={s.n}
                type="button"
                className={`services__row ${isActive ? "is-active" : ""}`}
                style={{ "--row-color": s.color }}
                onMouseEnter={() => setActive(s.n)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(s.n)}
                onBlur={() => setActive(null)}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <span className="services__row-index">
                  <span className="services__caret">{isActive ? ">" : ""}</span>
                  <span className="pixel">{s.n}</span>
                </span>
                <span className="services__row-title">{s.title}</span>
                <span className="services__row-copy">{s.copy}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
