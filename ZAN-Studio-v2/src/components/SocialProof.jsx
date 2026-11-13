import { motion } from "framer-motion";
import { socialProof } from "../data/site";

const items = [...socialProof.brands, ...socialProof.brands];

export default function SocialProof() {
  return (
    <section id="clients" className="social-proof" aria-label="Brands ZAN Studio has worked with">
      <div className="social-proof__head container">
        <motion.span
          className="badge social-proof__badge"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {socialProof.eyebrow}
        </motion.span>
        <h2>{socialProof.title}</h2>
      </div>
      <div className="brand-marquee" aria-hidden="true">
        <div className="brand-marquee__track">
          {items.map((brand, i) => (
            <span key={`${brand}-${i}`} className={`brand-tone-${i % 7}`}>
              {brand}
              <b>✦</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
