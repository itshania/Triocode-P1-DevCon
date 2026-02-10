import React, { useState, useEffect } from 'react';
import './Events.css';
import API from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await API.get('/api/events');
        setEvents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="events-container">
      <h1 className="events-title">All Events</h1>
      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p>Organizer: {event.organizer}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Attendees: {event.attendees}</p>
            <button className="btn-details">View Event</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
