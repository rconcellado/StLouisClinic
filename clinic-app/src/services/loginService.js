import axios from 'axios';
import config from '../config/config';

const API_URL = config.LOGIN_API_URL;  // API URL from the configuration file

const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/validate`, {
            username: username,
            password: password
        });
        console.log('API response:', response.data);  // Log the response for debugging

        // Assuming the backend returns an object like { isValid: true, role: 'staff' }
        return response.data;
    } catch (error) {
        console.error("Error during login attempt:", error);
        return { isValid: false, role: null };
    }
};

export default {
    login
};
