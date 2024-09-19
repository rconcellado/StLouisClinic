import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedStaffRoute({ children }) {
  const role = localStorage.getItem('role'); // Get user role
  return role === 'staff' ? children : <Navigate to="/staff-login" />;
}

export default ProtectedStaffRoute;
