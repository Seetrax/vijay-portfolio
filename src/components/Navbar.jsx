import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToHomeSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header className="site-navbar">
      <div className="site-navbar__inner">

        <Link
          to="/"
          className="site-navbar__brand"
        >
          Vijay Ramakrishnan
        </Link>

        <nav className="site-navbar__links">

          <button
            type="button"
            onClick={() => goToHomeSection("about")}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => goToHomeSection("education")}
          >
            Education
          </button>

          <Link
            to="/experience"
            className={
              location.pathname.startsWith("/experience")
                ? "active"
                : ""
            }
          >
            Experience
          </Link>

          <Link
            to="/projects"
            className={
              location.pathname.startsWith("/projects")
                ? "active"
                : ""
            }
          >
            Projects
          </Link>

          <button
            type="button"
            onClick={() => goToHomeSection("skills")}
          >
            Skills
          </button>

          <button
            type="button"
            onClick={() => goToHomeSection("contact")}
          >
            Contact
          </button>

        </nav>

      </div>
    </header>
  );
}