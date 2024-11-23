// Import necessary packages and styles
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

// Import the animation library
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [message, setMessage] = useState('');
  const sliderRef = useRef(null);
  const solutionSliderRef = useRef(null);

  // Settings for the main slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: false,
    arrows: false,
  };

  // Settings for the solution slider
  const solutionSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
  };

  // Intersection Observer for animations
  const { ref: featureRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header id="home" className="hero-section">
        <h1>Welcome to the Swachhta and LIFE Practices Monitoring Dashboard</h1>
        <p>Platform to effectively monitor cleanliness and green practices across postal services.</p>
      </header>

      {/* About Section */}
      <section id="about" className="mission-section">
        <div className="slider-background">
          <h2>Our Mission to Keep Post Offices Clean and Green</h2>
          <p>
            We aim to uphold Swachh Bharat Mission values to reduce environmental impact while
            fostering sustainable development within communities.
          </p>
        </div>
        <div className="slider-wrapper">
          <Slider {...sliderSettings} ref={sliderRef} className="about-slider">
            <div className="slider-item">
              <div className="slider-bg" style={{ backgroundImage: 'url(images/postofficeai.webp)' }}>
                <div className="slider-caption">
                  <h3>AI-Powered Cleanliness Monitoring</h3>
                  <p>Advanced technologies to ensure hygienic practices across post offices.</p>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-bg" style={{ backgroundImage: 'url(/images/postimage1.jpg)' }}>
                <div className="slider-caption">
                  <h3>Sustainability Practices</h3>
                  <p>Incorporating green initiatives to promote environmental well-being.</p>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-bg" style={{ backgroundImage: 'url(/images/postoffice2.webp)' }}>
                <div className="slider-caption">
                  <h3>Empowering Communities</h3>
                  <p>Fostering a culture of cleanliness and responsibility.</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Key Features</h2>
        <div className={`features-container ${featuresInView ? 'animate-features' : ''}`} ref={featureRef}>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="images/cctv-camera.png" alt="AI Icon" />
            </div>
            <h3>AI Powered Image Processing</h3>
            <p>Real-time data visualization to monitor cleanliness effectively.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="images/bar-chart.png" alt="Analytics Icon" />
            </div>
            <h3>Reports and Analytics</h3>
            <p>Monthly and weekly reports to keep track of cleanliness levels.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="images/notification.png" alt="Alerts Icon" />
            </div>
            <h3>Alerts and Notifications</h3>
            <p>Real-time alerts for immediate attention to any cleanliness issues.</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution-section">
        <h2>Our Solution</h2>
        <div className="solution-slider-container">
          <Slider {...solutionSliderSettings} ref={solutionSliderRef} className="solution-slider">
            <div className="solution-slide">
              <img src="images/solution1.jpg" alt="Solution Image 1" />
            </div>
            <div className="solution-slide">
              <img src="images/archit2.jpg" alt="Solution Image 2" />
            </div>
            <div className="solution-slide">
              <img src="images/architec2.jpg" alt="Solution Image 3" />
            </div>
            <div className="solution-slide">
              <video controls>
                <source src="images/modelvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slider>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>Address: 123 Main St, Anytown</p>
          <p>Email: info@swachhta.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <form className="contact-form">
          <label htmlFor="message">Leave a Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            rows="5"
          ></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>

        <div className="social-media">
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src="images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src="images/twitter.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src="images/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
