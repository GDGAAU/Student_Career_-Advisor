import React, { useState } from "react";
import styles from "./header.module.css"; // Import CSS module

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
              <li><a href="features">Features</a></li>
              <li><a href="signup">Sign Up</a></li>
              <li><a href="contact">Contact</a></li>
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

