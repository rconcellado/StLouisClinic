import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/StaffLoginForm.css'; // Assuming you have a separate CSS file for staff login styling

function StaffLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Placeholder for authentication logic
    if (username === 'staffUser' && password === 'staffPass123') {
      // Store a token or role in local storage or session storage
      localStorage.setItem('role', 'staff');
      
      // Redirect to the staff dashboard or appropriate staff page
      navigate('/staff-dashboard');
    } else {
      alert('Invalid staff credentials');
    }
  };

  return (
    <div className="staff-login-container">
      <h2>Staff Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Log in</button>
      </form>
    </div>
  );
}

export default StaffLoginForm;
