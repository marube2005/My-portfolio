import React from "react";
import "./styles/SkillsSection.css";

const skills = {
  Frontend: [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Flutter",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js & Express",
    "Python & FastAPI",
    "Django",
    "Spring Boot",
  ],
  "Databases & Cloud": [
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "AWS",
  ],
  "Tools & DevOps": [
    "Git & GitHub",
    "Docker",
    "Figma",
    "VS Code",
  ],
};

const SkillsSection = () => {
  return (
    <section className="skills-section section">
      <div className="container">
        <h2 className="section-title">Skills &amp; Technologies</h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <ul className="skills-list">
                {items.map((skill) => (
                  <li key={skill} className="skill-badge">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
