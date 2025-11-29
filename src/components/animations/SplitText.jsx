// src/components/SplitText.jsx
import { useEffect, useRef, useState } from "react";

const SplitText = ({
  text,
  className = "",
  delay = 0,              // base delay in ms
  duration = 0.6,         // seconds
  ease = "ease-out",      // CSS timing
  splitType = "chars",    // "chars" | "words"
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0,
  rootMargin = "0px",
  textAlign = "left",
  trigger = "viewport",   // "viewport" | "mount"
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(trigger === "mount");
  const [done, setDone] = useState(false);

  const resolvedEase = ["ease", "ease-in", "ease-out", "ease-in-out"].includes(
    ease
  )
    ? ease
    : "ease-out";

  useEffect(() => {
    // If trigger is "mount", we don't use IntersectionObserver at all
    if (trigger === "mount") {
      setVisible(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, trigger]);

  const parts =
    splitType === "words" ? text.split(" ") : text.split("");

  const mapTransform = (yValue) =>
    typeof yValue === "number" ? `translateY(${yValue}px)` : "none";

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ display: "inline-block", textAlign }}
    >
      {parts.map((part, index) => {
        const stagger = 0.02 * index;        // small stagger
        const baseDelaySec = delay / 1000;

        const style = {
          display: "inline-block",
          whiteSpace: "pre",
          transition: `transform ${duration}s ${resolvedEase}, opacity ${duration}s ${resolvedEase}`,
          transitionDelay: visible ? `${baseDelaySec + stagger}s` : "0s",
          opacity: visible ? (to.opacity ?? 1) : (from.opacity ?? 0),
          transform: visible
            ? mapTransform(to.y ?? 0)
            : mapTransform(from.y ?? 0),
          willChange: "transform, opacity",
        };

        const handleEnd =
          index === parts.length - 1
            ? () => {
                if (!done && typeof onLetterAnimationComplete === "function") {
                  setDone(true);
                  onLetterAnimationComplete();
                }
              }
            : undefined;

        return (
          <span key={index} style={style} onTransitionEnd={handleEnd}>
            {part}
            {splitType === "words" ? " " : ""}
          </span>
        );
      })}
    </div>
  );
};

export default SplitText;
