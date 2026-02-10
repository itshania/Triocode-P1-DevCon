import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import API from '../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    events: 0,
    registrations: 0,
    revenue: 0,
    attendees: 0,
  });

  const [recentEvents, setRecentEvents] = useState([]);

  useEffect(() => {
    // Fetch stats from backend (replace with your API endpoints)
    const fetchStats = async () => {
      try {
        const res = await API.get('/api/dashboard/stats');
        setStats(res.data.stats);
        setRecentEvents(res.data.recentEvents);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Event Dashboard</h1>

      <div className="dashboard-overview">
        <div className="dashboard-card">
          <h3>Total Events</h3>
          <p>{stats.events}</p>
        </div>
        <div className="dashboard-card">
          <h3>Registrations</h3>
          <p>{stats.registrations}</p>
        </div>
        <div className="dashboard-card">
          <h3>Revenue</h3>
          <p>${stats.revenue}</p>
        </div>
        <div className="dashboard-card">
          <h3>Attendees</h3>
          <p>{stats.attendees}</p>
        </div>
      </div>

      <h2 className="dashboard-subtitle">Recent Events</h2>
      <div className="events-list">
        {recentEvents.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Attendees: {event.attendees}</p>
            <p>Status: {event.status}</p>
            <button className="btn-details">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
