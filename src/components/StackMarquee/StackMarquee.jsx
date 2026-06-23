import "./StackMarquee.css";

const stackItems = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "React",
  "WordPress",
  "Shopify",
  "Bootstrap",
  "PHP",
  "Python",
  "MySQL",
  "Django",
  "Figma",
  "Canva",
];

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className={`stack-marquee-row ${reverse ? "is-reverse" : ""}`}>
      <div className="stack-marquee-track">
        <div className="stack-marquee-group">
          {items.map((item) => (
            <span
              className="stack-chip"
              key={`${item}-${reverse ? "reverse" : "forward"}`}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="stack-marquee-group" aria-hidden="true">
          {items.map((item) => (
            <span
              className="stack-chip"
              key={`${item}-${reverse ? "reverse-duplicate" : "forward-duplicate"}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StackMarquee() {
  return (
    <section className="stack-marquee-section section-dark">
      <div className="container">
        <div className="stack-marquee-shell">
          <div className="stack-marquee-fade">
            <MarqueeRow items={stackItems} />
            <MarqueeRow items={stackItems} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackMarquee;
