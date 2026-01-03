import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./BubbleMenu.css";

export default function BubbleMenu({ onClose }) {
  const overlayRef = useRef(null);
  const bubblesRef = useRef([]);
  const labelRefs = useRef([]);
  const navigate = useNavigate();

  const DEFAULT_ITEMS = [
    { label: "HOME", path: "/", rotation: -8, hoverStyles: { bgColor: "#3b82f6", textColor: "#111" }},
    { label: "ABOUT", path: null, rotation: 6, hoverStyles: { bgColor: "#10b981", textColor: "#111" }},
    { label: "PROJECTS", path: null, rotation: -5, hoverStyles: { bgColor: "#f59e0b", textColor: "#111" }},
    { label: "SOCIALS", path: "/socials", rotation: 5, hoverStyles: { bgColor: "#ef4444", textColor: "#111" }},
    { label: "CONTACT", path: "/contact", rotation: -7, hoverStyles: { bgColor: "#8b5cf6", textColor: "#111" }},
  ];

  /* ---------------------------------------------------------
      OPEN ANIMATION
  --------------------------------------------------------- */
  useEffect(() => {
    const overlay = overlayRef.current;
    const pills = bubblesRef.current;
    const labels = labelRefs.current;

    gsap.set(overlay, { opacity: 0 });
    gsap.to(overlay, { opacity: 1, duration: 0.3 });

    gsap.set(pills, { scale: 0 });
    gsap.set(labels, { y: 20, autoAlpha: 0 });

    pills.forEach((pill, i) => {
      gsap.timeline()
        .to(pill, {
          scale: 1,
          duration: 0.45,
          ease: "back.out(1.6)",
          delay: i * 0.1,
        })
        .to(
          labels[i],
          { y: 0, autoAlpha: 1, duration: 0.35 },
          "-=0.25"
        );
    });
  }, []);

  /* ---------------------------------------------------------
      CLOSE MENU WITH OPTIONAL NAVIGATION
  --------------------------------------------------------- */
  const closeMenu = useCallback(
    (path) => {
      const overlay = overlayRef.current;
      const pills = bubblesRef.current;
      const labels = labelRefs.current;

      gsap
        .timeline({
          onComplete: () => {
            onClose && onClose();
            if (path) navigate(path);
          },
        })
        .to(labels, {
          y: 20,
          autoAlpha: 0,
          duration: 0.2,
          stagger: 0.05,
        })
        .to(
          pills,
          {
            scale: 0,
            duration: 0.25,
            stagger: 0.05,
          },
          "-=0.2"
        )
        .to(
          overlay,
          { opacity: 0, duration: 0.2 },
          "-=0.15"
        );
    },
    [navigate, onClose]
  );

  /* ---------------------------------------------------------
      ESC KEY CLOSE
  --------------------------------------------------------- */
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeMenu]);

  /* ---------------------------------------------------------
      JSX
  --------------------------------------------------------- */
  return (
    <div
      ref={overlayRef}
      className="bubble-menu-items"
      onClick={() => closeMenu()}
    >
      <ul className="pill-list" onClick={(e) => e.stopPropagation()}>
        {DEFAULT_ITEMS.map((item, idx) => (
          <li key={idx} className="pill-col">
            <button
              className="pill-link"
              ref={(el) => (bubblesRef.current[idx] = el)}
              onClick={() => closeMenu(item.path)}
              style={{
                "--item-rot": `${item.rotation}deg`,
                "--hover-bg": item.hoverStyles.bgColor,
                "--hover-color": item.hoverStyles.textColor,
              }}
            >
              <span
                className="pill-label"
                ref={(el) => (labelRefs.current[idx] = el)}
              >
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
