import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      
      {/* MAIN HEADING */}
      <h1 className="hero-title fade-in">Hi, Myself Soham</h1>

      {/* SUBTITLE */}
      <h2 className="hero-subtitle drift-up">
        Web Developer • Frontend Developer • Software Engineer
      </h2>

      {/* TAGLINE (4th one) */}
      <p className="hero-tagline fade-in">
        I focus on building interfaces that are clean, intuitive, and built to scale.
      </p>

      {/* DESCRIPTION PARAGRAPH 1 */}
      <p className="hero-desc stagger-item">
        I design and develop modern, responsive, and high-performance web interfaces.
        I enjoy turning ideas into real, functional products — combining clean design,
        smooth interactions, and solid engineering principles.
      </p>

      {/* DESCRIPTION PARAGRAPH 2 */}
      <p className="hero-desc stagger-item">
        Currently focused on improving my skills by building real-world projects,
        experimenting with new tools, and exploring deeper concepts in frontend
        development and modern web technologies.
      </p>

      {/* TECH STACK PILLS */}
      <div className="tech-row fade-soft">
        <span className="tech-pill">React</span>
        <span className="tech-pill">JavaScript</span>
        <span className="tech-pill">HTML</span>
        <span className="tech-pill">CSS</span>
        <span className="tech-pill">C</span>
        <span className="tech-pill">C++</span>
      </div>

      {/* MISSION STATEMENT */}
      <p className="hero-mission fade-in-late">
        My goal is simple: to build meaningful, accessible, and well-crafted digital experiences.
      </p>

      {/* CTA BUTTON */}
      <a href="/Soham_Resume.pdf" className="hero-cta scale-up">
        Download Resume
      </a>

    </div>
  );
}
