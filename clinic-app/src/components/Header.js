import React from 'react'; 
import { Link, useLocation } from 'react-router-dom'; // Use Link for navigation

function Header() {
  const location = useLocation(); // Get the current path

  // Determine if the user is on the homepage or another route
  // const isHomepage = location.pathname === '/';

  return (
    <header className="header-container">
      {/* <h1>{isHomepage ? 'Welcome to St. Louis Clinic' : 'St. Louis Clinic Management System'}</h1> */}
      <nav>
        <ul>
          {/* Home Link should navigate to the root path */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>

          {/* Add Patient/Guest Login Link */}
          <li><Link to="/login">Patient/Guest Login</Link></li>

          {/* Add Staff Login Link */}
          <li><Link to="/staff-login">Staff Login</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
