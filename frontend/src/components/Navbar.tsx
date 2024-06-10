import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a className="logo active" aria-current="page" href="/">Crises Response Management</a>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/incident-reporting">Incident Reporting</a></li>
                    <li><a href="/collaboration">Collaboration</a></li>
                    <li><a href="/communication-center">Communication Center</a></li>
                    <li><a href="/about">About</a></li> {/* Removed "pages/" */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
