import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Global International School</h1>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/achievers">Achievers</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/application-form">Application Form</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;