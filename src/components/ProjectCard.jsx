export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__number">
        {project.number}
      </div>

      <div className="project-card__content">
        <header>
          <p className="project-card__subtitle">
            {project.subtitle}
          </p>

          <h3>
            {project.title}
          </h3>
        </header>

        <p className="project-card__description">
          {project.description}
        </p>

        <div className="project-card__details">
          <div>
            <span>Problem</span>
            <p>{project.problem}</p>
          </div>

          <div>
            <span>Approach</span>
            <p>{project.approach}</p>
          </div>

          <div>
            <span>Result</span>
            <p>{project.result}</p>
          </div>
        </div>

        <div className="project-card__footer">
          <div className="project-card__tech">
            {project.technologies.map((tech) => (
              <span key={tech}>
                {tech}
              </span>
            ))}
          </div>

          {project.links && (
            <div className="project-card__links">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}