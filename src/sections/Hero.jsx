// src/sections/Hero.jsx
import bannerImg from "../assets/img/Bannerimg.jpg";
import "../styles/sections/hero.css";
import SplitText from "../components/animations/SplitText";

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Background image */}
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Content bottom-left */}
      <div className="hero__content container">
        {/* TITLE: KOMPANI [br] MODERNE */}
        <div>
          <SplitText
            text="KOMPANI"
            className="hero__title"
            delay={50}              // ms
            duration={0.45}
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="0px"
            textAlign="right"
          />
          <br />
          <SplitText
            text="MODERNE"
            className="hero__title"
            delay={150}
            duration={0.45}
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="0px"
            textAlign="right"
          />
        </div>

        {/* SUBTITLE */}
        <SplitText
          text="Specialiste në ndërtime të larta, të ulëta dhe projekte infrastrukturore — Që nga vitet 2000."
          className="hero__subtitle"
          delay={320}
          duration={0.4}
          splitType="words"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0}
          rootMargin="0px"
          textAlign="right"
        />

        {/* BUTTON with SplitText inside */}
        <a href="#about" className="hero__btn">
          <SplitText
            text="MË SHUMË"
            className="hero__btn-text"
            delay={520}
            duration={0.35}
            splitType="chars"
            from={{ opacity: 0, y: 15 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="0px"
            textAlign="right"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
