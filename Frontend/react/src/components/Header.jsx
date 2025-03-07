import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import styles from "./header.module.css"; // Import CSS module
import { LoginContext } from "../contexts/LoginContext";

const Header = () => {
  const {user}=useContext(LoginContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <h1>AI Career Advisor</h1>
          </div>
          <div className={`${styles.navMenu} ${isMenuOpen ? styles.open : ""}`}>
            <ul className={styles.navLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/chat">Chat</Link></li>
              <li><Link to="/analytics">Analytics</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <div className={styles.authLinks}>
                {user ? (
                  <li><Link to="/profile"><FaUserCircle className={styles.profileIcon} /></Link></li>
                ) : (
                  <>
                    <li><Link to="/signup">Sign Up/Log In</Link></li>
                  </>
                )}
              </div>
            </ul>
          </div>
          <button className={styles.menuToggle} onClick={toggleMenu}>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;