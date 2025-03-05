import React from "react";
import { Link } from "react-router-dom";
import person from "../assets/person(default).jpg";
import "./Speakers.css";

function Speakers() {
  const speakers = [
    { id: 1, name: "Speaker 1", position: "Position at ABC", img: person },
    { id: 2, name: "Speaker 2", position: "Position at ABC", img: person },
    { id: 3, name: "Speaker 3", position: "Position at ABC", img: person },
    { id: 4, name: "Speaker 4", position: "Position at ABC", img: person },
    { id: 5, name: "Speaker 5", position: "Position at ABC", img: person },
    { id: 6, name: "Speaker 6", position: "Position at ABC", img: person },
    // { id: 7, name: "Speaker 7", position: "Position at ABC", img: person },
    // { id: 8, name: "Speaker 8", position: "Position at ABC", img: person },
    // { id: 9, name: "Speaker 9", position: "Position at ABC", img: person },
    // { id: 10, name: "Speaker 10", position: "Position at ABC", img: person },
  ];

  return (
    <div className="big-container">
      <h2 className="section-title">Speakers</h2>
      <p className="section-para">Meet the industry leaders, innovators, and experts who will be sharing their insights at our conference. <br />Our speakers bring years of experience and expertise, covering key topics that will help you stay ahead in the industry.<br /> Gain valuable knowledge, network with professionals, and be part of insightful discussions.<br/> Stay tuned as we announce more speakers!</p>
      <p className="section-para-2"><Link to="/host-regi" className="speaker-link">Want to Become a Speaker.</Link></p>      <div className="white-container">
        <div className="speakers-container">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <img src={speaker.img} alt={speaker.name} />
              <h3>{speaker.name}</h3>
              <p>{speaker.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speakers;
