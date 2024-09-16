import React, { useEffect, useState } from 'react';
import { getProviders } from '../services/providerService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';
import '../css/ProviderList.css';  // Assuming you have a CSS file similar to the Patient List styling
import { useNavigate } from 'react-router-dom';

const ProviderList = () => {
    const [providers, setProviders] = useState([]);
    const [filteredProviders, setFilteredProviders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const pageSize = 15;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProviders = async () => {
            try {
                const { providers: fetchedProviders = [], totalPages: fetchedTotalPages = 1 } = await getProviders(currentPage, pageSize, searchTerm);
                setProviders(fetchedProviders);
                setFilteredProviders(fetchedProviders);
                setTotalPages(fetchedTotalPages);
            } catch (error) {
                console.error('There was an error fetching the providers!', error);
            }
        };
        fetchProviders();
    }, [currentPage, searchTerm]);

    // Handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleSearch = () => {
        setCurrentPage(1);
        if (searchTerm.trim() === '') {
            setFilteredProviders(providers);
        } else {
            const filtered = providers.filter((provider) =>
                provider.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                provider.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                provider.id.toString().includes(searchTerm)
            );
            setFilteredProviders(filtered);
        }
    };

    //Function to handle Enter key press for search
    const handleKeyDown = (e) => {
        if (e.key === 'Enter')
            handleSearch();
    };

    const handleEdit = (id) => {
        navigate(`/edit-provider/${id}`); // Navigate to the PatientForm with the patient's id
        console.log('Edit provider with ID:', id);
    };

    return (
        <div className="provider-list-container">
            <h1 className="provider-list-header">Providers</h1>

            {/* Search Section */}
            <div className="search-section">
                <div>
                    <input
                        type="text"
                        placeholder="Search all providers..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="button-group">
                    <button className="add-patient-btn" onClick={() => navigate('/add-provider')}>
                        Add Provider
                    </button>
                </div>
            </div>

            <ul className="provider-list">
                {filteredProviders.length > 0 ? (
                    filteredProviders.map((provider) => (
                            <li key={provider.id} className="provider-list-item">
                            <div className="provider-info">
                                <div className="edit-icon">
                                    <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(provider.id)} />
                                </div>
                                    <strong>Name:</strong> {provider.firstName} {provider.lastName} <br />
                                    <strong>Specialty:</strong> {provider.specialty} <br />
                                    <strong>Phone:</strong> {provider.phoneNumber} <br />
                                    <strong>Email:</strong> {provider.email} <br />
                                    <strong>Address:</strong> {provider.address} <br />
                                    <strong>Hire Date:</strong> {new Date(provider.hireDate).toLocaleDateString()} <br />
                                    <strong>Status:</strong> {provider.isActive ? "Active" : "Inactive"}
                                </div>
                            </li>
                        ))
                ) : (
                        <p>No providers found.</p>  // Show a message if no patients match the se
                ) }
            </ul>

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

};

export default ProviderList;
