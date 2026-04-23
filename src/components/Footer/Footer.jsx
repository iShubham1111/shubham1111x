import "./Footer.css";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/iShubham1111" },
  { label: "LinkedIn", href: "https://www.linkedin.com/feed/" },
  { label: "Instagram", href: "https://www.instagram.com/shubham1111x/" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-shell">
          <div>
            <h3 className="gradient-text">Shubham</h3>
            <p>Frontend-focused developer building modern WordPress and React experiences.</p>
          </div>

          <div className="footer-links">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
