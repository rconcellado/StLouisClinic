import React from 'react';
import '../css/InfoSection.css';

function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-box">
        <h3>Join Us</h3>
        <p>Join our team and help us provide excellent medical care. Explore career opportunities at St. Louis Clinic.</p>
        <button className="info-button" onClick={() => alert('More Info Coming Soon!')}>More Info</button>
      </div>
      <div className="info-box">
        <h3>Laboratory Test Directory</h3>
        <p>Our test directory includes detailed information about available tests and services.</p>
        <button className="info-button" onClick={() => alert('Test Directory Coming Soon!')}>Test Directory</button>
      </div>
      <div className="info-box">
        <h3>Latest News & Stories</h3>
        <p>Find out the latest updates in medical care and St. Louis Clinic services.</p>
        <button className="info-button" onClick={() => alert('News Releases Coming Soon!')}>News Releases</button>
      </div>
    </section>
  );
}

export default InfoSection;
