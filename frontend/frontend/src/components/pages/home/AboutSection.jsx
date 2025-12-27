import React from "react";
import "./styles/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
          
            <p>
              My development journey began in 2023, and since then, I've worked
              on a variety of projects — from small business websites to more
              complex platforms. Each project has pushed me to grow, learn new
              tools, and adapt to ever-evolving technologies. I'm continuously
              improving my craft, driven by curiosity and a genuine love for
              creating useful things.
            </p>
            <p>
              Outside of tech, I’m someone who values balance. I love reading
              books, watching inspiring podcasts and movies, and staying active
              in church activities. These interests not only recharge me but
              also shape the creativity and discipline I bring to every line of
              code I write.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
