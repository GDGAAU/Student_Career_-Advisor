import React from 'react';
import styles from './Contact.module.css'; // Import modular CSS

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <h1 className={styles.contactTitle}>Contact Us</h1>
                <p className={styles.contactDescription}>
                    We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.
                </p>
                <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.formLabel}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className={styles.formInput}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            className={styles.formInput}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.formLabel}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            className={`${styles.formInput} ${styles.formTextarea}`}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`${styles.submitButton} ${styles.submitButtonHover}`}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

