import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.logo}>Mess Management</li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-student">Add Student</Link>
                </li>
                <li>
                    <Link to="/take-attendance">Take Attendance</Link>
                </li>
                <li>
                    <Link to="/meals">Meals</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

