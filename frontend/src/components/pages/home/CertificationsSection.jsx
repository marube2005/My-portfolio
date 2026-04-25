import React from "react";
import { FaAward } from "react-icons/fa";
import "./styles/CertificationsSection.css";

const certifications = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    url: "#",
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    url: "#",
  },
  {
    id: 3,
    title: "Python for Everybody",
    issuer: "Coursera / University of Michigan",
    year: "2024",
    url: "#",
  },
  {
    id: 4,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    url: "#",
  },
];

const CertificationsSection = () => {
  return (
    <section className="certifications-section section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="certifications-subtitle">
          Courses and credentials that have shaped my technical foundation.
        </p>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <FaAward className="cert-icon" />
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
