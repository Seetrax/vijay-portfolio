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
          Projects
        </p>

        <h2>
          Things I've
          <br />
          actually built.
        </h2>

       
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