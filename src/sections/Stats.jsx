// src/sections/Stats.jsx
import { useEffect, useRef, useState } from "react";
import { statsSection } from "../data/content";
import "../styles/sections/stats.css"

const Stats = () => {
  const { background, items } = statsSection;

  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState(items.map(() => 0));

  // Observe when section enters the viewport
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect(); // run once
          }
        });
      },
      {
        threshold: 0.4, // 40% of section visible
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Animate numbers when hasStarted becomes true
  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1500; // ms
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);

      setCounts(
        items.map((item) => Math.floor(item.value * progress))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, items]);

  return (
    <section ref={sectionRef} className="stats">
      {/* background image */}
      <div
        className="stats__bg"
        style={{ backgroundImage: `url(${background})` }}
      />
      {/* dark overlay */}
      <div className="stats__overlay" />

      <div className="container stats__inner">
        {items.map((item, index) => (
          <div key={item.id} className="stats__item">
            <div className="stats__value">
              {counts[index]}
              {item.suffix}
            </div>
            <div className="stats__label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
