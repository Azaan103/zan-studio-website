import { motion } from "framer-motion";
import TornEdge from "./TornEdge";
import PixelBlocks from "./PixelBlocks";
import { Btn } from "./Section";
import { hero } from "../data/site";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <PixelBlocks />
      <div className="section hero__inner hero__center">
        <span className="badge hero__badge">{hero.badge}</span>
        <h1 className="pixel hero__title hero__title--xl">
          {hero.headline.map((l) => <span key={l} className="hero__line">{l}</span>)}
        </h1>
        <motion.p className="hero__sub hero__sub--c" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}>
          {hero.sub}
        </motion.p>
        <motion.div className="hero__ctas hero__ctas--c" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }}>
          <Btn href={hero.primary.href}>{hero.primary.label}</Btn>
          <Btn href={hero.secondary.href} kind="ghost">{hero.secondary.label}</Btn>
        </motion.div>
      </div>
      <TornEdge fill="var(--black)" />
    </section>
  );
}
