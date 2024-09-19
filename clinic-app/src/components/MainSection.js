import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

function MainSection() {
  const navigate = useNavigate(); // Initialize navigate hook

  // Handle button click to navigate to the login page
  const handleBookAppointment = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate('/login'); // Navigate to the /login route
  };

  return (
    <section className="main-section">
      {/* Banner image at the top of the page */}
      <div className="banner">
        <img src="clinicbanner.jpg" alt="Clinic Banner" className="banner-image" />
      </div>

      <div className="intro">
        <h2>Welcome to St. Louis Clinic</h2>
        <p>
          St. Louis Clinic is proud to offer a wide range of community health services, including those provided through our specialized clinics. We are committed to providing quality care to the community.
        </p>
        <a href="#" onClick={handleBookAppointment} className="appointment-button">Book an Appointment</a>
      </div>
    </section>
  );
}

export default MainSection;
