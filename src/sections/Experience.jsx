import ExperienceCard from "../components/ExperienceCard";
import { experience } from "../data/experience";

import "../styles/experience.css";

export default function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
    >
      <div className="experience-section__heading">
        <p className="section-kicker">
          EXPERIENCE
        </p>

        <h2>
          Systems I've helped
          <br />
          build and research.
        </h2>

        <p>
          A closer look at the problems, architecture,
          and engineering decisions behind my work —
          beyond the bullet points on my résumé.
        </p>
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <ExperienceCard
            key={item.id}
            experience={item}
          />
        ))}
      </div>
    </section>
  );
}