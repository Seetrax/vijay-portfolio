import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/work-links.css";

const slides = [
  {
    id: "experience",
    title: "Experience",
    description:
      "Production AI systems, research, retrieval infrastructure and engineering work.",
    link: "/experience",
    linkLabel: "View experience",

    /*
     * Change this to whatever image you want.
     * Put the image inside public/assets/images/.
     */
    image: `${import.meta.env.BASE_URL}assets/images/exp.png`,
  },

  {
    id: "projects",
    title: "Projects",
    description:
      "Robotics, machine learning, databases and experiments in artificial intelligence.",
    link: "/projects",
    linkLabel: "View projects",

    /*
     * Change this image path if necessary.
     */
    image: `${import.meta.env.BASE_URL}assets/images/projects.png`,
  },
];

export default function WorkLinks() {
  const trackRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSlide = (index) => {
    const track = trackRef.current;

    if (!track) return;

    const slide = track.children[index];

    if (!slide) return;

    slide.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveSlide(index);
  };

  const handleScroll = () => {
    const track = trackRef.current;

    if (!track) return;

    const slideWidth = track.clientWidth;

    if (!slideWidth) return;

    const index = Math.round(
      track.scrollLeft / slideWidth
    );

    setActiveSlide(
      Math.max(
        0,
        Math.min(slides.length - 1, index)
      )
    );
  };

  const previousSlide = () => {
    scrollToSlide(
      Math.max(0, activeSlide - 1)
    );
  };

  const nextSlide = () => {
    scrollToSlide(
      Math.min(
        slides.length - 1,
        activeSlide + 1
      )
    );
  };

  return (
    <section className="work-carousel">

      <div className="work-carousel__top">
        <p>EXPLORE MY WORK</p>

        <div className="work-carousel__controls">
          <button
            type="button"
            onClick={previousSlide}
            disabled={activeSlide === 0}
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            disabled={
              activeSlide === slides.length - 1
            }
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>


      <div
        ref={trackRef}
        className="work-carousel__track"
        onScroll={handleScroll}
      >
        {slides.map((slide) => (
          <Link
            to={slide.link}
            className="work-slide"
            key={slide.id}
          >

            <div className="work-slide__content">

             

              <h2>
                {slide.title}
              </h2>

              <p className="work-slide__description">
                {slide.description}
              </p>

              <span className="work-slide__link">
                {slide.linkLabel}
                <span>↗</span>
              </span>

            </div>


            <div className="work-slide__visual">

              <img
  src={slide.image}
  alt={`${slide.title} cover`}
  onError={(e) => {
    console.error("Failed image:", slide.image);
  }}
/>

            </div>

          </Link>
        ))}
      </div>


      <div className="work-carousel__bottom">

        <div className="work-carousel__dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              className={
                activeSlide === index
                  ? "active"
                  : ""
              }
              onClick={() =>
                scrollToSlide(index)
              }
              aria-label={`Show ${slide.title}`}
            />
          ))}
        </div>

        <span className="work-carousel__hint">
          Drag or swipe
        </span>

      </div>

    </section>
  );
}
