import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAppointmentDetails } from '../services/appointmentService'; // Import the service

const AppointmentDetailsPage = () => {
    // Get the appointmentId from the URL params
    const { appointmentId } = useParams();

    // State to hold the appointment details
    const [appointment, setAppointment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAppointmentDetails = async () => {
            try {
                // Fetch appointment details using the service
                const appointmentData = await getAppointmentDetails(appointmentId);
                setAppointment(appointmentData);
            } catch (err) {
                console.error('Error fetching appointment details:', err);
                setError('Failed to load appointment details.');
            } finally {
                setLoading(false);
            }
        };

        fetchAppointmentDetails();
    }, [appointmentId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {appointment ? (
                <div>
                    <h1>Appointment Details</h1>
                    <p><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
                    <p><strong>Time:</strong> {new Date(appointment.date).toLocaleTimeString()}</p>
                    <p><strong>Doctor:</strong> {appointment.doctorName}</p>
                    <p><strong>Status:</strong> {appointment.status}</p>
                    <p><strong>Notes:</strong> {appointment.notes || 'No notes available'}</p>
                </div>
            ) : (
                <p>No appointment details found.</p>
            )}
        </div>
    );
};

export default AppointmentDetailsPage;
