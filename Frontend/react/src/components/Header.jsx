import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css"; // Import CSS module
import User from "./User";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <li>
                    <Link to="/features">Features</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
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

