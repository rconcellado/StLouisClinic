import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../css/LoginForm.css'; // Import the CSS file for styling

function LoginForm() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle the Book as Guest button click
  const handleBookAsGuest = () => {
    navigate('/appointment'); // Navigate to the appointment page
  };

  return (
    <div className="login-container">
      {/* Login Form Section */}
      <div className="login-box">
        <form>
          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="btn">Sign in</button>
          <button className="link-style">Forgot Password</button>

          {/* Book as Guest Button */}
          {/* <button type="button" className="btn-outline" onClick={handleBookAsGuest}>
            Book as Guest
          </button> */}
        </form>
      </div>

      {/* Book as Guest and Info Section */}
      <div className="guest-info-box">
        <p>
          An account lets you <strong>view history</strong>, <strong>manage contact info</strong>, and <strong>make family bookings</strong>,
          or you can book as a guest. You may also book by phone at 1-877-702-4486.
        </p>
        <div className="btn-group">
          <button className="btn-outline">Create Account</button>
          <button className="btn-outline" onClick={handleBookAsGuest}>
            Book as Guest
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
