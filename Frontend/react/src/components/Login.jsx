import React, { useState } from "react";
import "./login.css"; // Using separate CSS file

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
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Email or Username:</label>
                    <input
                        type="text"
                        name="emailOrUsername"
                        value={formData.emailOrUsername}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Login</button>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </form>
        </div>
    );
};

export default Login;
