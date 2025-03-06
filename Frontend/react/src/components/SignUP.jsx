import { useState } from "react";
import styles from "./Signup.module.css"; // Importing modular CSS

const SignUp = () => {

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    userType: "student",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h2 className={styles.signupTitle}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>User Type</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="student" className={styles.option}>Student</option>
              <option value="jobSeeker" className={styles.option}>Job Seeker</option>
              <option value="counselor" className={styles.option}>Career Counselor</option>
            </select>
          </div>

          <button type="submit" className={styles.signupButton}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
