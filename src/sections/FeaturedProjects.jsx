// src/sections/FeaturedProjects.jsx
import { featuredProjects } from "../data/content";
import Reveal from "../components/animations/Reveal";
import "../styles/sections/featuredProject.css";

const FeaturedProjects = () => {
  const { title, logos } = featuredProjects;

  return (
    <section className="featured">
      <div className="container">
        {/* Title with reveal */}
        <Reveal direction="up">
          <h2 className="featured__title">{title}</h2>
        </Reveal>

        {/* Logos grid */}
        <div className="featured__logos">
          {logos.map((logo) => (
            <Reveal key={logo.id} direction="up">
              <div className="featured__logo-wrapper">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="featured__logo"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
