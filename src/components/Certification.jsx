import { motion } from "framer-motion";
import SmartImage from "./SmartImage";

export default function Certification() {
  return (
    <section className="section cert">
      <div className="container cert__grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge cert__badge">Credential</span>
          <h2 className="cert__title">
            Google Certified
            <br />
            UX Designer.
          </h2>
          <p className="cert__copy">
            Trained on real product problems — research, wireframes,
            prototyping and usability testing — through Google's UX Design
            program. It's the foundation the studio's UI/UX work sits on.
          </p>
        </motion.div>

        <motion.div
          className="cert__frame"
          initial={{ opacity: 0, rotate: -4, y: 24 }}
          whileInView={{ opacity: 1, rotate: -3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="cert__tape cert__tape--l" aria-hidden="true" />
          <span className="cert__tape cert__tape--r" aria-hidden="true" />
          <SmartImage
            src="/images/certification/Google certificate.png"
            alt="Google UX Design certification"
            fit="contain"
            placeholderLabel="certification image"
            className="cert__img"
          />
        </motion.div>
      </div>
    </section>
  );
}
