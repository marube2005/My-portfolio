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
              Computer Science student and software developer with hands-on
              experience building full-stack web and mobile applications using
              React, Flutter, Node.js, FastAPI, and Django. Strong interest in
              integrating AI-powered features to enhance productivity and user
              experience. Completed a software development internship with
              real-world exposure to API integration.
            </p>
            <p>
              Passionate about building scalable, user-focused solutions that
              solve real problems. My development journey began in 2023, and
              since then I\'ve worked on a variety of projects — from community
              empowerment platforms to AI-powered chatbots. Each project has
              pushed me to grow, learn new tools, and adapt to ever-evolving
              technologies.
            </p>
            <p>
              Outside of tech, I value balance — I enjoy reading books,
              watching inspiring podcasts and movies, and staying active in
              church activities. These interests shape the creativity and
              discipline I bring to every line of code I write.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Internship</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
