import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import logo from '../assets/images/admin.webp'; 

const Sidebar = ({ onLogout }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={logo} alt="Project Logo" className="sidebar-logo" />
                <h2 className="sidebar-project-name">Admin Panel</h2>
            </div>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/cities">Cities</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/brands">Brands</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/models">Models</Link></li>
            </ul>
            <div className="sidebar-footer">
                <button className="logout-button" onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
