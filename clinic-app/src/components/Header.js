import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';  // Import the custom hook

const Header = () => {
    const { userRole, setUserRole } = useUser();  // Access the global userRole state
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();  // Prevent any default behavior
        // Clear session storage or any authentication tokens
        sessionStorage.removeItem('userRole');
        setUserRole('guest');  // Update the role to guest
        navigate('/');  // Redirect to homepage
    };

    return (
        <header>
            <nav>
                <ul style={{ listStyleType: 'none', display: 'flex', gap: '15px', alignItems: 'center' }}>
                    {userRole === 'staff' ? (
                        <>
                            <li><Link to="/staff-dashboard">Dashboard</Link></li>
                            <li><Link to="/patient-list">Patients</Link></li>
                            <li><Link to="/provider-list">Providers</Link></li>
                            <li><Link to="/appointment-list">Appointments</Link></li>
                            <li><Link to="/billing">Billing</Link></li>
                            <li><Link to="/reports">Reports</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                            {/* Logout link */}
                            <li>
                                <a href="/" onClick={handleLogout} style={{ color: '#00aaff', textDecoration: 'none' }}>
                                    Logout
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/feedback">Feedback</Link></li>
                            <li><Link to="/login">Patient/Guest Login</Link></li>
                            <li><Link to="/staff-login">Staff Login</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
