import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid-2">{projects.map((p) => <ProjectCard key={p.title} project={p} />)}</div>
      </div>
    </section>
  )
}
