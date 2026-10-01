import { useEffect, useState } from "react";
import "../styles/intro.css";

function Intro({ onEnter }) {
  const [opening, setOpening] = useState(false);
  const [origin, setOrigin] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [cursor, setCursor] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleEnter = (event) => {
    if (opening) return;

    setOrigin({
      x: event.clientX,
      y: event.clientY,
    });

    setOpening(true);

    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <div
      className={`intro ${opening ? "intro--opening" : ""}`}
      onClick={handleEnter}
    >
      <div className="intro__content">
        <p className="intro__eyebrow">
          PORTFOLIO / 2026
        </p>

        <h1 className="intro__name">
          Vijay
          <span>Ramakrishnan</span>
        </h1>

        <p className="intro__description">
          Software Engineering · Artificial Intelligence · Robotics
        </p>

        <p className="intro__hint">
          Click anywhere to enter
        </p>
      </div>

      <div
        className="intro__cursor"
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
        }}
      />

      <div
        className="intro__reveal"
        style={{
          left: `${origin.x}px`,
          top: `${origin.y}px`,
        }}
      />
    </div>
  );
}

export default Intro;