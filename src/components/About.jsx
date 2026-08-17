import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge about__badge">About the studio</span>

          <p className="about__lead">
            ZAN Studio is a one-person design practice, run by{" "}
            <strong>Azaan Rahim</strong> built on the belief that most
            brands don't fail from a lack of content, they fail from a lack
            of a point of view.
          </p>

          <p className="about__body">
Make it useful. Make it beautiful. Make it yours. From brand identities to interfaces and digital experiences, ZAN STUDIO turns problems into design that feels distinct, intentional, and built to last.          </p>
        </motion.div>

        <motion.div
          className="about__note"
          initial={{ opacity: 0, rotate: -3, y: 20 }}
          whileInView={{ opacity: 1, rotate: -2, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="about__pin" aria-hidden="true" />
          <p className="about__note-title">on the desk</p>
          <ul className="about__note-list">
            <li>UI/UX Design</li>
            <li>Brand Identity</li>
            <li>Social Design</li>
            <li>Graphic Design</li>
            <li>Digital Experiences</li>
          </ul>
          <p className="about__note-sign">— A. Rahim</p>
        </motion.div>
      </div>
    </section>
  );
}
