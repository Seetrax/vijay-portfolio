export default function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">

      <header className="experience-card__header">
        <div>
          <p className="experience-card__period">
            {experience.period}
          </p>

          <h3 className="experience-card__company">
            {experience.company}
          </h3>

          <p className="experience-card__role">
            {experience.role}
            <span> · </span>
            {experience.location}
          </p>
        </div>
      </header>

      <h4 className="experience-card__headline">
        {experience.headline}
      </h4>

      <p className="experience-card__summary">
        {experience.summary}
      </p>

      <div className="experience-card__context">
        <span className="experience-card__label">
          The problem
        </span>

        <p>{experience.context}</p>
      </div>

      <div className="experience-card__contributions">
        {experience.contributions.map((item) => (
          <div
            className="experience-card__contribution"
            key={item.title}
          >
            <h5>{item.title}</h5>

            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {experience.impact && (
        <div className="experience-card__impact">

          <span className="experience-card__label">
            {experience.impact.label}
          </span>

          <strong>
            {experience.impact.value}
          </strong>

          <p>
            {experience.impact.description}
          </p>
        </div>
      )}

      {experience.stats && (
        <div className="experience-card__stats">
          {experience.stats.map((stat) => (
            <div
              className="experience-stat"
              key={stat.label}
            >
              <strong>
                {stat.value}
              </strong>

              <span>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {experience.technologies && (
        <div className="experience-card__tech">
          {experience.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
      )}

      {experience.links && (
        <div className="experience-card__links">
          {experience.links.map((link) => (
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

    </article>
  );
}