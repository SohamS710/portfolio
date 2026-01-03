import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HyperSpeed from "./HyperSpeed";
import BubbleMenu from "./BubbleMenu";
import HamburgerMenu from "./HamburgerMenu";
import Socials from "./Socials";
import Hero from "./Hero";
import Contact from "./Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
              
              {/* BACKGROUND */}
              <HyperSpeed />

              {/* HERO SECTION */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 5 }}>
                <Hero />
              </div>

              {/* HAMBURGER BUTTON */}
              <div style={{ position: "absolute", top: 20, right: 20, zIndex: 9999 }}>
                <HamburgerMenu
                  open={isMenuOpen}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </div>

              {/* BUBBLE MENU */}
              {isMenuOpen && (
                <div style={{ position: "absolute", top: 0, left: 0, zIndex: 10000 }}>
                  <BubbleMenu onClose={() => setIsMenuOpen(false)} />
                </div>
              )}
            </div>
          }
        />

        {/* SOCIALS PAGE */}
        <Route path="/socials" element={<Socials />} />

        {/* CONTACT PAGE ✅ */}
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
