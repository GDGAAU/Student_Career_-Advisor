import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import JobSkills from './JobSkills.jsx';
import Analytics from './Analytics.jsx';
import styles from './Dashboard.module.css';
import { FaHome, FaTools, FaChartLine } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <nav className={styles.sidebar}>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarItem}>
                        <NavLink
                            to="/dashboard/home"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                        >
                            <FaHome className={styles.icon} /> Home
                        </NavLink>
                    </li>
                    <li className={styles.sidebarItem}>
                        <NavLink
                            to="/dashboard/job-skills"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                        >
                            <FaTools className={styles.icon} /> Job Skills
                        </NavLink>
                    </li>
                    <li className={styles.sidebarItem}>
                        <NavLink
                            to="/dashboard/analytics"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                        >
                            <FaChartLine className={styles.icon} /> Analytics
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.mainContent}>
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

