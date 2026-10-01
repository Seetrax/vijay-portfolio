const links = ['Experience', 'Projects', 'Skills', 'Education', 'Leadership', 'Contact']

export default function Navbar() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="container">
        <a className="brand" href="#top">Vijay Ramakrishnan</a>
        <ul>
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
