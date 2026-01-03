import { useState, useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";
import BubbleMenu from "./BubbleMenu";
import "./Contact.css";

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.querySelectorAll(".contact-animate").forEach((el, i) => {
      el.style.animationDelay = `${i * 0.15}s`;
    });
  }, []);

  return (
    <>
      {/* HAMBURGER — SAME AS HOME */}
      <div style={{ position: "fixed", top: 20, right: 20, zIndex: 9999 }}>
        <HamburgerMenu
          open={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* BUBBLE MENU */}
      {isMenuOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, zIndex: 10000 }}>
          <BubbleMenu onClose={() => setIsMenuOpen(false)} />
        </div>
      )}

      <div className="contact-container">
        <h1 className="contact-title contact-animate">Get In Touch</h1>

        <p className="contact-subtitle contact-animate">
          I’m always open to discussing new opportunities, projects, or collaborations.
        </p>

        <div className="contact-cards">
          <a href="mailto:soham@example.com" className="contact-card contact-animate">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>soham@example.com</p>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="contact-card contact-animate"
          >
            <FaGithub className="contact-icon" />
            <h3>GitHub</h3>
            <p>github.com/yourusername</p>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="contact-card contact-animate"
          >
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/yourusername</p>
          </a>
        </div>

        <p className="contact-footer contact-animate">
          Let’s build something meaningful together.
        </p>
      </div>
    </>
  );
}
