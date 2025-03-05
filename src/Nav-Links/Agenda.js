import React from 'react';
import './Agenda.css';  
import bannerangendaimg from "../assets/Agenda-bg.jpg" 

function Agenda() {
  return (
    <div className="agenda-container">
      
      <div className="agenda-banner">
        <img src={bannerangendaimg} alt="Background Banner" className="banner-img" />
        
        <div className="banner-content">
          <h2>Welcome to the CMMC Events</h2>
          <p>
            The Cybersecurity Maturity Model Certification (CMMC) 2.0 program is the next iteration of the CMMC cybersecurity model.<br/>
            This event will give you a comprehensive overview of the CMMC framework, its streamlined structure, <br/> and how it enhancescybersecurity within organizations.
          </p>
        </div>
      </div>

      <section className="agenda-grid">
        <div className="agenda-card">
          <h3>Key Highlights of the Event</h3>
          <ul>
            <strong>Introduction to CMMC:</strong> Learn the core principles of CMMC and why it’s critical.<br/>
            <strong>Compliance Requirements:</strong> Understand the specific compliance requirements.<br/>
            <strong>Practical Steps for Implementation:</strong> Discover actionable strategies.<br/>
            <strong>Q&A Sessions:</strong> Participate in open discussions with experts.<br/>
          </ul>
        </div>

        <div className="agenda-card">
          <h3>Why is this Event Important?</h3>
          <p>
            CMMC ensures the security of sensitive data and improves cybersecurity practices.
          </p>
          <p>
            Achieving compliance ensures eligibility for government contracts.
          </p>
        </div>
      </section>

      <section className="agenda-final-card">
        <h3>What Will You Learn?</h3>
        <ul>
          <li><strong>CMMC2 Overview:</strong> What it is and why it’s necessary.</li>
          <li><strong>Levels of CMMC:</strong> Understanding the three levels and their requirements.</li>
          <li><strong>Implementation Guidance:</strong> How to prepare your organization.</li>
          <li><strong>Real-world Case Studies:</strong> How others have implemented CMMC.</li>
        </ul>
      </section>
    </div>
  );
}

export default Agenda;
