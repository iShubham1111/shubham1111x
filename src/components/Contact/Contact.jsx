import "./Contact.css";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/iShubham1111",
    icon: "github",
    position: "pos-one",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/",
    icon: "linkedin",
    position: "pos-two",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shubham1111x/",
    icon: "instagram",
    position: "pos-three",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919250333701",
    icon: "whatsapp",
    position: "pos-four",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Shubham1111x",
    icon: "youtube",
    position: "pos-five",
  },
];

const quickLinks = [
  { label: "GitHub", href: "https://github.com/iShubham1111" },
  { label: "LinkedIn", href: "https://www.linkedin.com/feed/" },
  { label: "Instagram", href: "https://www.instagram.com/shubham1111x/" },
  { label: "YouTube", href: "https://www.youtube.com/@Shubham1111x" },
  {
    label: "Internshala Resume",
    href: "https://internshala.com/student/resume?detail_source=resume_direct",
  },
];

function SocialIcon({ icon }) {
  switch (icon) {
    case "github":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.43.21 2.49.11 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.67.94.67 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.3 3.9 3.3 5c0 1.08.85 1.97 1.93 1.97h.02C6.35 6.97 7.2 6.08 7.2 5 7.18 3.9 6.35 3 5.25 3ZM20.7 12.83c0-3.08-1.64-4.51-3.83-4.51-1.77 0-2.56.98-3 1.66V8.5h-3.38c.04.98 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.69.89-1.4 1.92-1.4 1.36 0 1.9 1.06 1.9 2.61V20H20.7v-7.17Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.75 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 6.85A5.15 5.15 0 1 1 6.85 12 5.15 5.15 0 0 1 12 6.85Zm0 1.8A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.58 0 .3 5.27.3 11.76c0 2.07.54 4.09 1.57 5.87L0 24l6.55-1.81a11.7 11.7 0 0 0 5.51 1.4h.01c6.48 0 11.76-5.28 11.76-11.76 0-3.14-1.22-6.09-3.31-8.35Zm-8.46 18.1h-.01a9.8 9.8 0 0 1-4.98-1.37l-.36-.21-3.89 1.08 1.04-3.79-.23-.39a9.78 9.78 0 0 1-1.49-5.14C2.14 6.38 6.39 2.13 11.77 2.13c2.61 0 5.07 1.02 6.92 2.86a9.72 9.72 0 0 1 2.87 6.92c0 5.39-4.39 9.67-9.5 9.67Zm5.3-7.22c-.29-.15-1.74-.86-2.01-.96-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07a8.03 8.03 0 0 1-2.36-1.46 8.86 8.86 0 0 1-1.64-2.03c-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.04 2.82 1.19 3.02.15.19 2.04 3.2 5.04 4.37.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.74-.71 1.99-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.19-.56-.34Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.39.48A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.84.48 9.39.48 9.39.48s7.55 0 9.39-.48a3 3 0 0 0 2.11-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.84 12 9.6 15.6Z" />
        </svg>
      );
    default:
      return null;
  }
}

function Contact() {
  return (
    <section className="section-shell section-gradient contact-section" id="contact" data-nav-theme="gradient">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="social-hub-visual panel reveal" data-reveal>
              <div className="social-stage">
                <div className="social-ring ring-one"></div>
                <div className="social-ring ring-two"></div>
                <div className="social-core">
                  <div className="social-core-glow"></div>
                  <span>Connect</span>
                </div>

                {socials.map((item, index) => (
                  <a
                    className={`floating-social ${item.position}`}
                    href={item.href}
                    key={item.label}
                    rel="noreferrer"
                    style={{ animationDelay: `${index * 0.35}s` }}
                    target="_blank"
                    title={item.label}
                  >
                    <SocialIcon icon={item.icon} />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-hub-card reveal" data-reveal>
              <span className="contact-label">Contact</span>
              <h2>
                A dynamic social hub built for premium digital{" "}
                <span className="gradient-text">CONNECTIONS</span>
              </h2>
              <p>
                Reach out for portfolio websites, WordPress builds, frontend projects,
                landing pages, or collaboration opportunities that need a polished and
                modern web presence.
              </p>

              <div className="contact-direct-links">
                <a className="contact-value" href="mailto:shubham333701@gmail.com">
                  shubham333701@gmail.com
                </a>
                <a className="contact-value" href="tel:9250333701">
                  9250333701
                </a>
              </div>

              <div className="contact-actions">
                <a
                  className="contact-cta primary"
                  href="https://internshala.com/student/resume?detail_source=resume_direct"
                  rel="noreferrer"
                  target="_blank"
                >
                  View Resume
                </a>
                <a
                  className="contact-cta secondary"
                  href="https://wa.me/919250333701"
                  rel="noreferrer"
                  target="_blank"
                >
                  Message on WhatsApp
                </a>
              </div>

              <div className="contact-link-grid">
                {quickLinks.map((item) => (
                  <a href={item.href} key={item.label} rel="noreferrer" target="_blank">
                    <span>{item.label}</span>
                    <small>Open</small>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
