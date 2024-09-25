import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';  // Import the custom hook
import '../css/StaffLoginForm.css';
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
        <div className="staff-login-wrapper">
            <div className="staff-login-container">
                {/* Icon container for the top circle */}
                <div className="icon-container">
                    <img src="lock.png" alt="Login Icon" />
                </div>

                {/* Title for the form */}
                <h2>Login Now</h2>

                {/* Login form */}
                <form onSubmit={handleLogin}>
                    {/* Username Input Field */}
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Enter your Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* Password Input Field */}
                    <div className="input-container">
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Error Message */}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    {/* Sign-in button */}
                    <button type="submit" className="btn">Login</button>

                    {/* Links for Forgot Password and Create Account */}
                    {/*<div className="forgot-password">*/}
                    {/*    <a href="#" className="link-style">Forgot Password?</a>*/}
                    {/*</div>*/}
                    {/*<div className="create-account">*/}
                    {/*    <a href="#" className="link-style">Don't have an account?</a>*/}
                    {/*</div>*/}
                </form>
            </div>
        </div>
    );

}

export default LoginForm;
