import { motion } from "framer-motion";
import SmartImage from "./SmartImage";
import MediaVideo from "./MediaVideo";

// Renders ONE project from src/data/projects.js. You never edit this to add media:
// every item in `media` is drawn by <MediaItem /> according to its `type`.

const WIDTH = { full: 6, twothirds: 4, half: 3, third: 2 }; // columns in the project's 6-col grid

function MediaItem({ m, project, only }) {
  const size = m.size || (only ? "full" : "half");
  const ratio = (m.ratio || project.ratio || "4/5").replace("/", " / ");
  const alt = m.alt || `${project.title} — ${project.category}`;
  const href = project.link;
  const frame = (
    <div className="mi__frame" style={{ aspectRatio: ratio }}>
      {m.type === "video" ? (
        <MediaVideo item={m} label={alt} />
      ) : href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="mi__link">
          <SmartImage src={m.src} alt="" fit={m.fit || "cover"} placeholderLabel={`${project.title} image`} className="mi__img" />
        </a>
      ) : (
        <SmartImage src={m.src} alt={alt} fit={m.fit || "cover"} placeholderLabel={`${project.title} image`} className="mi__img" />
      )}
      {project.featured && m === project.media[0] && <span className="ticket wk-flag">Featured</span>}
    </div>
  );
  return <figure className="mi" style={{ "--w": WIDTH[size] || 3 }}>{frame}</figure>;
}

export default function ProjectCard({ p, i }) {
  const span = p.span || (p.featured ? 6 : 2);
  const ext = !!p.link;
  return (
    <motion.article
      className={`wk-card ${p.featured ? "wk-card--feat" : ""}`}
      data-span={span} style={{ "--span": span }}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }} transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
    >
      <header className="work__meta">
        <h3 className="work__name">{p.title}</h3>
        <span className="work__cat">{p.category}</span>
      </header>
      <div className="mi-grid">
        {p.media.map((m) => <MediaItem key={m.src} m={m} project={p} only={p.media.length === 1} />)}
      </div>
      {p.featured && (p.meta || p.points) && (
        <p className="wk-points">{p.meta}{p.meta && p.points ? <br /> : null}{p.points?.join(" · ")}</p>
      )}
      <a className="wk-link" href={p.link || "#start"} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={ext ? `View ${p.title} project (opens in a new tab)` : `Start a project like ${p.title}`}>
        {ext ? "View project →" : "Start a project like this →"}
      </a>
    </motion.article>
  );
}
