import React from "react";
import "./styles/SkillsSection.css";

const skills = {
  "Frontend & Frameworks": [
    "Flutter",
    "JavaScript",
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
  ],
  "Backend & Databases": [
    "Node.js (Express)",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "MongoDB",
  ],
  "Tools & Platforms": [
    "Git",
    "Android Studio",
    "VS Code",
    "Vercel",
    "Postman",
  ],
  "Concepts": [
    "RESTful APIs",
    "Authentication",
    "Agile Methodologies",
    "AI Integration",
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
