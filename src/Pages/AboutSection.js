import React, { useEffect, useState } from 'react';
import './Home.css';

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Our Mission to Keep Post Offices Clean and Green",
      description: "We aim to uphold Swachh Bharat Mission values to reduce environmental impact while fostering sustainable development within communities.",
      image: "images/postofficeai.webp",
    },
    {
      title: "Empowering Communities with Cleanliness",
      description: "Harnessing the power of AI for creating a cleaner, greener postal ecosystem.",
      image: "images/clean-green.webp",
    },
    {
      title: "Sustainable and Scalable Solutions",
      description: "Transforming post offices into sustainability hubs through innovative practices.",
      image: "images/sustainability.webp",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="about" className="mission-section">
      <div className="mission-slider">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? 'fade' : ''}`}
            key={index}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
