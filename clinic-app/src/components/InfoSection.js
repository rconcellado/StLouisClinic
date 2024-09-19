import React from 'react';

function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-box">
        <h3>Join Us</h3>
        <p>Join our team and help us provide excellent medical care. Explore career opportunities at St. Louis Clinic.</p>
        <a href="#">More Info</a>
      </div>
      <div className="info-box">
        <h3>Laboratory Test Directory</h3>
        <p>Our test directory includes detailed information about available tests and services.</p>
        <a href="#">Test Directory</a>
      </div>
      <div className="info-box">
        <h3>Latest News & Stories</h3>
        <p>Find out the latest updates in medical care and St. Louis Clinic services.</p>
        <a href="#">News Releases</a>
      </div>
    </section>
  );
}

export default InfoSection;
