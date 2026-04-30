import { useEffect, useRef } from "react";
import "./Projects.css";

function Projects({ items }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    const updatePatternOffset = () => {
      const offset = Math.min(window.scrollY * -0.08, 0);
      section.style.setProperty("--projects-pattern-offset", `${offset}px`);
    };

    updatePatternOffset();
    window.addEventListener("scroll", updatePatternOffset, { passive: true });

    return () => {
      window.removeEventListener("scroll", updatePatternOffset);
    };
  }, []);

  return (
    <section
      className="section-shell section-dark projects-section"
      id="projects"
      data-nav-theme="dark"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-heading reveal" data-reveal>
          <span className="eyebrow">Projects</span>
          <h2>
            Selected work across React-based frontend builds, WordPress, business websites, and portfolio{" "}
            <span className="gradient-text">PROJECTS</span>
          </h2>
          <p>
            A structured set of projects focused on usability, responsiveness, conversion flow, and clean visual execution.
          </p>
        </div>

        <div className="projects-grid">
          {items.map((project, index) => (
            <article
              className={`project-card ${project.featured ? "is-featured" : ""} ${project.tall ? "is-tall" : ""} reveal`}
              data-reveal
              key={`${project.name}-${project.period}`}
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              <div className="project-card-inner panel">
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-period">{project.period}</span>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <span className="project-stack">{project.stack}</span>
                <a
                  className="project-link"
                  href={project.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
