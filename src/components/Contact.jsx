import { motion } from "framer-motion";

// ---- Replace with your real details ----
const CONTACT = {
  email: "hello@zanstudio.co",
  phone: "+92 331 6677011",
  linkedin: "https://www.linkedin.com/company/zan-studioo",
  instagram: "https://www.instagram.com/zan.studio.co/",
};

const LINKS = [
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, color: "var(--ticket-green)" },
  { label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}`, color: "var(--ticket-tan)" },
  { label: "LinkedIn", value: "ZAN STUDIO", href: CONTACT.linkedin, color: "var(--ticket-pink)" },
  { label: "Instagram", value: "@zan.studio.co", href: CONTACT.instagram, color: "var(--ticket-orange)" },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2
          className="contact__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Have something
          <br />
          worth <span className="pixel contact__accent">building?</span>
        </motion.h2>

        <div className="contact__links">
          {LINKS.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="ticket contact__link"
              style={{ background: l.color }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <span className="contact__link-label">{l.label}</span>
              <span className="contact__link-value">{l.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
