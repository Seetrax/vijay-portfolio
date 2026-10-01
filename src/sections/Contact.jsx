import SectionTitle from '../components/SectionTitle'
import SocialLinks from '../components/SocialLinks'
import { profile } from '../data/socials'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <SectionTitle>Contact</SectionTitle>
        <p>I'm open to conversations about AI engineering and research roles. Email is the quickest way to reach me.</p>
        <p><a className="btn" href={`mailto:${profile.email}`}>Email me</a></p>
        <SocialLinks />
      </div>
    </section>
  )
}
