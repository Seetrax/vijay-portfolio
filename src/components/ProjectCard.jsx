const asset = (p) => `${import.meta.env.BASE_URL}${p}`

export default function ProjectCard({ project }) {
  const { title, meta, description, tags, thumbnail, video, links } = project
  return (
    <article className="card">
      {video ? (
        <video src={asset(video)} poster={asset(thumbnail)} controls muted loop playsInline preload="none" />
      ) : (
        <img className="thumb" src={asset(thumbnail)} alt={`${title} preview`} loading="lazy"
             onError={(e) => (e.currentTarget.style.display = 'none')} />
      )}
      <div className="card-body">
        <h3>{title}</h3>
        <p className="muted" style={{ margin: '4px 0 12px', fontSize: '0.92rem' }}>{meta}</p>
        <p>{description}</p>
        <div className="badges">{tags.map((t) => <span key={t} className="badge">{t}</span>)}</div>
        {links?.length > 0 && (
          <p style={{ marginTop: 16, marginBottom: 0 }}>
            {links.map((l) => <a key={l.url} href={l.url} target="_blank" rel="noreferrer" style={{ marginRight: 16 }}>{l.label}</a>)}
          </p>
        )}
      </div>
    </article>
  )
}
