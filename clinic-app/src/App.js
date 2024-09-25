import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import MainSection from './components/MainSection';
import InfoSection from './components/InfoSection';
import PackagesSection from './components/PackagesSection';
import LoginForm from './components/LoginForm'; // Patient/Guest Login
import StaffLoginForm from './components/StaffLoginForm'; // Staff Login
import AppointmentPage from './components/AppointmentPage'; // Appointment Page
import PatientForm from './components/PatientForm';
import StaffDashboard from './components/StaffDashboard';
import ProtectedStaffRoute from './components/ProtectedStaffRoute';
import { UserProvider } from './contexts/UserContext'; // Import UserProvider

import PatientList from './components/PatientList'; // Staff Login
import ProviderList from './components/ProviderList'; // Staff Login
import AppointmentList from './components/AppointmentList'; // Staff Login

import './css/Apps.css';

function App() {
    return (
        <UserProvider> {/* Wrap the app with UserProvider */}
            <Router>
                <Routes>
                    {/* Wrapping all routes with the Layout */}
                    <Route path="/" element={<Layout />}>
                        {/* Guest routes */}
                        <Route
                            index
                            element={
                                <>
                                    <MainSection />
                                    <InfoSection />
                                    <PackagesSection />
                                </>
                            }
                        />
                        {/* Login Routes */}
                        <Route path="login" element={<LoginForm />} />
                        <Route path="staff-login" element={<StaffLoginForm />} />
                        <Route path="appointment" element={<AppointmentPage />} />

                        {/* Protected staff routes */}
                        <Route path="staff-dashboard" element={<ProtectedStaffRoute><StaffDashboard /></ProtectedStaffRoute>} />

                        <Route path="patient-list" element={<ProtectedStaffRoute><PatientList /></ProtectedStaffRoute>} />
                        <Route path="provider-list" element={<ProtectedStaffRoute><ProviderList /></ProtectedStaffRoute>} />
                        <Route path="appointment-list" element={<ProtectedStaffRoute><AppointmentList /></ProtectedStaffRoute>} />

                        {/*<Route path="patients" element={<ProtectedStaffRoute><PatientForm /></ProtectedStaffRoute>} />*/}
                       
                        
                        <Route path="billing" element={<ProtectedStaffRoute><div>Billing</div></ProtectedStaffRoute>} />
                        <Route path="reports" element={<ProtectedStaffRoute><div>Reports</div></ProtectedStaffRoute>} />
                        <Route path="settings" element={<ProtectedStaffRoute><div>Settings</div></ProtectedStaffRoute>} />
                    </Route>
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
