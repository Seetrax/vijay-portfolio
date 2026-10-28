import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Projects from "../sections/Projects";
import "../styles/page-layout.css";

export default function ProjectsPage() {
  const { projectId } = useParams();

  useEffect(() => {
    if (!projectId) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      return;
    }

    const timeout = setTimeout(() => {
      const element = document.getElementById(
        `project-${projectId}`
      );

      if (!element) return;

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [projectId]);

  return (
    <main className="page-layout page-layout--projects">
      <Projects />
    </main>
  );
}