import SectionTitle from '../components/SectionTitle'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionTitle>Education</SectionTitle>
        <div className="stack">
          {education.map((e) => (
            <article key={e.school} className="xp">
              <img className="logo" src={`${import.meta.env.BASE_URL}${e.logo}`} alt="" onError={(ev) => (ev.currentTarget.style.visibility = 'hidden')} />
              <div>
                <header>
                  <h3>{e.school}</h3>
                  <span className="muted">{e.dates}</span>
                </header>
                <div>{e.degree}{e.detail ? `, ${e.detail}` : ''}</div>
                <div className="muted">{e.place}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
