import { site } from "../data/site";

const ITEMS = ["Azaan Rahim", "Zan Studio", "Let's Create"];
export default function Footer() {
  const t = Array.from({ length: 8 }, () => ITEMS).flat();
  return (
    <footer className="footer">
      <div className="marquee" aria-hidden="true">
        <span className="marquee__track">{t.map((x, i) => <span key={i} className={i % 2 ? "accent" : ""}>* {x}</span>)}</span>
      </div>
      <div className="footer__bottom">
        <span className="pixel footer__mark">{site.name}.</span>
        <p className="footer__tagline">{site.tagline}</p>
        <p className="footer__links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {site.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}
        </p>
        <div className="footer__meta">
          <span>{site.location}</span>
          <span>© 2026 ZAN Studio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
