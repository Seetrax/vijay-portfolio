import SectionTitle from '../components/SectionTitle'
import ExperienceCard from '../components/ExperienceCard'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionTitle>Experience</SectionTitle>
        <div className="stack">{experience.map((e) => <ExperienceCard key={e.org} item={e} />)}</div>
      </div>
    </section>
  )
}
