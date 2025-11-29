// src/sections/About.jsx
import { aboutContent } from "../data/content";
import Reveal from "../components/animations/Reveal";
import "../styles/sections/about.css";

const About = () => {
  const { title, paragraphs, highlight, image } = aboutContent;

  return (
    <section id="about" className="about">

      <div className="container about__inner">

        {/* TEXT (reveal from RIGHT) */}
        <Reveal direction="right">
          <div className="about__text">
            <h2 className="about__title">{title}</h2>

            <div className="about__body">
              {paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            <p className="about__highlight">{highlight}</p>
          </div>
        </Reveal>

        {/* IMAGE (reveal from LEFT) */}
        <Reveal direction="left">
          <div className="about__image-wrapper">
            <img
              src={image}
              alt="Rreth kompanisë Saqipi Construction"
              className="about__image"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default About;
