import "./Projects.css";

function ProjectMedia({ project }) {
  if (project.mediaSrc && project.mediaType === "video") {
    return (
      <video
        autoPlay
        className="project-media-element"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={project.mediaSrc} />
      </video>
    );
  }

  if (project.mediaSrc && project.mediaType === "image") {
    return (
      <img
        alt={project.name}
        className="project-media-element"
        loading="lazy"
        src={project.mediaSrc}
      />
    );
  }

  return (
    <div className={`project-media-fallback ${project.mediaType || "default"}`}>
      <span>{project.mediaType === "video" ? "Video Preview Ready" : "Image Preview Ready"}</span>
      <div className="project-fallback-orb orb-one"></div>
      <div className="project-fallback-orb orb-two"></div>
      <div className="project-fallback-grid"></div>
    </div>
  );
}

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

        <div className="projects-mosaic">
          {items.map((project, index) => (
            <article
              className={`project-card ${project.size} ${project.featured ? "is-featured" : ""} tone-${project.tone || "neutral"} reveal`}
              data-reveal
              key={`${project.name}-${project.period}`}
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              <a
                className="project-card-link panel"
                href={project.url}
                rel="noreferrer"
                target="_blank"
              >
                <div className="project-media-wrap">
                  <ProjectMedia project={project} />
                  <div className="project-gradient-overlay"></div>

                  <div className="project-topbar">
                    <span className="project-tag">{project.type}</span>
                    <span className="project-period">{project.period}</span>
                  </div>

                  <div className="project-body">
                    <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                    <div className="project-footer">
                      <span className="project-media-chip">
                        {project.mediaType === "video"
                          ? "Autoplay Video"
                          : project.mediaType === "image"
                            ? "Image Preview"
                            : "Project Overview"}
                      </span>
                      <span className="project-cta">View Project</span>
                    </div>
                  </div>
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
