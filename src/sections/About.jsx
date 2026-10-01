export default function About() {
  return (
    <section id="about" style={{ borderTop: 0, paddingTop: 0 }}>
      <div className="container">
        <p style={{ fontSize: '1.15rem' }}>
          I'm a master's student in Computer Science at Georgia Tech. I build systems that make language models and robots useful in
          practice: retrieval pipelines that stay fast at millions of vectors, multi-agent workflows, and learned controllers in simulation.
        </p>
        <p className="muted">Recently I worked on a production RAG platform in Paris and on LLM orchestration research at Tata Research Group.</p>
      </div>
    </section>
  )
}
