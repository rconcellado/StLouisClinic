import React, { useEffect, useState } from 'react';
import { getAllAppointments } from '../services/appointmentService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm); // To hold the debounced search term
    const pageSize = 15;
    const navigate = useNavigate();

    // Debounce searchTerm and update it after 500ms delay
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);  // Update debounced term after delay
        }, 1000);

        return () => {
            clearTimeout(handler);  // Clear timeout if the search term changes before 500ms
        };
    }, [searchTerm]);

    // Fetch appointments when debouncedSearchTerm or currentPage changes
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                setLoading(true);
                const { appointments: fetchAppointments = [], totalPages: fetchTotalPages = 1 } = await getAllAppointments(currentPage, pageSize, debouncedSearchTerm);
                setAppointments(fetchAppointments);
                setFilteredAppointments(fetchAppointments);
                setTotalPages(fetchTotalPages);
            } catch (err) {
                setError('Error fetching appointments');
            } finally {
                setLoading(false);
            }
        };
        fetchAppointments();
    }, [currentPage, debouncedSearchTerm]); // Only triggers when the debounced search term changes

    const handlePageChange = (newPage) => setCurrentPage(newPage);

    // Search logic is now debounced, so handleSearch is no longer needed
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setCurrentPage(1);  // Reset to page 1 when search is triggered
        }
    };

    if (loading) return <div className="text-center">Loading appointments...</div>;
    if (error) return <div className="alert alert-danger text-center">{error}</div>;

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Appointments</h1>

            <div className="search-section">
                <div>
                    <input
                        type="text"
                        placeholder="Search all appointments..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}  // Update searchTerm on input change
                        onKeyDown={handleKeyDown}  // Trigger search on Enter key press
                        disabled={loading}
                    />
                    <button className="search-btn" disabled={loading}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="button-group">
                    <button className="add-patient-btn" onClick={() => navigate('/add-appointment')}>
                        Add Appointment
                    </button>
                </div>
            </div>

            <table className="table table-striped table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Appointment ID</th>
                        <th>Patient Name</th>
                        <th>Provider Name</th>
                        <th>Appointment Date</th>
                        <th>Status</th>
                        <th>Reason for Visit</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAppointments.length > 0 ? (
                        filteredAppointments.map(appointment => (
                            <tr key={appointment.appointmentId}>
                                <td>{appointment.appointmentId}</td>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.providerName}</td>
                                <td>{new Date(appointment.appointmentDate).toLocaleString()}</td>
                                <td>{appointment.appointmentStatus}</td>
                                <td>{appointment.reasonForVisit || 'N/A'}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No appointments found.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="pagination-controls">
                <button
                    disabled={currentPage === 1 || loading}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </button>
                <button
                    disabled={currentPage === totalPages || loading}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </button>
                <span>Page {currentPage} of {totalPages}</span>
            </div>
        </div>
    );
};

export default AppointmentList;
