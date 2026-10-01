import SectionTitle from '../components/SectionTitle'
import SkillBadge from '../components/SkillBadge'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionTitle>Skills</SectionTitle>
        <div className="stack">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: 10 }}>{group}</h3>
              <div className="badges">{items.map((s) => <SkillBadge key={s} label={s} />)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
