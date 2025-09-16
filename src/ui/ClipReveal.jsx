import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";

export default function ClipReveal({ children, className = '' }) {
  const [root, setRoot] = useState(null);

  useEffect(() => {
    // Use the scroll container as the root for in-view detection so animations
    // fire when scrolling inside the app's main element (overflow:auto).
    const el = document.getElementById('page-scroll');
    if (el) setRoot(el);
  }, []);

  return (
    <m.div
      initial={{ clipPath: 'inset(20% 0% 80% 0%)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, margin: '-20% 0px -20% 0px', root }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </m.div>
  );
}
