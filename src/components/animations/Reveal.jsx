// src/components/Reveal.jsx
import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, direction = "right", className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(element); // animate once
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${direction} ${
        visible ? "reveal--visible" : ""
      } ${className}`}
      style={{
        transitionDelay: visible ? `${delay}s` : "0s",
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
