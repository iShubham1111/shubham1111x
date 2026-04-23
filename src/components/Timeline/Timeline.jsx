import { useEffect, useRef, useState } from "react";
import "./Timeline.css";

function Timeline({ items }) {
  const containerRef = useRef(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    const updateProgress = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = rect.height + viewportHeight * 0.35;
      const progressed = viewportHeight * 0.72 - rect.top;
      const progress = Math.min(Math.max(progressed / total, 0), 1);
      setLineProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const nodes = Array.from(container.querySelectorAll(".timeline-item"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleItems((current) =>
              current.includes(index) ? current : [...current, index]
            );
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section className="section-shell section-light journey-section" id="journey" data-nav-theme="light">
      <div className="container">
        <div className="section-heading reveal" data-reveal>
          <span className="eyebrow">Journey</span>
          <h2>
            A growing path shaped by consistent learning and real project{" "}
            <span className="gradient-text">MOMENTUM</span>
          </h2>
          <p>
            The timeline becomes active as you scroll, highlighting the stages that built my frontend and WordPress experience.
          </p>
        </div>

        <div className="timeline-shell reveal" data-reveal ref={containerRef}>
          <div className="timeline-line">
            <div
              className="timeline-line-fill"
              style={{ transform: `scaleY(${lineProgress})` }}
            ></div>
          </div>

          <div className="timeline-items">
            {items.map((item, index) => {
              const isVisible = visibleItems.includes(index);

              return (
                <article
                  className={`timeline-item ${isVisible ? "is-visible" : ""}`}
                  data-index={index}
                  key={`${item.year}-${item.title}`}
                >
                  <div className="timeline-dot-wrap">
                    <span className="timeline-dot"></span>
                  </div>

                  <div className="timeline-card panel-light">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
