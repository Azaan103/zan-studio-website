import { useEffect, useState } from "react";
import { nav } from "../data/site";
import { goTo } from "./Section";

export default function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const go = (e, href) => { setOpen(false); goTo(e, href); };
  return (
    <nav className={`fnav ${scrolled ? "fnav--scrolled" : ""}`} aria-label="Primary">
      <a className="fnav__logo" href="#top" onClick={(e) => go(e, "#top")} aria-label="ZAN Studio — back to top">ZAN</a>
      <div className="fnav__links">
        {nav.map((l) => (
          <a key={l.href} href={l.href} className={`fnav__link ${l.cta ? "fnav__link--cta" : ""}`} onClick={(e) => go(e, l.href)}>{l.label}</a>
        ))}
      </div>
      <button className="fnav__toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle menu">{open ? "×" : "☰"}</button>
      {open && (
        <div className="fnav__mobile">
          {nav.map((l) => <a key={l.href} href={l.href} className="fnav__mobile-link" onClick={(e) => go(e, l.href)}>{l.label}</a>)}
        </div>
      )}
    </nav>
  );
}
