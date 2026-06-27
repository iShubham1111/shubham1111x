import "./StackMarquee.css";

const stackItems = [
  "React",
  "WordPress",
  "Bootstrap",
  "PHP",
  "JavaScript",
  "Python",
  "Django",
  "MySQL",
  "HTML",
  "CSS",
  "jQuery",
  "REST API",
  "WooCommerce",
  "Shopify",
  "Figma",
  "Canva",
];

function MarqueeItems({ items, duplicate = false }) {
  return (
    <div className="stack-marquee-group" aria-hidden={duplicate ? "true" : undefined}>
      {items.map((item) => (
        <span className="stack-marquee-item" key={`${item}-${duplicate ? "duplicate" : "base"}`}>
          <span className="stack-marquee-text">{item}</span>
          <span className="stack-marquee-separator">✦</span>
        </span>
      ))}
    </div>
  );
}

function StackMarquee() {
  return (
    <section className="stack-marquee-section section-dark">
      <div className="container">
        <div className="stack-marquee-shell">
          <div className="stack-marquee-strip">
            <div className="stack-marquee-track">
              <MarqueeItems items={stackItems} />
              <MarqueeItems items={stackItems} duplicate />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackMarquee;
