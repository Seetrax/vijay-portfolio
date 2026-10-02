import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

import "../styles/projects.css";

export default function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
    >
      <div className="projects-section__heading">
        <p className="section-kicker">
          SELECTED WORK
        </p>

        <h2>
          Things I've
          <br />
          actually built.
        </h2>

        <p>
          Selected systems and research projects,
          presented around the problem I was trying
          to solve rather than as résumé bullet points.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}