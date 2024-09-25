import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedStaffRoute = ({ children }) => {
    const isAuthenticated = true; // Simulate authentication status
    const userRole = 'staff'; // Simulate role check

    // Redirect to login if not authenticated or not a staff user
    if (!isAuthenticated || userRole !== 'staff') {
        alert("User not authenticated or not a staff member! Redirecting to login.");
        return <Navigate to="/login" />;
    }

    // If the user is authenticated and a staff member, allow access
    return children;
};

export default ProtectedStaffRoute;
