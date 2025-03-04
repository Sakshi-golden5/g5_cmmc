import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../assets/Final.png"
import bgVideo from "../assets/LA1.mp4"

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <video autoPlay loop muted className="background-video">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="logo-con"><img src={logo} alt="Event Logo" className="logo" /></div>
          <h2 className="event-subtitle">CMMC Ecosystem Summit + Implementation Conference</h2>
          <p className="event-details">April 18, 2025 | LOS ANGELES, CA</p>

          <a href="https://www.eventbrite.com/e/example-event-registration" 
             target="_blank" rel="noopener noreferrer" className="register-btn-1">
            Register
          </a>
        </div>
      </header>

      <section className="about">
  <h2>About G5 Events</h2>
  <p>At G5 Events, we curate exclusive conferences that bring together professionals, policymakers, and thought leaders to discuss the evolving landscape of CMMC compliance and cybersecurity.</p>
</section>

<section className="details">
  <h2>Why Attend?</h2>
  <div className="event-highlights">
    <div className="highlight">
      <h3>🎤 Keynote Speeches</h3>
      <p>Hear from top industry leaders about the future of cybersecurity and compliance.</p>
    </div>
    <div className="highlight">
      <h3>🤝 Networking Opportunities</h3>
      <p>Connect with professionals, experts, and decision-makers in the field.</p>
    </div>
    <div className="highlight">
      <h3>🛠️ Hands-On Workshops</h3>
      <p>Participate in interactive sessions to gain practical insights into CMMC implementation.</p>
    </div>
  </div>
</section>

<section className="schedule">
  <h2>Event Schedule</h2>
  <p>Stay tuned for the detailed agenda covering key topics and expert panels.</p>
</section>

<section className="venue">
  <h2>Venue & Accommodation</h2>
  <p>Our conference will be held at a prime location, ensuring comfort and accessibility. Hotel details and travel information will be provided soon.</p>
</section>
    </div>
  );
}

export default Home;
