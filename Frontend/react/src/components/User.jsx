import React, { useState } from 'react';
import styles from './User.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function User() {
  // Set `isFlipped` to `true` to show the "Sign Up" form first
  const [isFlipped, setIsFlipped] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleFlip = () => {
    setIsFlipped(prevState => !prevState);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };



  //data from login
  const [formDataLogin, setFormDataLogin] = useState({
          emailOrUsername: "",
          password: "",
      });
  
      const [error, setError] = useState("");
  
      const handleChangeLogin = (e) => {
          setFormData({ ...formDataLogin, [e.target.name]: e.target.value });
      };
  
      const handleSubmitLogin = (e) => {
          e.preventDefault();
  
          // Mock user data from localStorage (replace with backend API in production)
          const users = JSON.parse(localStorage.getItem("users")) || [];
  
          const user = users.find(
              (u) => u.email === formDataLogin.emailOrUsername || u.username === formDataLogin.emailOrUsername
          );
  
          if (!user) {
              setError("User not found!");
              return;
          }
  
          if (user.password !== formDataLogin.password) {
              setError("Incorrect password!");
              return;
          }
  
          // alert("Login successful!");
          // window.location.href = "/dashboard"; // Redirect to dashboard
      };





  // data from signup
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
    <div className={styles.User}>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
         
          <div className={styles.front}>
            <h2 className={styles.h2}>Login</h2>
            <form className={styles.form} onSubmit={handleSubmitLogin}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email or Username:</label>
                <input
                    type="text"
                    name="emailOrUsername"
                    value={formData.emailOrUsername}
                    onChange={handleChangeLogin}
                    required
                    className={styles.input}
                />
            </div>
              <div>
                <label>Password:</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input
                    className={styles.input}
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formDataLogin.password}
                    onChange={handleChangeLogin}
                    required
                    style={{ paddingRight: '2.5rem' }}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: 'absolute',
                      right: '0.5rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      style={{ color: 'black' }}
                    />
                  </span>
                </div>
              </div>
              <button type="submit" className={styles.submitbtn}>Login</button>
            </form>
            <p>
              Don't have an account? <span className={styles.span} onClick={handleFlip}>Sign up</span>
            </p>
          </div>

          
          <div className={styles.back}>
            <h2 className={styles.h2}>Sign Up</h2>
            <form className={styles.form} onSubmit={handleSubmit}>

              <div className={styles.inputGroup}>
                <label>Username: </label>
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

              <div>
                <label>Password:</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input
                    onChange={handleChange}
                    className={styles.input}
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    style={{ paddingRight: '2.5rem' }}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: 'absolute',
                      right: '0.5rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      style={{ color: 'black' }}
                    />
                  </span>
                </div>
              </div>

              <div>
                <label>Repeat Password:</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input
                    className={styles.input}
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    style={{ paddingRight: '2.5rem' }}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: 'absolute',
                      right: '0.5rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      style={{ color: 'black' }}
                    />
                  </span>
                </div>
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

              <button type="submit" className={styles.submitbtn}>Sign up</button>
            </form>
            <p>
              Already have an account? <span className={styles.span} onClick={handleFlip}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
