import axios from 'axios';
import config from '../config/config';

const API_URL = config.PATIENT_API_URL;  // API URL from the configuration file

// Fetch patients with pagination
export const getPatients = async (pageNumber = 1, pageSize = 15, searchTerm = '') => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                pageNumber,  // Send page number to the backend
                pageSize,     // Send page size to the backend
                searchTerm    // Send search term to the backend
            }
        });

        // Assuming the API returns both the patient data and total pages
        return {
            patients: response.data.patients,  // Patients list
            totalPages: response.data.totalPages  // Total pages for pagination
        };
    } catch (error) {
        console.error('Error fetching patients:', error);
        throw error;
    }
};

// Add new patient
export const addPatients = async (patient) => {
    try {
        const response = await axios.post(API_URL, patient);
        return response.data;
    } catch (error) {
        console.error('Error adding patient:', error);
        throw error;
    }
};

export const updatePatient = async (id, patient) => {
    try {
        return await axios.put(`${API_URL}/${id}`, patient);
    } catch (error) {
        console.error('Error updating patient:', error);
        throw error;
    }
};

export const getPatientById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};