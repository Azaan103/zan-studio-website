import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KEY = "zan-intro-seen";

// Full-screen cover. Swipe up / scroll down / arrow key / click reveals the site.
export default function Intro() {
  const [show, setShow] = useState(() => {
    try { return !sessionStorage.getItem(KEY); } catch { return true; }
  });
  const y0 = useRef(null);

  const dismiss = () => {
    setShow(false);
    try { sessionStorage.setItem(KEY, "1"); } catch { /* ignore */ }
  };

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    if (!show) return;
    const wheel = (e) => e.deltaY > 8 && dismiss();
    const key = (e) => ["ArrowDown", "PageDown", " ", "Enter"].includes(e.key) && (e.preventDefault(), dismiss());
    const ts = (e) => (y0.current = e.touches[0].clientY);
    const tm = (e) => y0.current !== null && y0.current - e.touches[0].clientY > 40 && dismiss();
    window.addEventListener("wheel", wheel, { passive: true });
    window.addEventListener("keydown", key);
    window.addEventListener("touchstart", ts, { passive: true });
    window.addEventListener("touchmove", tm, { passive: true });
    return () => {
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", key);
      window.removeEventListener("touchstart", ts);
      window.removeEventListener("touchmove", tm);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="intro" role="dialog" aria-label="ZAN Studio intro"
          exit={{ y: "-100%" }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
          <div className="intro__dots" aria-hidden="true"><span /><span /><span /></div>
          <motion.span className="badge intro__badge" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Karachi · Est. 2026
          </motion.span>
          <motion.h1 className="pixel intro__mark" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            ZAN<br />STUDIO.
          </motion.h1>
          <motion.button type="button" className="intro__swipe" onClick={dismiss}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <span className="intro__arrow" aria-hidden="true">↑</span>
            Swipe up to enter
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
