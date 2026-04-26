import "./Education.css";

const educationItems = [
  {
    title: "National Inter College",
    subtitle: "High School (10th)",
    meta: "Year: 2017",
  },
  {
    title: "National Inter College",
    subtitle: "Intermediate (12th)",
    meta: "Year: 2019",
  },
  {
    title: "Bachelor of Arts (Geography, Economics & Psychology)",
    subtitle: "Veer Bahadur Singh Purvanchal University, Jaunpur",
    meta: "Duration: 2019 - 2022",
  },
];

const certificationItems = [
  {
    title: "Diploma in Full-Stack Web Development",
    subtitle: "TGC Animation and Multimedia, Delhi",
    meta: "Duration: 2024 - July 2025",
  },
  {
    title: "Tally Prime",
    subtitle: "Data Smart Institute, Varanasi",
    meta: "Completed",
  },
  {
    title: "ADCA",
    subtitle: "ICI Institute, Varanasi",
    meta: "Completed: 2023",
  },
];

function Education() {
  return (
    <section
      className="section-shell section-dark education-section"
      id="education"
      data-nav-theme="dark"
    >
      <div className="container">
        <div className="section-heading reveal" data-reveal>
          <span className="eyebrow">Education & Certifications</span>
          <h2>Academic foundation and certifications that support my development journey</h2>
          <p>
            A clean overview of my education and certification path, presented with
            the same premium dark visual language as the rest of the portfolio.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="education-group reveal" data-reveal>
              <div className="education-group-head">
                <span className="education-pill education-pill-teal">Education</span>
              </div>

              <div className="education-stack">
                {educationItems.map((item, index) => (
                  <article className="education-item" key={`${item.title}-${index}`}>
                    <span className="education-marker"></span>
                    <div className="education-copy">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                    <strong>{item.meta}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="education-group reveal" data-reveal>
              <div className="education-group-head">
                <span className="education-pill education-pill-purple">Certifications</span>
              </div>

              <div className="education-stack">
                {certificationItems.map((item, index) => (
                  <article className="education-item" key={`${item.title}-${index}`}>
                    <span className="education-marker"></span>
                    <div className="education-copy">
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                    <strong>{item.meta}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
