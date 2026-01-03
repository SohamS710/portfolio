import React, { useState } from "react";
import LiquidEther from "./LiquidEther";
import HamburgerMenu from "./HamburgerMenu";
import BubbleMenu from "./BubbleMenu";
import Aurora from "./Aurora";   // << ONLY ADDITION
import "./Socials.css";

const PORTALS = [
  { id: "linkedin", label: "LinkedIn", href: "#", colors: ["#2D9CFF", "#004BFF", "#6EC6FF"] },
  { id: "github", label: "GitHub", href: "#", colors: ["#A855F7", "#7C3AED", "#C084FC"] },
  { id: "instagram", label: "Instagram", href: "#", colors: ["#FF2EB3", "#FF6FD8", "#FFA0EF"] },
  { id: "email", label: "Email", href: "#", colors: ["#5AA0FF", "#1F4FFF", "#0A0F2A"] },
  { id: "resume", label: "Resume", href: "#", colors: ["#00F5D4", "#00C4B4", "#009B87"] },
  { id: "leetcode", label: "LeetCode", href: "#", colors: ["#FFB72B", "#FF8F00", "#6B3A00"] },
];

function PortalCard({ colors, href, label }) {
  return (
    <a href={href} className="portal-card">
      <div className="portal-liquid">
        <LiquidEther
          colors={colors}
          autoDemo={true}
          mouseForce={14}
          resolution={0.4}
        />
      </div>

      <div className="portal-label">
        <span>{label}</span>
      </div>
    </a>
  );
}

export default function Socials() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="socials-page">

      {/* FULLSCREEN AURORA — NOTHING ELSE CHANGED */}
      <div className="bg-aurora">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          amplitude={1.0}
          blend={0.55}
          speed={0.5}
        />
      </div>

      {/* MENU */}
      <div className="socials-hamburger">
        <HamburgerMenu onClick={() => setIsMenuOpen(true)} />
      </div>

      {isMenuOpen && <BubbleMenu onClose={() => setIsMenuOpen(false)} />}

      {/* CONTENT GRID — UNTOUCHED */}
      <div className="socials-inner">
        <div className="portal-column left">
          {PORTALS.slice(0, 3).map((p) => (
            <PortalCard key={p.id} {...p} />
          ))}
        </div>

        <div className="socials-center">
          <h1 className="socials-title">My Socials</h1>
          <p className="socials-sub">Let's connect : )</p>
        </div>

        <div className="portal-column right">
          {PORTALS.slice(3).map((p) => (
            <PortalCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </main>
  );
}
