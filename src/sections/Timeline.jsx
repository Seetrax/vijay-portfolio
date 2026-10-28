import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import "../styles/timeline.css";

export default function Timeline() {
  const timelineRef = useRef(null);
  const navigate = useNavigate();

  const [visible, setVisible] =
    useState(false);

  /*
   * Intentionally NOT to scale.
   *
   * The positions are chosen for visual balance,
   * not exact chronological spacing.
   */
  const events = [
    {
      id: "iit",

      title: "IIT Palakkad",

      subtitle:
        "B.Tech Computer Science",

      dates: "2021 - 2025",

      position: 6,

      side: "bottom",

      type: "education",

      target: "education-iit",

      route: null,

      delay: "0.15s",
    },

    {
      id: "tcs",

      title: "TCS Research",

      subtitle:
        "Software Engineer Intern",

      dates: "Jun - Aug 2024",

      position: 45,

      side: "top",

      type: "experience",

      route:
        "/experience/tcs-research",

      delay: "0.4s",
    },

    {
      id: "gatech",

      title: "Georgia Tech",

      subtitle:
        "M.S. Computer Science",

      dates: "2025 - Present",

      position: 67,

      side: "bottom",

      type: "education",

      target: "education-gatech",

      route: null,

      delay: "0.6s",
    },

    {
      id: "magic-lemp",

      title: "Magic LEMP",

      subtitle:
        "AI Engineer Intern",

      dates:
        "Dec 2025 - Jun 2026",

      position: 88,

      side: "top",

      type: "experience",

      route:
        "/experience/magic-lemp",

      delay: "0.8s",
    },
  ];


  useEffect(() => {
    const element =
      timelineRef.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            setVisible(true);

            observer.disconnect();
          }
        },
        {
          threshold: 0.25,
        }
      );

    observer.observe(element);

    return () =>
      observer.disconnect();
  }, []);


  const handleEventClick = (
    event
  ) => {

    /*
     * Experiences live on
     * their own page.
     */
    if (event.route) {
      navigate(event.route);

      return;
    }


    /*
     * Education remains
     * on the homepage.
     */
    if (event.target) {
      const element =
        document.getElementById(
          event.target
        );

      if (!element) return;

      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };


  return (
    <div
      ref={timelineRef}
      className={`mini-timeline ${
        visible
          ? "mini-timeline--visible"
          : ""
      }`}
    >
      <video
        className="mini-timeline__background"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source
          src={`${import.meta.env.BASE_URL}assets/videos/timeline.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="mini-timeline__scroll">

        <div className="mini-timeline__inner">

          {/* Decorative year labels */}

          <div className="mini-timeline__years">

            <span
              style={{ left: "4%" }}
            >
              2021
            </span>

            <span
              style={{ left: "44%" }}
            >
              2024
            </span>

            <span
              style={{ left: "67%" }}
            >
              2025
            </span>

            <span
              style={{ left: "94%" }}
            >
              2026
            </span>

          </div>


          {/* Soft background rail */}

          <div
            className=
              "mini-timeline__line-base"
          />


          {/* Animated rail */}

          <div
            className=
              "mini-timeline__line-progress"
          />


          {/* Timeline events */}

          {events.map((event) => (

            <button
              type="button"

              key={event.id}

              className={`
                mini-timeline__event
                mini-timeline__event--${event.side}
              `}

              style={{
                left:
                  `${event.position}%`,

                "--event-delay":
                  event.delay,
              }}

              onClick={() =>
                handleEventClick(event)
              }

              aria-label={
                `Go to ${event.title}`
              }
            >

              <span
                className="mini-timeline__stem"
              />

              <span
                className={`
                  mini-timeline__dot
                  mini-timeline__dot--${event.type}
                `}
              />

              <span
                className=
                  "mini-timeline__event-content"
              >

                <strong>
                  {event.title}
                </strong>

                <span
                  className=
                    "mini-timeline__subtitle"
                >
                  {event.subtitle}
                </span>

                <small>
                  {event.dates}
                </small>

              </span>

            </button>

          ))}

        </div>

      </div>
    </div>
  );
}
