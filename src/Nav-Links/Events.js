import React, { useState, useEffect } from "react";
import "./Events.css";

const targetDate = new Date("April 18, 2025 00:00:00").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-timer">
      <p>{`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}</p>
    </div>
  );
};

const eventData = [
  {
    date: "Friday, 18 April",
    time: "8:00 AM - 8:30 AM",
    title: "Breakfast"
  },
  {
    date: "Friday, 18 April",
    time: "8:30 AM - 9:05 AM",
    title: "Session 1",
    speakers: [{ name: "Speaker-1", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote"
  },
  {
    date: "Friday, 18 April",
    time: "9:10 AM - 9:45 AM",
    title: "Session 2",
    speakers: [{ name: "Speaker-2", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote"
  },
  {
    date: "Friday, 18 April",
    time: "9:50 AM - 10:25 AM",
    title: "Session 3",
    speakers: [{ name: "Speaker-2", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote"
  },
  {
    date: "Friday, 18 April",
    time: "10:30 AM - 11:05 AM",
    title: "Session 4",
    speakers: [{ name: "Speaker-3", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote"
  },
  {
    date: "Friday, 18 April",
    time: "11:10 AM - 11:45 AM",
    title: "Session 5",
    speakers: [{ name: "Speaker-4", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote"
  },
  {
    date: "Friday, 18 April",
    time: "11:50 AM - 12:25 PM",
    title: "Session 6",
    speakers: [{ name: "Speaker-5", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote"
  },
  {
    date: "Friday, 18 April",
    time: "1:25 PM - 2:00 PM",
    title: "Session 7",
    speakers: [{ name: "Speaker-6", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote"
  },
  {
    date: "Friday, 18 April",
    time: "2:05 PM - 2:40 PM",
    title: "Session 8",
    speakers: [{ name: "Speaker-7", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote"
  },
  {
    date: "Friday, 18 April",
    time: "2:45 PM - 3:20 PM",
    title: "Session 9",
    speakers: [{ name: "Speaker-8", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote"
  },
  {
    date: "Friday, 18 April",
    time: "3:25 PM - 4:00 PM",
    title: "Session 10",
    speakers: [{ name: "Speaker-9", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote"
  },
  {
    date: "Friday, 18 April",
    time: "4:00 PM - 4:30 PM",
    title: "Closing Remarks"
  }
];

function Events() {
  return (
    <div className="events-container">
      <CountdownTimer />
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