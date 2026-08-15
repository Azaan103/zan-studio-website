// Animated arcade-strip divider: Pac-Man chomps across a row of dots,
// a red ghost trails behind. Pure CSS animation, loops continuously.
export default function PacmanDivider({ dots = 26 }) {
  return (
    <div className="pac" role="presentation" aria-hidden="true">
      <div className="pac__track">
        <div className="pac__dots" style={{ "--dot-count": dots }}>
          {Array.from({ length: dots }).map((_, i) => (
            <span className="pac__dot" key={i} />
          ))}
        </div>

        <div className="pac__mover">
          <span className="pac__ghost">
            <span className="pac__ghost-eye" />
            <span className="pac__ghost-eye" />
          </span>
          <span className="pac__pacman" />
        </div>
      </div>
    </div>
  );
}
