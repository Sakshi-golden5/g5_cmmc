import React from "react";
import "./Events.css";

const eventData = [
  {
    date: "Friday, 18 April",
    time: "8:00 AM - 8:30 AM",
    title: "Breakfast",
  },
  {
    date: "Friday, 18 April",
    time: "8:30 AM - 9:30 AM",
    title: "Opening Remarks & State of the Ecosystem",
    speakers: [
      { name: "Speaker-1", role: "Position at ABC"},
    ],
    sessionType: "Main Stage Session",
    duration: "1 Hour",
    track: "Keynote",
  },
  {
    date: "Friday, 18 April",
    time: "9:30 AM - 10:30 AM",
    title: "Protecting CUI, Federal Contractors & Future of CMMC",
    speakers: [{ name: "Speaker-2", role: "Position at ABC"}],
    sessionType: "Main Stage Session",
    duration: "1 Hour",
    track: "Keynote",
  },
];

function Events() {
  return (
    <div className="events-container">
      {eventData.map((event, index) => (
        <div key={index} className={`event-card ${event.speakers ? "session" : "break"}`}>
          <div className="event-time">
            <p>{event.date}</p>
            <h4>{event.time}</h4>
          </div>
          <div className="event-content">
            <h3>{event.title}</h3>
            {event.sessionType && (
              <p className="session-info">
                {event.sessionType} • {event.duration} • {event.track}
              </p>
            )}
            {event.speakers && (
              <div className="speakers">
                {event.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex} className="speaker">
                    <p>{speaker.name} - {speaker.role}</p>
                  </div>
                ))}
              </div>
            )}
            {event.speakers && <button className="save-seat-btn">Save a Seat</button>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
