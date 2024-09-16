import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';  // Link to the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUserNurse, faClock, faFileInvoice, faChartLine, faCog }
    from '@fortawesome/free-solid-svg-icons';

function Dashboard({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="dashboard-container">
            <div className="content-wrapper">
                {/* Sidebar Section */}
                <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
                    <div className="logo-container">
                        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="St. Louis Logo" className="logo-image" />
                    </div>
                    <ul>
                        <li onClick={() => handleNavigation('/')}><FontAwesomeIcon icon={faHome} />Home</li>
                        <li onClick={() => handleNavigation('/patients')}><FontAwesomeIcon icon={faUser} />Patients</li>
                        <li onClick={() => handleNavigation('/providers')}><FontAwesomeIcon icon={faUserNurse} />Providers</li>
                        <li onClick={() => handleNavigation('/appointments')}><FontAwesomeIcon icon={faClock} />Appointments</li>
                        <li><FontAwesomeIcon icon={faFileInvoice} />Billing</li>
                        <li><FontAwesomeIcon icon={faChartLine} />Reports</li>
                        <li><FontAwesomeIcon icon={faCog} />Settings</li>
                    </ul>
                </div>

                {/* Main Content Section */}
                <div className="main-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
