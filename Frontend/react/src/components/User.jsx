import React, { useState } from 'react';
import styles from './User.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function User() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleFlip = () => {
    setIsFlipped(prevState => !prevState);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  // const toggleRepeatPasswordVisibility = () => {
  //   setShowRepeatPassword(prevState => !prevState);
  // };

  return (
    <div className={styles.User}>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
          <div className={styles.front}>
            <h2 className={styles.h2}>Login</h2>
            <form className={styles.form}>
              <div>
                <label>Email:</label>
                <input className={styles.input} type="email" name="email" required />
              </div>
              <div>
                <label>Password:</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input 
                    className={styles.input}
                    type={showPassword ? 'text' : 'password'} 
                    name="password" 
                    required 
                    style={{ paddingRight: '2.5rem' }} // Add some right padding to make room for the icon
                  />
                  <span 
                    onClick={togglePasswordVisibility} 
                    style={{ 
                      position: 'absolute', 
                      right: '0.5rem', 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center'
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
            <p>Don't have an account? <span className={styles.span} onClick={handleFlip}>Sign up</span></p>
          </div>
          <div className={styles.back}>
            <h2 className={styles.h2}>Sign Up</h2>
            <form className={styles.form}>
              <div>
                <label>User Name:</label>
                <input className={styles.input} type="text" name="name" required />
              </div>
              <div>
                <label>Email:</label>
                <input className={styles.input} type="email" name="email" required />
              </div>
              <div>
                <label>Password:</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input 
                    className={styles.input}
                    type={showPassword ? 'text' : 'password'} 
                    name="password" 
                    required 
                    style={{ paddingRight: '2.5rem' }} // Add some right padding to make room for the icon
                  />
                  <span 
                    onClick={togglePasswordVisibility} 
                    style={{ 
                      position: 'absolute', 
                      right: '0.5rem', 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center'
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
        style={{ paddingRight: '2.5rem' }} // Add some right padding to make room for the icon
      />
      <span 
        onClick={togglePasswordVisibility} 
        style={{ 
          position: 'absolute', 
          right: '0.5rem', 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
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
                <label>Phone:</label>
                <input className={styles.input} type="text" name="phone" required />
              </div>
              <div>
                <label>Service:</label>
                <input className={styles.input} type="text" name="service" required />
              </div>
              <button type="submit" className={styles.submitbtn}>Sign up</button>
            </form>
            <p>Already have an account? <span className={styles.span} onClick={handleFlip}>Login</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;