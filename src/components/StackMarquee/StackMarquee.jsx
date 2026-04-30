import "./StackMarquee.css";

const stackItems = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "React",
  "WordPress",
  "Figma",
  "Python",
  "Bootstrap",
  "MySQL",
  "Django",
];

function MarqueeRow({ items, reverse = false }) {
  const rowItems = [...items, ...items];

  return (
    <div className={`stack-marquee-row ${reverse ? "is-reverse" : ""}`}>
      <div className="stack-marquee-track">
        <div className="stack-marquee-group">
          {rowItems.map((item, index) => (
            <span
              className={`stack-chip ${index % 3 === 0 ? "is-italic" : ""} ${index % 5 === 0 ? "is-highlighted" : ""}`}
              key={`${item}-${reverse ? "reverse" : "forward"}-${index}`}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="stack-marquee-group" aria-hidden="true">
          {rowItems.map((item, index) => (
            <span
              className={`stack-chip ${index % 4 === 0 ? "is-italic" : ""} ${index % 6 === 0 ? "is-highlighted" : ""}`}
              key={`${item}-${reverse ? "reverse-duplicate" : "forward-duplicate"}-${index}`}
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
