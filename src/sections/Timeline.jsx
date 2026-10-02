import { useEffect, useRef, useState } from "react";
import "../styles/timeline.css";

export default function Timeline() {
  const timelineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const events = [
    {
      id: "iit",
      title: "IIT Palakkad",
      subtitle: "B.Tech Computer Science",
      dates: "2021 — 2025",
      position: 2,
      side: "bottom",
      type: "education",
      target: "education-iit",
      delay: "0.2s",
    },

    {
  id: "tcs",
  title: "TCS Research",
  subtitle: "Software Engineer Intern",
  dates: "Jun — Aug 2024",
  position: 58,
  side: "top",
  type: "experience",
  target: "experience-tcs-research",
  delay: "0.45s",
},

    {
      id: "gatech",
      title: "Georgia Tech",
      subtitle: "M.S. Computer Science",
      dates: "2025 — Present",
      position: 74,
      side: "bottom",
      type: "education",
      target: "education-gatech",
      delay: "0.65s",
    },

    {
      id: "magic-lemp",
      title: "Magic LEMP",
      subtitle: "AI Engineer Intern",
      dates: "Dec 2025 — Jun 2026",
      position: 90,
      side: "top",
      type: "experience",
      target: "experience-magic-lemp",
      delay: "0.85s",
    },
  ];

  useEffect(() => {
    const element = timelineRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (target) => {
    const section = document.getElementById(target);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div
      ref={timelineRef}
      className={`mini-timeline ${
        visible ? "mini-timeline--visible" : ""
      }`}
    >
      <div className="mini-timeline__scroll">
        <div className="mini-timeline__inner">

          <div className="mini-timeline__years">
            <span style={{ left: "0%" }}>2021</span>
            <span style={{ left: "20%" }}>2022</span>
            <span style={{ left: "40%" }}>2023</span>
            <span style={{ left: "60%" }}>2024</span>
            <span style={{ left: "80%" }}>2025</span>
            <span style={{ left: "100%" }}>2026</span>
          </div>

          <div className="mini-timeline__line-base" />
          <div className="mini-timeline__line-progress" />

          {events.map((event) => (
            <button
              type="button"
              key={event.id}
              className={`
                mini-timeline__event
                mini-timeline__event--${event.side}
              `}
              style={{
                left: `${event.position}%`,
                "--event-delay": event.delay,
              }}
              onClick={() => scrollToSection(event.target)}
              aria-label={`Go to ${event.title}`}
            >
              <span
                className={`
                  mini-timeline__dot
                  mini-timeline__dot--${event.type}
                `}
              />

              <span className="mini-timeline__event-content">
                <strong>{event.title}</strong>

                <span className="mini-timeline__subtitle">
                  {event.subtitle}
                </span>

                <small>{event.dates}</small>
              </span>
            </button>
          ))}

        </div>
      </div>
    </div>
  );
}