import React, { useState, useEffect } from 'react';
import { addPatients, getPatientById, updatePatient } from '../services/patientService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/PatientForm.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';  // Import useLocation to check the state

function PatientForm() {
    const [patient, setPatient] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        phoneNumber: '',
        email: '',
    });

    const navigate = useNavigate();
    const { id } = useParams();  // Get the patient ID from the URL if it's present (Edit mode)
    const location = useLocation();  // To get the state passed from the appointment page

    // Fetch patient data if in edit mode
    useEffect(() => {
        if (id) {
            const fetchPatientData = async () => {
                try {
                    const fetchedPatient = await getPatientById(id);
                    // Convert dateOfBirth to YYYY-MM-DD format
                    const formattedDateOfBirth = fetchedPatient.dateOfBirth
                        ? new Date(fetchedPatient.dateOfBirth).toISOString().split('T')[0]
                        : '';

                    setPatient({
                        id: fetchedPatient.id,
                        firstName: fetchedPatient.firstName,
                        lastName: fetchedPatient.lastName,
                        dateOfBirth: formattedDateOfBirth,  // Pre-fill with formatted date
                        gender: fetchedPatient.gender,
                        address: fetchedPatient.address,
                        phoneNumber: fetchedPatient.phoneNumber,
                        email: fetchedPatient.email,
                    });
                } catch (error) {
                    console.error('Error fetching patient data:', error);
                    toast.error('Error fetching patient data');
                }
            };

            fetchPatientData();
        }
    }, [id]);  // This useEffect will run only if there's an `id`

    const handleChange = (e) => {
        setPatient({
            ...patient,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Convert dateOfBirth to the format the server expects (e.g., MM/DD/YYYY)
            const formattedPatient = {
                ...patient,
                dateOfBirth: new Date(patient.dateOfBirth).toISOString().split('T')[0] // Converts to YYYY-MM-DD format
            };
            if (id) {
                await updatePatient(id, formattedPatient);
                toast.success('Patient updated successfully');
            } else {
                await addPatients(patient);
                toast.success('Patient added successfully');
            }

            setTimeout(() => {
                navigate('/patients');
            }, 2000);
        } catch (error) {
            // Check if it's a duplicate error
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data);  // Show the error from the backend
            } else {
                toast.error('Error adding patient');
            }
        }
    };

    const handleBackToList = () => {
        navigate('/patients');
    };

    // Determine the title based on whether state from the appointment page is passed or if it's an edit mode
    const pageTitle = location.state && location.state.selectedDate && location.state.selectedTime
        ? 'Personal Details'
        : (id ? 'Edit Patient' : 'Add New Patient');

    return (
        <div className="form-container">
            <ToastContainer />
            <h2>{pageTitle}</h2>  {/* Conditionally render the title based on the state */}
            <form onSubmit={handleSubmit} className="patient-form">

                <div className="form-group">
                    <label htmlFor="id">Patient ID</label>
                    <input
                        type="text"
                        name="id"
                        value={patient.id}
                        readOnly // This makes the field read-only
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={patient.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={patient.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={patient.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                        name="gender"
                        value={patient.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={patient.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={patient.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={patient.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="button-group">
                    <button type="submit" className="submit-btn">{id ? 'Update Patient' : 'Add Patient'}</button>
                    <button type="button" className="back-btn" onClick={handleBackToList}>Back to List</button>
                </div>
            </form>
        </div>
    );
}

export default PatientForm;
