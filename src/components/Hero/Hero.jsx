import { useEffect, useRef } from "react";
import "./Hero.css";
import heroImg from "../../assets/images/profile.png";

function Hero() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) {
      return undefined;
    }

    const parent = slider.parentElement;
    const buttons = parent?.querySelectorAll(".btn");
    const syncSlider = (index) => {
      slider.style.transform = `translateX(${index * 100}%)`;
      buttons?.forEach((button, buttonIndex) => {
        button.classList.toggle("is-highlighted", buttonIndex === index);
      });
    };

    syncSlider(0);

    const handleEnter = () => syncSlider(1);
    const handleLeave = () => syncSlider(0);

    parent?.addEventListener("mouseenter", handleEnter);
    parent?.addEventListener("mouseleave", handleLeave);

    return () => {
      parent?.removeEventListener("mouseenter", handleEnter);
      parent?.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    const updatePatternOffset = () => {
      const offset = Math.min(window.scrollY * 0.12, 40);
      section.style.setProperty("--hero-pattern-offset", `${offset}px`);
    };

    updatePatternOffset();
    window.addEventListener("scroll", updatePatternOffset, { passive: true });

    return () => {
      window.removeEventListener("scroll", updatePatternOffset);
    };
  }, []);

  const handleWorkClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClick = () => {
    window.open(
      "https://internshala.com/student/resume?detail_source=resume_direct",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="hero-section" id="hero" data-nav-theme="dark" ref={sectionRef}>
      <div className="container hero-container">
        <div className="hero-left">
          <h1>
            DESIGNING MODERN <br />
            <span className="gradient-text">WEB EXPERIENCES</span>
          </h1>

          <h3>Full-Stack Developer & WordPress Specialist</h3>

          <p>
            I create responsive and user-friendly websites with a strong focus
            on performance, clean design, and real-world functionality.
          </p>

          <div className="hero-buttons">
            <div className="btn-slider" ref={sliderRef}></div>

            <button className="btn is-highlighted" type="button" onClick={handleWorkClick}>
              View Work
            </button>
            <button className="btn" type="button" onClick={handleResumeClick}>
              Download CV
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual">
            <div className="square square-1"></div>
            <div className="square square-2"></div>
            <div className="square square-3"></div>

            <img src={heroImg} alt="Shubham" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
