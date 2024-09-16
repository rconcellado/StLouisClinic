import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';  // This includes your collapsible sidebar
import HomePage from './components/HomePage'; 

import PatientList from './components/PatientList';
import PatientForm from './components/PatientForm';
import ProviderForm from './components/ProviderForm';

import ProviderList from './components/ProviderList';

import AppointmentDetailsPage from './components/AppointmentDetailsPage';

import AppointmentList from './components/AppointmentList';


function App() {
    return (
        <Router>
            <div className="App">
                {/* Wrapping all routes inside the Dashboard (which includes the sidebar) */}
                <Dashboard>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/patients" element={<PatientList />} />
                        <Route path="/add-patient" element={<PatientForm />} /> {/* Add patient route */}
                        <Route path="/edit-patient/:id" element={<PatientForm />} /> {/* Edit patient route with ID */}

                        <Route path="/providers" element={<ProviderList />} />
                        <Route path="/add-provider" element={<ProviderForm />} /> {/* Add provider route */}
                        <Route path="/edit-provider/:id" element={<ProviderForm />} /> {/* Edit patient route with ID */}

                        <Route path="/appointments" element={<AppointmentList />} />
                        <Route path="/appointments/:appointmentId" element={<AppointmentDetailsPage />} />
                        {/* Future routes can go here */}
                    </Routes>
                </Dashboard>
            </div>
        </Router>
    );
}

export default App;
