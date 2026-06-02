import "./Projects.css";

function Projects({ items }) {
  return (
    <section className="section-shell section-dark projects-section" id="projects" data-nav-theme="dark">
      <div className="projects-grid-pattern" aria-hidden="true"></div>
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
              className={`project-card tone-${project.tone || "neutral"} reveal`}
              data-reveal
              key={`${project.name}-${project.period}`}
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              <a
                className="project-card-link"
                href={project.url}
                rel="noreferrer"
                target="_blank"
              >
                <div className="project-card-glow"></div>
                <div className="project-card-head">
                  <span className="project-meta">{project.period}</span>
                  <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="project-card-body">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="project-footer">
                  <span className="project-tag">{project.type}</span>
                  <span className="project-cta">View Project</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
