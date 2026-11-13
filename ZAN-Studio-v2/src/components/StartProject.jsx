import { Reveal } from "./Section";
import Availability from "./Availability";
import { site, start } from "../data/site";

export default function StartProject() {
  return (
    <section id="start" className="section contact start">
      <div className="container start__wrap start__wrap--contact">
        <Reveal>
          <span className="badge">PREFER TO TALK?</span>
          <h2 className="contact__title start__title">START A PROJECT.</h2>
          <p className="start__copy">{start.copy} Get in touch directly and let's talk through the details.</p>
          <Availability />
        </Reveal>
        <Reveal className="start-contact__details">
          <a className="start-contact__item" href={`mailto:${site.email}`}>
            <span>EMAIL</span><strong>{site.email}</strong><i>↗</i>
          </a>
          <a className="start-contact__item" href={`https://wa.me/${site.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
            <span>WHATSAPP / CALL</span><strong>{site.phone}</strong><i>↗</i>
          </a>
          {site.socials.map((social) => (
            <a className="start-contact__item" href={social.href} key={social.label} target="_blank" rel="noopener noreferrer">
              <span>{social.label.toUpperCase()}</span><strong>{social.value}</strong><i>↗</i>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
