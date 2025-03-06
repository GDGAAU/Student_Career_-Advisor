import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import JobSkills from './JobSkills.jsx';
import Analytics from './Analytics.jsx';
import './Dashboard.css';
import { FaHome, FaTools, FaChartLine } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <nav className="sidebar">
                <ul>
                    <li>
                        <NavLink to="/dashboard/home" activeClassName="active">
                            <FaHome className="icon" /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/job-skills" activeClassName="active">
                            <FaTools className="icon" /> Job Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/analytics" activeClassName="active">
                            <FaChartLine className="icon" /> Analytics
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="main-content">
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="job-skills" element={<JobSkills />} />
                    <Route path="analytics" element={<Analytics />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;