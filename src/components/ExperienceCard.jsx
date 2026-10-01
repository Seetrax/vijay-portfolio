export default function ExperienceCard({ item }) {
  return (
    <article className="xp">
      <img className="logo" src={`${import.meta.env.BASE_URL}${item.logo}`} alt="" onError={(e) => (e.currentTarget.style.visibility = 'hidden')} />
      <div>
        <header>
          <h3>{item.role}, {item.org}</h3>
          <span className="muted">{item.dates}</span>
        </header>
        <div className="muted">{item.place}</div>
        <ul>{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
    </article>
  )
}
