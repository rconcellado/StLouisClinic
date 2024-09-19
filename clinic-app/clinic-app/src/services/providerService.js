import axios from 'axios';
import config from '../config/config';

const API_URL = config.PROVIDER_API_URL;

export const getProviders = async (pageNumber = 1, pageSize = 15, searchTerm = '') => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                pageNumber,
                pageSize,
                searchTerm
            }
        });
        return {
            providers: response.data.providers, // Directly return the array of providers
            totalPages: response.data.totalPages
        };
    } catch (error) {
        console.error('Error fetching providers:', error);
        throw error;
    }
};

// Add new provider
export const addProviders = async (provider) => {
    try {
        const response = await axios.post(API_URL, provider);
        return response.data;
    } catch (error) {
        console.error('Error adding provider:', error);
        throw error;
    }
};

export const updateProvider = async (id, provider) => {
    return await axios.put(`${API_URL}/${id}`, provider);
};

export const getProviderById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};