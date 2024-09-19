import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import the calendar component
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Import Header
import '../css/AppointmentPage.css'; // Import custom styles

function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date
  const [selectedTime, setSelectedTime] = useState(''); // State for selected time
  const navigate = useNavigate(); // Initialize useNavigate hook

  const availableTimes = [
    '1:20 PM', '1:40 PM', '1:50 PM', '2:00 PM', '2:10 PM', '2:20 PM', '2:40 PM'
  ];

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time.');
      return;
    }
    // Navigate to personal details page or next step
    navigate('/add-patient', { state: { selectedDate, selectedTime } });
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="appointment-page">
      {/* Include Header with isHomepage false */}
      {/* <Header isHomepage={false} /> */}

      <h1>Select appointment date and time</h1>

      {/* Calendar Section */}
      <div className="calendar-container">
        {/* <h2>Select appointment date</h2> */}
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
        />
      </div>

      {/* Time Selection Section */}
      <div className="time-selection">
        <h2>Select appointment time</h2>
        <div className="time-buttons">
          {availableTimes.map((time, index) => (
            <button
              key={index}
              className={`time-button ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons for navigation */}
      <div className="navigation-buttons">
        <button className="back-button" onClick={handleBack}>Back</button>
        <button className="next-button" onClick={handleNext}>Next: Personal Details</button>
      </div>
    </div>
  );
}

export default AppointmentPage;
