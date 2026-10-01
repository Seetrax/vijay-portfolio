import SectionTitle from '../components/SectionTitle'
import { leadership } from '../data/education'

export default function Leadership() {
  return (
    <section id="leadership">
      <div className="container">
        <SectionTitle>Leadership</SectionTitle>
        <div className="stack">
          {leadership.map((l) => (
            <div key={l.title}><h3>{l.title}</h3><p style={{ marginTop: 8 }}>{l.text}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
