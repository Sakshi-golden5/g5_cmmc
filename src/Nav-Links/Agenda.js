import React from 'react';
import './Agenda.css';  // Link to the CSS file

function Agenda() {
  return (
    <div className="agenda-container">
     
      <section className="agenda-introduction">
        <h2>Welcome to the CMMC Event</h2>
        <p>
          The Cybersecurity Maturity Model Certification (CMMC) 2.0 program is the next iteration of the CMMC cybersecurity model.
          This event will give you a comprehensive overview of the CMMC framework, its streamlined structure, and how it enhances cybersecurity within organizations.
        </p>
        <p>
          The goal of this event is to equip organizations and individuals with the knowledge they need to achieve and maintain compliance with CMMC, ensuring they can protect sensitive information and meet federal regulations effectively.
        </p>
      </section>

    
      <section className="agenda-key-points">
        <h3>Key Highlights of the Event</h3>
        <ul>
          <li><strong>Introduction to CMMC:</strong> Learn the core principles of CMMC and why it’s critical for your organization’s cybersecurity efforts.</li>
          <li><strong>Compliance Requirements:</strong> Understand the specific compliance requirements for different levels of CMMC and how to assess your organization’s current status.</li>
          <li><strong>Practical Steps for Implementation:</strong> Discover actionable strategies to help your organization implement CMMC effectively.</li>
          <li><strong>Q&A Sessions:</strong> Participate in open discussions and get your questions answered by CMMC experts.</li>
        </ul>
      </section>

      <section className="agenda-importance">
        <h3>Why is this Event Important?</h3>
        <p>
          As cyber threats continue to evolve, CMMC is becoming a necessary standard for ensuring the security of sensitive data within the defense supply chain.
          Achieving compliance with CMMC not only enhances your cybersecurity practices but also ensures your eligibility for government contracts that require CMMC certification.
        </p>
        <p>
          This event is a great opportunity for you to get up to speed with CMMC requirements, learn from industry experts, and network with peers in the field.
        </p>
      </section>

      <section className="agenda-what-you-will-learn">
        <h3>What Will You Learn?</h3>
        <ul>
          <li><strong>CMMC2 Overview:</strong> What it is and why it’s necessary.</li>
          <li><strong>Levels of CMMC:</strong> Understanding the three levels and their respective requirements.</li>
          <li><strong>Implementation Guidance:</strong> How to prepare your organization for CMMC compliance.</li>
          <li><strong>Real-world Case Studies:</strong> How other organizations have successfully implemented CMMC.</li>
        </ul>
      </section>
    </div>
  );
}

export default Agenda;
