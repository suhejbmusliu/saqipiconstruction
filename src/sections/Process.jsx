// src/sections/Process.jsx

import { processSteps } from "../data/content";
import Reveal from "../components/animations/Reveal";
import "../styles/sections/process.css"

const Process = () => {
  return (
    <section id="services" className="process">
      <div className="container">
        {/* Header */}
        <Reveal direction="up">
          <div className="process__header">
            <p className="process__eyebrow">
              Udhëzuesi ynë për Zhvillim dhe Realizim
            </p>
            <h2 className="process__title">PROCESI I PUNËS</h2>
          </div>
        </Reveal>

        {/* Steps */}
        <div className="process__row">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.id}
              direction="right"
              delay={index * 0.2}   // 👈 each step 0.2s later
            >
              <div className="process__item-wrapper">
                <div className="process__item">
                  <div className="process__icon-wrapper">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="process__icon"
                    />
                  </div>

                  <h3 className="process__item-title">{step.title}</h3>
                  <p className="process__item-text">{step.description}</p>
                </div>

                {/* Arrow except for last */}
                {index < processSteps.length - 1 && (
                  <div className="process__arrow">
                    <span>➝</span>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
