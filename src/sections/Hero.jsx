import { profile } from '../data/socials'
import SocialLinks from '../components/SocialLinks'

export default function Hero() {
  return (
    <header id="top" className="container hero">
      <div>
        <h1>{profile.name}</h1>
        <p style={{ fontSize: '1.25rem', marginTop: 16 }} className="muted">{profile.title}</p>
        <div className="actions">
          <a className="btn" href="#projects">See projects</a>
          <a className="btn ghost" href={`${import.meta.env.BASE_URL}${profile.resume}`} target="_blank" rel="noreferrer">Download resume</a>
        </div>
        <SocialLinks />
      </div>
      <img className="photo" src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={`Portrait of ${profile.name}`}
           onError={(e) => (e.currentTarget.style.display = 'none')} />
    </header>
  )
}
