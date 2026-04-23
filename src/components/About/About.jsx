import "./About.css";

function About() {
  return (
    <section className="section-shell about-section" id="about" data-nav-theme="gradient">
      <div className="container">
        <div className="section-heading reveal" data-reveal>
          <span className="eyebrow">About</span>
          <h2>
            Frontend precision with real-world <span className="gradient-text">WordPress delivery</span>
          </h2>
          <p>
            I focus on clean UI, structured layouts, and high-performance builds that feel polished on every screen.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="about-story reveal panel" data-reveal>
              <p>
                I&apos;m Shubham Kushwaha, a frontend-focused developer with strong
                experience in WordPress development.
              </p>
              <p>
                I specialize in building responsive, high-performance, and
                user-friendly websites. I have worked on real-world projects
                including business websites, sales funnels, and content
                platforms.
              </p>
              <p>
                I focus on clean UI, structured layouts, and performance
                optimization.
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
