import { Reveal } from "./Section";
import { faq } from "../data/site";

export default function Faq() {
  return (
    <section id="faq" className="section faq">
      <div className="container faq__wrap">
        <Reveal className="sec-head sec-head--ink"><h2 className="sec-title">FAQ</h2></Reveal>
        <div>
          {faq.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
