import { motion } from "framer-motion";
// Shared scroll-in wrapper + go-to-anchor helper.
export const Reveal = ({ children, delay = 0, className = "", as = "div", ...rest }) => {
  const M = motion[as];
  return (
    <M className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay }} {...rest}>
      {children}
    </M>
  );
};
export const goTo = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  history.replaceState(null, "", href);
};
export const Btn = ({ href, children, kind = "primary" }) => (
  <a className={`btn btn--${kind}`} href={href} onClick={(e) => goTo(e, href)}>{children}</a>
);
