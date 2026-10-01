import { socials } from '../data/socials'

export default function SocialLinks() {
  return (
    <div className="social">
      {socials.map((s) => (
        <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
          <img src={`${import.meta.env.BASE_URL}assets/icons/${s.icon}`} alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
          {s.name}
        </a>
      ))}
    </div>
  )
}
