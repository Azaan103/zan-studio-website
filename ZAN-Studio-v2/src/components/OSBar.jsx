export default function OSBar() {
  return (
    <div className="os-bar" role="presentation">
      <div className="os-bar__dots">
        <span className="os-bar__dot" style={{ background: "#e0574a" }} />
        <span className="os-bar__dot" style={{ background: "#ecb84c" }} />
        <span className="os-bar__dot" style={{ background: "#7ec26a" }} />
      </div>

      <span className="os-bar__label">ZAN STUDIO — index.html</span>

      <div className="os-bar__dots os-bar__dots--right">
        <span className="os-bar__dot" style={{ background: "#7ec26a" }} />
        <span className="os-bar__dot" style={{ background: "#ecb84c" }} />
        <span className="os-bar__dot" style={{ background: "#e0574a" }} />
      </div>
    </div>
  );
}
