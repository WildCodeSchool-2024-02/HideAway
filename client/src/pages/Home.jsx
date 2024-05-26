import "./styles/home.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: "/src/assets/images/parachute.jpg", alt: "Parachute" },
    { src: "/src/assets/images/ibiza.jpg", alt: "soirée de ouf" },
    { src: "/src/assets/images/chevre.jpg", alt: "Des jolies chèvres" },
    { src: "/src/assets/images/fabrication.jpg", alt: "travaux manuel" },
    { src: "/src/assets/images/jetski.jpg", alt: "jetski" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleDotClick(currentSlide);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      setCurrentSlide((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setCurrentSlide((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="homecontainer">
        <div className="accueiltitle">
          <h1 className="page-title"> HideAway</h1>
          <div className="carousel">
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              className="imgparachute"
            />
          </div>
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={[index]}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                aria-label={`Slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
        <ul className="all-buttons">
          <li>
            <Link className="buttons" to="/register" activeClassName="active">
              {" "}
              💬 S'enregistrer
            </Link>
          </li>
          <li>
            <Link className="buttons" to="/login" activeClassName="active">
              {" "}
              ✅ Se connecter
            </Link>
          </li>
          <div className="buttons-quizz-all">
            <li className="button-quizz">
              <Link to="/quizz" className="text-quizz" activeClassName="active">
                {" "}
                ⏩ Faire le quizz
              </Link>
            </li>

            <li className="button-all">
              <Link
                to="/activities"
                className="text-quizz"
                activeClassName="active"
              >
                {" "}
                ⭐ Voir toutes les activités{" "}
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
