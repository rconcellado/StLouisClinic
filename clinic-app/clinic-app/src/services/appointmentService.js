import axios from 'axios';
import config from '../config/config';

const API_URL = config.APPOINTMENT_API_URL;

export const getAppointmentDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    }catch (error) {
        console.error('Error fetching appointment details', error);
        throw error;
    }
};

export const getAllAppointments = async (pageNumber = 1, pageSize = 15, searchTerm = '') => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                pageNumber,
                pageSize,
                searchTerm
            }
        });
        return {
            appointments: response.data.paginatedAppointments.appointments,
            totalPages: response.data.totalPages
        } 
    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw error;
    }
};