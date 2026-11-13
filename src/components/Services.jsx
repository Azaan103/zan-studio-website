import { useState } from "react";
import { Reveal } from "./Section";
import { services } from "../data/site";

export default function Services() {
  const [active, setActive] = useState(null);
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services__head">
          <span className="pixel services__eyebrow">{services.eyebrow}</span>
          <span className="services__cursor" aria-hidden="true">&gt; select a service_</span>
        </div>
        <Reveal as="div" className="sec-head">
          <h2 className="sec-title">{services.title}</h2>
          <p className="sec-copy">{services.copy}</p>
        </Reveal>
        <ul className="services__list">
          {services.items.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.05}>
              <button type="button" className={`services__row ${active === s.n ? "is-active" : ""}`} style={{ "--row-color": s.color }}
                onMouseEnter={() => setActive(s.n)} onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(s.n)} onBlur={() => setActive(null)} onClick={() => setActive(active === s.n ? null : s.n)}>
                <span className="services__row-index"><span className="services__caret">{active === s.n ? ">" : ""}</span><span className="pixel">{s.n}</span></span>
                <span className="services__row-title">{s.title}</span>
                <span className="services__row-copy">{s.copy}<span className="services__inc">{s.includes.join(" · ")}</span></span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
