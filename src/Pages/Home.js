import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Home = () => {
  const [message, setMessage] = useState('');
  const sliderRef = useRef(null); // Reference for the slider

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

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
    beforeChange: (current, next) => {
      console.log('Slide changed from', current, 'to', next); // You can use this for additional effects
    }
  };

  const handleImageClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Manually go to next slide on image click
    }
  };

  return (
    <div className="home-container">
      <header id="home" className="hero-section">
        <h1>Welcome to the Swachhta and LIFE Practices Monitoring Dashboard</h1>
        <p>Platform to effectively monitor cleanliness and green practices across postal services.</p>
      </header>

      {/* About Section */}
      <section id="about" className="mission-section">
  <div className="slider-background">
    <h2>Our Mission to Keep Post Offices Clean and Green</h2>
    <p>
      We aim to uphold Swachh Bharat Mission values to reduce environmental impact while fostering
      sustainable development within communities.
    </p>
  </div>

  <div className="slider-wrapper">
    <Slider {...sliderSettings} ref={sliderRef} className="about-slider">
      <div className="slider-item" onClick={handleImageClick}>
        <div className="slider-bg" style={{ backgroundImage: 'url(images/postofficeai.webp)' }}>
          <div className="slider-caption">
            <h3>AI-Powered Cleanliness Monitoring</h3>
            <p>Advanced technologies to ensure hygienic practices across post offices.</p>
          </div>
        </div>
      </div>
      <div className="slider-item" onClick={handleImageClick}>
        <div className="slider-bg" style={{ backgroundImage: 'url(/images/postimage1.jpg)' }}>
          <div className="slider-caption">
            <h3>Sustainability Practices</h3>
            <p>Incorporating green initiatives to promote environmental well-being.</p>
          </div>
        </div>
      </div>
      <div className="slider-item" onClick={handleImageClick}>
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
        <div className="features-container">
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
        <p>
          Our approach is designed to improve cleanliness in post offices, using AI and image
          analysis to create sustainable practices.
        </p>
        <img id="solimg" src="images/th.jpeg" alt="Solution" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>Address: 123 Main St, Anytown</p>
          <p>Email: info@swachhta.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="message">Leave a Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
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
