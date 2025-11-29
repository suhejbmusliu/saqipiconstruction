// src/sections/WhyChoose.jsx
import { whyChooseUs } from "../data/content";
import Reveal from "../components/animations/Reveal";
import "../styles/sections/whyChoose.css"

const WhyChoose = () => {
  return (
    <section className="why">
      <div className="container">
        <h2 className="why__title">{whyChooseUs.title}</h2>

        <div className="why__grid">
          {whyChooseUs.items.map((item) => (
            <Reveal key={item.title} direction="right">
              <div className="why__item">
                <h3 className="why__item-title">{item.title}</h3>
                <p className="why__item-text">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
