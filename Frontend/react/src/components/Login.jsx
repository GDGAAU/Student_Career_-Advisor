import React, { useState } from "react";
import styles from "./login.module.css"; // Importing modular CSS

const Login = () => {
    const [formData, setFormData] = useState({
        emailOrUsername: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock user data from localStorage (replace with backend API in production)
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (u) => u.email === formData.emailOrUsername || u.username === formData.emailOrUsername
        );

        if (!user) {
            setError("User not found!");
            return;
        }

        if (user.password !== formData.password) {
            setError("Incorrect password!");
            return;
        }

        // alert("Login successful!");
        // window.location.href = "/dashboard"; // Redirect to dashboard
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Email or Username:</label>
                    <input
                        type="text"
                        name="emailOrUsername"
                        value={formData.emailOrUsername}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                {error && <p className={styles.errorMessage}>{error}</p>}
                <button className={styles.button} type="submit">Login</button>
                <p className={styles.footerText}>
                    Don't have an account? <a href="/signup" className={styles.link}>Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default Login;


