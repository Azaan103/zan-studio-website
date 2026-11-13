import { Reveal } from "./Section";
import SmartImage from "./SmartImage";
import { about } from "../data/site";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal>
          <span className="badge about__badge">{about.badge}</span>
          <h2 className="about__lead">{about.lead}</h2>
          <p className="about__body">{about.body}</p>
          <p className="about-motto">{about.motto.map((m) => <span key={m}>{m}</span>)}</p>
        </Reveal>
        <Reveal delay={0.1} className="about-card">
          <div className="polaroid about-polaroid">
            <div className="polaroid__pin" aria-hidden="true" />
            <div className="polaroid__photo"><SmartImage src={about.person.photo} alt={`${about.person.name}, ${about.person.role}`} fit="cover" placeholderLabel="founder photo" /></div>
            <span className="polaroid__caption">{about.person.name} — {about.person.role}</span>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
