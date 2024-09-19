import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import InfoSection from './components/InfoSection';
import PackagesSection from './components/PackagesSection';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm'; // Patient/Guest Login
import StaffLoginForm from './components/StaffLoginForm'; // Staff Login
import AppointmentPage from './components/AppointmentPage'; // Appointment Page
import PatientForm from './components/PatientForm';

import StaffDashboard from './components/StaffDashboard';
import ProtectedStaffRoute from './components/ProtectedStaffRoute';

import './css/Apps.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header included for navigation */}
        <div className="content"> {/* This will push the footer down */}
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={
              <>
                <MainSection />
                <InfoSection />
                <PackagesSection />
              </>
            } />

            {/* Patient/Guest Login Route */}
            <Route path="/login" element={<LoginForm />} />

            {/* Staff Login Route */}
            <Route path="/staff-login" element={<StaffLoginForm />} />

            {/* Appointment Page Route */}
            <Route path="/appointment" element={<AppointmentPage />} />

            {/* Your routes for staff */}
            <Route path="/staff-dashboard" element={<ProtectedStaffRoute><StaffDashboard /></ProtectedStaffRoute>} />

            <Route path="/add-patient" element={<PatientForm />} /> {/* Add patient route */}
          </Routes>
        </div>
        <Footer /> {/* Footer always stays at the bottom */}
      </div>
    </Router>
  );
}

export default App;
