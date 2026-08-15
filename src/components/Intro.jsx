import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "zan-intro-seen";
const BAR_DELAY = 0.45; // s, before the bar starts filling
const BAR_DURATION = 1.3; // s, how long the fill takes
const HOLD_AFTER_FILL = 0.35; // s, brief pause once full before swiping away

export default function Intro() {
  // Only play once per browser session — reloading the page repeatedly
  // shouldn't force the visitor to sit through it again.
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem(SESSION_KEY);
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!show) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
  }, [show]);

  const dismiss = () => {
    setShow(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="intro__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <motion.span
            className="badge intro__badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Design Studio
          </motion.span>

          <motion.h1
            className="pixel intro__mark"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            ZAN
            <br />
            STUDIO.
          </motion.h1>

          <div className="intro__bar-wrap">
            <div className="intro__bar-track">
              <motion.div
                className="intro__bar-fill"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: BAR_DELAY, duration: BAR_DURATION, ease: "easeInOut" }}
                onAnimationComplete={() => {
                  setTimeout(dismiss, HOLD_AFTER_FILL * 1000);
                }}
              />
            </div>
            <motion.span
              className="intro__loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              opening studio
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
