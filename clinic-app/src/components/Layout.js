import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useUser } from '../contexts/UserContext';  // Import the custom hook

const Layout = () => {
    const { userRole, setUserRole } = useUser();  // Access userRole and setUserRole from the context

    useEffect(() => {
        const role = sessionStorage.getItem('userRole') || 'guest';  // Fetch from sessionStorage
        setUserRole(role);  // Update the state when the component mounts
        console.log("User Role in Layout after mounting:", role);  // Debugging log
    }, [setUserRole]);

    return (
        <div>
            <Header userRole={userRole} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
