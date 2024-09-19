import React, { useEffect, useState } from 'react';
import { addProviders, getProviderById, updateProvider } from '../services/providerService';
import { toast, ToastContainer } from 'react-toastify';
import '../css/ProviderForm.css'; // Link to your CSS file for styling
import { useNavigate, useParams } from 'react-router-dom';

const ProviderForm = () => {
    const [provider, setProvider] = useState({
        firstName: '',
        lastName: '',
        specialty: '',
        phoneNumber: '',
        email: '',
        address: '',
        hireDate: '',
        isActive: '',
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchProviderData = async () => {
                try {
                    const fetchProvider = await getProviderById(id);

                    const formattedHireDate = fetchProvider.hireDate
                        ? new Date(fetchProvider.hireDate).toISOString().split('T')[0]
                        : '';

                    setProvider({
                        id: fetchProvider.id,
                        firstName: fetchProvider.firstName,
                        lastName: fetchProvider.lastName,
                        specialty: fetchProvider.specialty,
                        phoneNumber: fetchProvider.phoneNumber,
                        email: fetchProvider.email,
                        address: fetchProvider.address,
                        hireDate: formattedHireDate,
                        isActive: fetchProvider.isActive,
                    });
                } catch (error) {
                    console.error('Error fetching provider data:', error);
                    toast.error('Error fetching provider data');
                }
            };

            fetchProviderData();
        }
    }, [id]);
        

    const handleChange = (e) => {
        setProvider({
            ...provider,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formattedProvider = {
                ...provider,
                hireDate: new Date(provider.hireDate).toISOString().split('T')[0] // Converts to YYYY-MM-DD format
            };
            if (id) {
                await updateProvider(id, formattedProvider);
                toast.success('Provider updated successfully');
            } else {
                await addProviders(provider);
                toast.success('Provider added successfully');
            }

            setTimeout(() => {
                navigate('/providers');
            }, 2000);
        } catch (error) {
            console.error(id ? 'Error updating provider:' : 'Error adding provider:', error);
            toast.error(id ? 'Error updating provider' : 'Error adding provider');
        }
    };

    const handleBackToList = () => {
        navigate('/providers');
    };

    return (
        <div className="provider-form-container">
            <ToastContainer />
            <h2>{id ? 'Edit Provider' : 'Add New Provider'}</h2>
            <form onSubmit={handleSubmit} className="provider-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={provider.firstName}
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
                        value={provider.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="specialty">Specialty</label>
                    <input
                        type="text"
                        name="specialty"
                        value={provider.specialty}
                        onChange={handleChange}
                        placeholder="Enter specialty"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={provider.phoneNumber}
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
                        value={provider.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={provider.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="hireDate">Hire Date</label>
                    <input
                        type="date"
                        name="hireDate"
                        value={provider.hireDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="isActive">Status</label>
                    <select
                        name="isActive"
                        value={provider.isActive}
                        onChange={(e) => setProvider({ ...provider, isActive: e.target.value === "true" })}
                        required
                    >
                        <option value="">Select status</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                    </select>
                </div>

                <div className="button-group">
                    <button type="submit" className="submit-btn">{id ? 'Update Provider' : 'Add Provider'}</button>
                    <button type="button" className="cancel-btn" onClick={handleBackToList}>Back to List</button>
                </div>
            </form>
        </div>
    );
};

export default ProviderForm;
