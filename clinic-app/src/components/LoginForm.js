import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';  // Import the custom hook
import '../css/LoginForm.css';
import LoginService from '../services/loginService';

function LoginForm() {
    const { setUserRole } = useUser();  // Use the custom hook to access setUserRole
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { isValid, role } = await LoginService.login(username, password);
            if (isValid) {
                setUserRole(role);  // Update the global userRole
                navigate(role === 'staff' ? '/staff-dashboard' : '/dashboard');
            } else {
                setErrorMessage('Invalid username or password');
            }
        } catch (error) {
            setErrorMessage('An error occurred while logging in. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="btn">Sign in</button>
                    <button className="link-style">Forgot Password</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
