export default function About() {
  return (
    <section id="about" style={{ borderTop: 0, paddingTop: 0 }}>
      <div className="container">
        <p style={{ fontSize: '1.15rem' }}>
          Hi, I'm Vijay. I'm a Computer Science master's student at Georgia Tech who likes building
          things that are a little bit intelligent, a little bit interactive, and hopefully useful.
        </p>

        <p>
          Most of my interests sit somewhere between software engineering, AI, and robotics. I enjoy
          working on systems where there is something interesting happening under the hood — search,
          agents, learning, simulation, or just a well-designed piece of software.
        </p>

        <p>
          Outside of coursework and projects, I'm usually at the gym, trying a new recipe, playing
          games, or going down a rabbit hole about some random technology I suddenly decided I need
          to understand.
        </p>

        <p className="muted">
          I also have a soft spot for robots, especially when they start moving in ways they probably
          shouldn't.
        </p>
      </div>
    </section>
  )
}