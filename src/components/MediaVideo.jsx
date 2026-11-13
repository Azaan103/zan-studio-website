import { useEffect, useRef, useState } from "react";

/**
 * Portfolio video.
 * - The file only starts downloading when it is near the screen (lazy).
 * - Autoplays MUTED once mostly in view, pauses when it scrolls away.
 * - Only ONE video plays at a time across the page.
 * - `sound: true` shows a clear "tap for sound" control. Browsers block autoplay
 *   with sound, so sound is always the visitor's choice; the video still plays fine without it.
 * - Reduced-motion visitors never get autoplay; they press play.
 */

let current = null; // the single video allowed to be playing
const claim = (el) => {
  if (current && current !== el) current.pause();
  current = el;
};

const I = {
  play: <path d="M5 3h2v2h2v2h2v2h2v2h-2v2H9v2H7v2H5z" />,
  pause: <path d="M4 3h3v12H4zM11 3h3v12h-3z" />,
  on: <path d="M2 7h3l4-3v10l-4-3H2zM12 6h2v6h-2zM15 4h2v10h-2z" />,
  off: <path d="M2 7h3l4-3v10l-4-3H2zM12 6h2v2h2V6h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h2V8h-2z" />,
  full: <path d="M2 2h5v2H4v3H2zM11 2h5v5h-2V4h-3zM2 11h2v3h3v2H2zM14 11h2v5h-5v-2h3z" />,
};
const Icon = ({ d }) => (
  <svg viewBox="0 0 18 18" width="16" height="16" fill="currentColor" shapeRendering="crispEdges" aria-hidden="true" focusable="false">{I[d]}</svg>
);

export default function MediaVideo({ item, label }) {
  const wrap = useRef(null);
  const vid = useRef(null);
  const userPaused = useRef(false);
  const [near, setNear] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);
  const [fsOK, setFsOK] = useState(false);

  const hasSound = !!item.sound;
  const auto = item.autoplay !== false;

  const start = () => { const p = vid.current?.play(); if (p && p.catch) p.catch(() => setPlaying(false)); };

  useEffect(() => {
    const v = vid.current;
    setFsOK(!!(document.fullscreenEnabled || (v && v.webkitEnterFullscreen)));
    const el = wrap.current;
    if (!el || typeof IntersectionObserver === "undefined") { setNear(true); return; }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const load = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); load.disconnect(); } }, { rootMargin: "300px 0px" });
    const view = new IntersectionObserver(([e]) => {
      if (!auto || reduce) return;
      if (e.intersectionRatio >= 0.6 && !userPaused.current) start();
      else if (e.intersectionRatio < 0.25) vid.current?.pause();
    }, { threshold: [0, 0.25, 0.6] });
    load.observe(el);
    view.observe(el);
    return () => { load.disconnect(); view.disconnect(); if (current === v) current = null; };
  }, [auto]);

  useEffect(() => { if (vid.current) vid.current.muted = muted; }, [muted]);

  const toggle = () => {
    const v = vid.current;
    if (!v) return;
    if (v.paused) { userPaused.current = false; start(); } else { userPaused.current = true; v.pause(); }
  };
  const toggleSound = () => {
    const v = vid.current;
    const next = !muted;
    if (v) v.muted = next;
    setMuted(next);
    if (!next && v?.paused) { userPaused.current = false; start(); }
  };
  // Tapping the picture: first tap on a sound-video turns sound on; after that it play/pauses.
  const onSurface = () => (hasSound && muted ? toggleSound() : toggle());
  const fullscreen = () => {
    const v = vid.current;
    if (wrap.current?.requestFullscreen) wrap.current.requestFullscreen().catch(() => {});
    else if (v?.webkitEnterFullscreen) v.webkitEnterFullscreen();
  };

  if (failed) {
    return (
      <div className="smart-image smart-image--placeholder">
        <span className="smart-image__mark">+</span>
        <span className="smart-image__label">add video</span>
        <span className="smart-image__path">{item.src}</span>
      </div>
    );
  }

  return (
    <div className={`vd ${playing ? "is-playing" : ""}`} ref={wrap}>
      <video
        ref={vid}
        className="vd__el"
        src={near ? item.src : undefined}
        poster={item.poster}
        preload={near ? "metadata" : "none"}
        muted
        playsInline
        loop={item.loop !== false}
        aria-label={label}
        style={{ objectFit: item.fit || "cover" }}
        onPlay={(e) => { setPlaying(true); claim(e.currentTarget); }}
        onPause={() => setPlaying(false)}
        onError={() => near && setFailed(true)}
      />
      <button type="button" className="vd__surface" onClick={onSurface}
        aria-label={`${playing ? "Pause" : "Play"} video: ${label}`}>
        {!playing && <span className="vd__big" aria-hidden="true"><Icon d="play" /></span>}
      </button>
      <div className="vd__bar">
        <button type="button" className="vd__btn" onClick={toggle} aria-label={playing ? "Pause video" : "Play video"}>
          <Icon d={playing ? "pause" : "play"} />
        </button>
        {hasSound && (
          <button type="button" className={`vd__btn vd__btn--sound ${muted ? "is-off" : ""}`} onClick={toggleSound}
            aria-pressed={!muted} aria-label={muted ? "Turn sound on" : "Turn sound off"}>
            <Icon d={muted ? "off" : "on"} />
            <span>{muted ? "Tap for sound" : "Sound on"}</span>
          </button>
        )}
        {fsOK && (
          <button type="button" className="vd__btn vd__btn--fs" onClick={fullscreen} aria-label="Fullscreen">
            <Icon d="full" />
          </button>
        )}
      </div>
    </div>
  );
}
