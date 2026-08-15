const ITEMS = ["Azaan Rahim", "Zan Studio", "Let's Create"];

function Track() {
  return (
    <span className="marquee__track">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className={i % 2 === 1 ? "accent" : ""}>
          * {item}
        </span>
      ))}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="marquee">
        <Track />
      </div>
      <div className="footer__bottom">
        <span className="pixel footer__mark">ZAN STUDIO</span>
        <p className="footer__tagline">Designing brands people remember.</p>
        <div className="footer__meta">
          <span>Karachi, Pakistan</span>
          <span>© {new Date().getFullYear()} Zan Studio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
