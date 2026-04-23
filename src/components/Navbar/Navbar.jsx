import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ links, activeSection, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigate = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`site-navbar ${theme} ${isScrolled ? "is-scrolled" : ""}`}
      >
        <div className="container">
          <div className="navbar-shell">
            <button
              className="brand-button"
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Go to top"
            >
              <span className="brand-text gradient-text">Shubham</span>
            </button>

            <nav className="desktop-nav" aria-label="Primary navigation">
              {links.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  className={activeSection === link.id ? "is-active" : ""}
                  onClick={() => handleNavigate(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              className={`nav-toggle ${isOpen ? "is-open" : ""}`}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside className={`mobile-nav-panel ${isOpen ? "is-open" : ""}`}>
        <div className="mobile-nav-top">
          <span className="gradient-text">Navigation</span>
          <button
            type="button"
            className="mobile-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <div className="mobile-nav-links">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              className={activeSection === link.id ? "is-active" : ""}
              onClick={() => handleNavigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="mobile-nav-footer">
          <p>Frontend-focused developer crafting premium WordPress and React websites.</p>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
