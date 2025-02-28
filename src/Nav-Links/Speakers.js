import React from 'react'
import lOogo from "../assets/LOogo.png";
import './Speakers.css'
function Speakers() {
    const speakers = [
        { id: 1, name: "Speaker 1", position: "Position at ABC", img: lOogo },
        { id: 2, name: "Speaker 2", position: "Position at ABC", img: lOogo },
        { id: 3, name: "Speaker 3", position: "Position at ABC", img: lOogo },
        
      ];

  return (
    <div className="speakers-container">
      {speakers.map((speaker) => (
        <div key={speaker.id} className="speaker-card">
          <img src={speaker.img} alt={speaker.name} />
          <h3>{speaker.name}</h3>
          <p>{speaker.position}</p>
        </div>
      ))}
    </div>
  )
}

export default Speakers
