import "./About.css";

function About() {
  return (
    <section className="section-shell about-section" id="about" data-nav-theme="gradient">
      <div className="container">
        <div className="section-heading reveal" data-reveal>
          <span className="eyebrow">About</span>
          <h2>
            Full-stack development with{" "}
            <span className="about-tech-accent">React</span> and{" "}
            <span className="about-tech-accent">WordPress</span> expertise
          </h2>
          <p>
            I focus on clean UI, structured layouts, and high-performance builds that feel polished on every screen.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="about-story reveal panel" data-reveal>
              <p>
                I&apos;m Shubham Kushwaha, a full-stack web developer specializing in
                React, WordPress, CMS platforms, and custom Bootstrap theme
                development.
              </p>
              <p>
                I build responsive, high-performance websites including business
                websites, eCommerce stores, news portals, article platforms,
                e-paper systems, sales funnels, portfolio websites, and custom
                CMS solutions with a strong focus on clean architecture and user
                experience.
              </p>
              <p>
                My approach combines modern UI design, scalable development,
                performance optimization, and custom-coded solutions to create
                premium digital experiences.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="about-highlights reveal" data-reveal>
              <div className="highlight-card panel">
                <span>Focus</span>
                <strong>Responsive interfaces that balance clarity, speed, and premium presentation.</strong>
              </div>
              <div className="highlight-card panel">
                <span>Experience</span>
                <strong>Business sites, sales funnels, editorial platforms, portfolios, and modern frontend builds.</strong>
              </div>
              <div className="highlight-card panel">
                <span>Approach</span>
                <strong>Less noise, stronger hierarchy, smooth UX, and layouts that feel reliable in production.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
