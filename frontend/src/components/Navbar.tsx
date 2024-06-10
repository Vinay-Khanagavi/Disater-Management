import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Make sure to import Link

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo active" aria-current="page">Crises Response Management</Link>
                <ul className="nav-links">

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/report-incident">Incident Reporting</Link></li>
                    <li><Link to="/collaborate">Collaboration</Link></li>
                    <li><Link to="/contact">Communication Center</Link></li>
                    <li><Link to="/about-us">About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
