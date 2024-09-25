import React, { useEffect } from 'react';

function StaffDashboard() {
    useEffect(() => {
        console.log("Staff Dashboard Rendered");
    }, []);

    return (
        <div>
            <h1>Staff Dashboard</h1>
            <p>Welcome to the clinic staff dashboard. Here you can manage appointments, view patient records, and more.</p>
        </div>
    );
}

export default StaffDashboard;
