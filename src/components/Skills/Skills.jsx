import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    accent: "teal",
    items: ["HTML5", "CSS3", "JavaScript", "SCSS", "Bootstrap", "jQuery", "React"],
  },
  {
    title: "Backend & Programming",
    accent: "purple",
    items: ["Python", "Django"],
  },
  {
    title: "Database",
    accent: "light",
    items: ["MySQL"],
  },
  {
    title: "CMS & Tools",
    accent: "teal",
    items: ["WordPress", "Figma", "Shopify"],
  },
  {
    title: "Core Skills",
    accent: "purple",
    items: ["Web Development", "Responsive Design", "UI/UX Design"],
  },
];

function Skills() {
  return (
    <section className="section-shell section-light skills-section" id="skills" data-nav-theme="light">
      <div className="container">
        <div className="section-heading reveal" data-reveal>
          <span className="eyebrow">Skills</span>
          <h2>
            Professional tools and technologies I use to ship clean, dependable{" "}
            <span className="gradient-text">WORK</span>
          </h2>
          <p>
            A focused stack shaped by frontend development including React, WordPress delivery, and practical business website experience.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="skills-intro reveal" data-reveal>
              <div className="skills-note panel-light">
                <span>Built for production</span>
                <h3>Clear frontend structure, responsive implementation, and polished user journeys.</h3>
                <p>
                  I prefer readable systems, performance-minded styling, and flexible layouts that stay clean as content grows.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article
                  className={`skill-card skill-${group.accent} reveal`}
                  data-reveal
                  key={group.title}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="skill-card-head">
                    <h3>{group.title}</h3>
                    <span>{String(group.items.length).padStart(2, "0")}</span>
                  </div>

                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
