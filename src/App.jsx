import { useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";

import "./styles/page-transition.css";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <HashRouter>
      {!entered && (
        <Intro onEnter={() => setEntered(true)} />
      )}

      <div
        className={`portfolio-shell ${
          entered ? "portfolio-shell--visible" : ""
        }`}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/experience"
            element={<ExperiencePage />}
          />

          <Route
            path="/experience/:experienceId"
            element={<ExperiencePage />}
          />

          <Route
            path="/projects"
            element={<ProjectsPage />}
          />

          <Route
            path="/projects/:projectId"
            element={<ProjectsPage />}
          />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}