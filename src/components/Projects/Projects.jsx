import "./Projects.css";

function Projects({ items }) {
  return (
    <section className="section-shell section-dark projects-section" id="projects" data-nav-theme="dark">
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

        <div className="projects-list">
          {items.map((project, index) => (
            <article
              className={`project-block ${index % 2 === 0 ? "project-left" : "project-right"} reveal`}
              data-reveal
              key={`${project.name}-${project.period}`}
            >
              <div className="project-meta panel">
                <span>{project.period}</span>
                <strong>{project.type}</strong>
              </div>

              <div className="project-content panel">
                <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <a
                    className="primary-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
