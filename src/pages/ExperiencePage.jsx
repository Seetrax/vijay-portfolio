import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Experience from "../sections/Experience";
import "../styles/page-layout.css";

export default function ExperiencePage() {
  const { experienceId } = useParams();

  useEffect(() => {
    if (!experienceId) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      return;
    }

    const timeout = setTimeout(() => {
      const element = document.getElementById(
        `experience-${experienceId}`
      );

      if (!element) return;

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [experienceId]);

  return (
    <main className="page-layout page-layout--experience">
      <Experience />
    </main>
  );
}