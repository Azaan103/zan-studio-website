import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectsCta } from "../data/projects";
import { work } from "../data/site";
import SmartImage from "./SmartImage";

let activeGalleryVideo = null;

function GalleryMedia({ item, project, lightbox = false }) {
  const ratio = (item.ratio || project?.ratio || "4/3").replace("/", " / ");
  const label = item.alt || `${project?.title || "ZAN Studio"} — ${project?.category || "Project"}`;

  if (item.type === "placeholder") {
    return (
      <div className="project-media__placeholder">
        <span className="pixel">{project?.title || "ZAN"}</span>
        <small>{item.label || "Add media in src/data/projects.js"}</small>
      </div>
    );
  }

  if (item.type === "video") {
    return <GalleryVideo item={item} label={label} lightbox={lightbox} />;
  }

  return (
    <SmartImage
      src={item.src}
      alt={lightbox ? label : ""}
      fit={item.fit || "contain"}
      placeholderLabel={item.placeholderLabel || `${project?.title || "Project"} image`}
      className="project-media__image"
    />
  );
}

function GalleryVideo({ item, label, lightbox }) {
  const ref = useRef(null);
  useEffect(() => {
    const video = ref.current;
    if (!video || lightbox || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const play = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= 0.55 && item.autoplay !== false && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (activeGalleryVideo && activeGalleryVideo !== video) activeGalleryVideo.pause();
        activeGalleryVideo = video;
        video.play().catch(() => {});
      } else if (entry.intersectionRatio < 0.2 && activeGalleryVideo === video) {
        video.pause();
      }
    }, { threshold: [0, 0.2, 0.55] });

    play.observe(video);
    return () => {
      play.disconnect();
      if (activeGalleryVideo === video) activeGalleryVideo = null;
    };
  }, [item.autoplay, lightbox]);

  return (
    <video
      ref={ref}
      className="project-media__video"
      src={item.src}
      poster={item.poster}
      muted={!lightbox || item.sound !== true}
      controls={lightbox}
      loop={item.loop !== false}
      playsInline
      preload={lightbox ? "metadata" : "none"}
      aria-label={label}
    />
  );
}

function MediaCard({ item, project, onOpen }) {
  return (
    <button
      type="button"
      className="project-media"
      style={{ "--ratio": (item.ratio || "4/3").replace("/", " / ") }}
      onClick={() => onOpen({ item, project })}
      aria-label={`Preview ${project?.title || "project media"}`}
    >
      <GalleryMedia item={item} project={project} />
      <span className="project-media__overlay">
        <span>{project?.title}</span>
        <small>{project?.category}</small>
      </span>
    </button>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const media = useMemo(() => {
    const list = projects.flatMap((project) =>
      project.media.map((item) => ({ item, project }))
    );
    return list.length ? list : [];
  }, []);

  const fallbackOnScene = {
    item: { type: "placeholder", label: "Add your OnScene image or video", ratio: "16/8" },
    project: projects.find((p) => p.id === "onscene") || { title: "OnScene", category: "Product Design" },
  };

  const displayMedia = media.map((entry) =>
    entry.project.id === "onscene" && entry.item.type === "image" && entry.item.src.includes("/onscene/")
      ? fallbackOnScene
      : entry
  );

  const rowOne = [...displayMedia, ...displayMedia];

  return (
    <section id="work" className="section featured-work">
      <div className="container">
        <motion.div
          className="sec-head sec-head--ink featured-work__head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge featured-work__badge">selected work</span>
          <h2 className="sec-title">{work.title}</h2>
          <p className="sec-copy">{work.copy}</p>
        </motion.div>
      </div>

      <div className="media-marquee" aria-label="Selected ZAN Studio project media">
        <div className="media-marquee__row">
          <div className="media-marquee__track media-marquee__track--forward">
            {rowOne.map((entry, i) => <MediaCard key={`r1-${entry.project.id}-${i}`} {...entry} onOpen={setSelected} />)}
          </div>
        </div>
      </div>

      <div className="container featured-work__footer">
        <div className="featured-work__hint">
          <span className="pixel">IMAGES + VIDEO</span>
          <span>Add, reorder, or change image/video media in <code>src/data/projects.js</code>.</span>
        </div>
        <a className="wk-link" href={projectsCta.href}>{projectsCta.cta}</a>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="media-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.project.title} project preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
          >
            <motion.div
              className="media-lightbox__panel"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
            >
              <button className="media-lightbox__close" type="button" onClick={() => setSelected(null)} aria-label="Close project preview">×</button>
              <div className="media-lightbox__media" style={{ "--ratio": (selected.item.ratio || "16/10").replace("/", " / ") }}>
                <GalleryMedia item={selected.item} project={selected.project} lightbox />
              </div>
              <div className="media-lightbox__meta">
                <div>
                  <h3>{selected.project.title}</h3>
                  <p>{selected.project.category}</p>
                </div>
                {selected.project.link && (
                  <a href={selected.project.link} target="_blank" rel="noopener noreferrer" className="btn btn--primary">View project →</a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
