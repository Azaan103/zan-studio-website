import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fnav ${scrolled ? "fnav--scrolled" : ""}`} aria-label="Primary">
      <button
        className="fnav__logo"
        onClick={() => go("#top")}
        aria-label="ZAN Studio — back to top"
      >
        ZAN
      </button>

      <div className="fnav__links">
        {LINKS.map((l) => (
          <button key={l.href} className="fnav__link" onClick={() => go(l.href)}>
            {l.label}
          </button>
        ))}
      </div>

      <button
        className="fnav__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        {open ? "×" : "☰"}
      </button>

      {open && (
        <div className="fnav__mobile">
          {LINKS.map((l) => (
            <button key={l.href} className="fnav__mobile-link" onClick={() => go(l.href)}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
