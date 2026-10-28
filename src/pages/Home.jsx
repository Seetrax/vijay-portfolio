import { useEffect } from "react";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Education from "../sections/Education";
import Timeline from "../sections/Timeline";
import WorkLinks from "../sections/WorkLinks";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main>
      <Hero />

      <About />

      <Education />

      <Timeline />

      <WorkLinks />

      <Skills />


      <Contact />
    </main>
  );
}