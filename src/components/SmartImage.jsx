import { useState } from "react";

/**
 * Renders an image if it exists at `src`.
 * If it's missing (i.e. you haven't dropped your real file in yet),
 * shows a themed placeholder instead of a broken-image icon, telling you
 * exactly where to put the file. Swap in your image and this disappears.
 */
export default function SmartImage({
  src,
  alt,
  fit = "cover",
  placeholderLabel,
  className = "",
  style = {},
}) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className={`smart-image smart-image--placeholder ${className}`} style={style}>
        <span className="smart-image__mark">+</span>
        <span className="smart-image__label">{placeholderLabel || "add image"}</span>
        <span className="smart-image__path">{src}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`smart-image ${className}`}
      style={{ objectFit: fit, ...style }}
      onError={() => setBroken(true)}
      loading="lazy"
    />
  );
}
