import "./Contact.css";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/iShubham1111",
    note: "Code, experiments, and project history",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/",
    note: "Professional profile and network",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shubham1111x/",
    note: "Personal updates and visual moments",
  },
  {
    label: "Resume",
    href: "https://internshala.com/student/resume?detail_source=resume_direct",
    note: "Detailed experience, training, and profile",
  },
];

function Contact() {
  return (
    <section className="section-shell section-gradient contact-section" id="contact" data-nav-theme="gradient">
      <div className="container">
        <div className="section-heading reveal" data-reveal>
          <span className="eyebrow">Contact</span>
          <h2>
            Let&apos;s build something modern, responsive, and ready for real{" "}
            <span className="gradient-text">USERS</span>
          </h2>
          <p>
            Reach out for portfolio websites, WordPress work, landing pages, or frontend development projects.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="contact-card panel reveal" data-reveal>
              <span className="contact-label"> Contact</span>
              <a className="contact-value" href="mailto:shubham333701@gmail.com">
                shubham333701@gmail.com
              </a>
              <a className="contact-value" href="tel:9250333701">
                9250333701
              </a>
              <p>
                Available for business websites, portfolio builds, frontend work,
                and WordPress projects with a cleaner, more premium user experience.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="social-grid">
              {socials.map((item, index) => (
                <a
                  className="social-card reveal panel"
                  data-reveal
                  href={item.href}
                  key={item.label}
                  rel="noreferrer"
                  target="_blank"
                  style={{ transitionDelay: `${index * 0.07}s` }}
                >
                  <div>
                    <span>{item.label}</span>
                    <p>{item.note}</p>
                  </div>
                  <strong>Open</strong>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
