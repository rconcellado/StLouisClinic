import React, { createContext, useState, useContext } from 'react';

// Create a Context for userRole
const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
    const [userRole, setUserRole] = useState('guest');  // Default to 'guest'

    return (
        <UserContext.Provider value={{ userRole, setUserRole }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
