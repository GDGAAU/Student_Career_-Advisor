import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; 2025 AI Career Advisor. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer