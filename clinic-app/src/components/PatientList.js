import React, { useState, useEffect } from 'react';
import { getPatients } from '../services/patientService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../css/PatientList.css';
import { useNavigate } from 'react-router-dom';

function PatientList() {
    const [patients, setPatients] = useState([]);  // Initialize as an empty array
    const [filteredPatients, setFilteredPatients] = useState([]);  // Initialize as an empty array
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const pageSize = 15;
    const navigate = useNavigate();

    // Fetch paginated patients from the API
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const { patients: fetchedPatients = [], totalPages: fetchedTotalPages = 1 } = await getPatients(currentPage, pageSize, searchTerm);  // Ensure patients is always an array
                setPatients(fetchedPatients);
                setFilteredPatients(fetchedPatients);  // Set filteredPatients on initial load
                setTotalPages(fetchedTotalPages);
            } catch (error) {
                console.error('There was an error fetching the patients!', error);
            }
        };

        fetchPatients();
    }, [currentPage, searchTerm]);  // Re-fetch patients when the currentPage changes

    // Handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    // Handle search functionality
    const handleSearch = () => {
        setCurrentPage(1);  // Reset to page 1 when search is triggered
        if (searchTerm.trim() === '') {
            setFilteredPatients(patients);
        } else {
            const filtered = patients.filter((patient) =>
                patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                patient.id.toString().includes(searchTerm)
            );
            setFilteredPatients(filtered);
        }
    };

    // Function to handle Enter key press for search
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();  // Trigger search when Enter is pressed
        }
    }

    const handleEdit = (id) => {
        navigate(`/edit-patient/${id}`); // Navigate to the PatientForm with the patient's id
        console.log('Edit patient with ID:', id);
    };

    const handleAppointmentClick = (id) => {
        // Navigate to the appointment page of a specific patient
        navigate(`/appointments/${id}`);
    };

    return (
        <div className="patient-list-container">
            <h1 className="patient-list-header">Current Patients</h1>

            {/* Search Section */}
            <div className="search-section">
                <div>
                    <input
                        type="text"
                        placeholder="Search all patients..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}  // Trigger search on Enter key press
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="button-group">
                    <button className="add-patient-btn" onClick={() => navigate('/add-patient')}>
                        Add Patient
                    </button>
                    <button className="add-appointment-btn">
                        Add Appointment
                    </button>
                </div>
            </div>

            <div className="patient-grid">
                {filteredPatients.length > 0 ? (
                    filteredPatients.map(patient => (
                        <div key={patient.id} className="patient-card">
                            <div className="edit-icon">
                                <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(patient.id)} />
                            </div>
                            <div className="patient-info">
                                <h3>{patient.firstName} {patient.lastName}</h3>
                                <p>Patient No: {patient.id}</p>
                                <p>Phone: {patient.phoneNumber}</p>
                                <p>O/P: {Math.floor(Math.random() * 5000) + 1000}</p> {/* Generate random OP number */}
                            </div>
                            <div className="patient-actions">
                                {/*<button className="btn-appointment" onClick={handleAppointmentClick}>Appt.</button>*/}
                                <button className="btn-appointment">Appt.</button>
                                <button className="btn-visit">Visit</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No patients found.</p>  // Show a message if no patients match the search
                )}
            </div>

            {/* Pagination Controls */}
            <div className="pagination-controls">
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </button>
                
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </button>

                <span>Page {currentPage} of {totalPages}</span>
            </div>

        </div>
    );
}

export default PatientList;
