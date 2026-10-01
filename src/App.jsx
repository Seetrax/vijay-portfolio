import { useState } from 'react'

import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Leadership from './sections/Leadership'
import Contact from './sections/Contact'

export default function App() {
  const [entered, setEntered] = useState(false)

  return (
    <>
      {!entered && (
        <Intro onEnter={() => setEntered(true)} />
      )}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  )
}