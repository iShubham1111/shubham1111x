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

function StackMarquee() {
  const repeatedItems = [...stackItems, ...stackItems];

  return (
    <section className="stack-marquee-section section-dark">
      <div className="container">
        <div className="stack-marquee-shell">
          <div className="stack-marquee-fade">
            <div className="stack-marquee-track">
              <div className="stack-marquee-group">
                {repeatedItems.map((item, index) => (
                  <span
                    className={`stack-chip ${index % 3 === 0 ? "is-italic" : ""}`}
                    key={`${item}-${index}`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="stack-marquee-group" aria-hidden="true">
                {repeatedItems.map((item, index) => (
                  <span
                    className={`stack-chip ${index % 4 === 0 ? "is-italic" : ""}`}
                    key={`${item}-duplicate-${index}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackMarquee;
