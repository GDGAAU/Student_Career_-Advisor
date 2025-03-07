import React, { useContext, useState } from "react";
import styles from "./User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

function User() {
  // Set `isFlipped` to `true` to show the "Sign Up" form first
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [wrongCredential, setWrongCredential] = useState(false);
  const [differentPassword, setDifferentPassword] = useState(false);
  const { user, login, signup, userLoginData, setUserLoginData } =
    useContext(LoginContext);
  const handleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  //data from login

  const handleChangeLogin = (e) => {
    switch (e.target.name) {
      case "email": {
        setUserLoginData((prev) => {
          return {
            ...prev,
            email: e.target.value,
          };
        });
        break;
      }
      case "password": {
        setUserLoginData((prev) => {
          return {
            ...prev,
            password: e.target.value,
          };
        });
        break;
      }
      case "confirmPassword": {
        setUserLoginData((prev) => {
          return {
            ...prev,
            confirmPassword: e.target.value,
          };
        });
        break;
      }
      case "username": {
        setUserLoginData((prev) => {
          return {
            ...prev,
            username: e.target.value,
          };
        });
        break;
      }
      case "firstName": {
        setUserLoginData((prev) => {
          return {
            ...prev,
            fName: e.target.value,
          };
        });
        break;
      }
      case "lastName": {
        setUserLoginData((prev) => {
          return {
            ...prev,
            lName: e.target.value,
          };
        });
        break;
      }
      case "userType": {
        setUserLoginData((prev) => {
          return {
            ...prev,
            userType: e.target.value,
          };
        });
        break;
      }
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const newUser = login({
      email: userLoginData.email,
      password: userLoginData.password,
    });
    if (newUser.status === 0) {
      navigate("/");
    } else {
      setWrongCredential(true);
    }
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    if (userLoginData.confirmPassword === userLoginData.password) {
      console.log(JSON.stringify(userLoginData))
      signup(userLoginData);
    } else {
      setDifferentPassword(true);
      return;
    }
    if (user) {
      navigate("/");
    }
  };

  return (
    <div className={styles.User}>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
          <div className={styles.front}>
            <h2 className={styles.h2}>Login</h2>
            <form className={styles.form} onSubmit={handleSubmitLogin}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email or Username:</label>
                <input
                  type="text"
                  name="email"
                  value={userLoginData.email}
                  onChange={handleChangeLogin}
                  required
                  className={styles.input}
                />
              </div>
              <div>
                <label>Password:</label>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    className={styles.input}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={userLoginData.password}
                    onChange={handleChangeLogin}
                    required
                    style={{ paddingRight: "2.5rem" }}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "0.5rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {wrongCredential && (
                      <p style={{ color: "red" }}>
                        You entered wrong email or password!
                      </p>
                    )}
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      style={{ color: "black" }}
                    />
                  </span>
                </div>
              </div>
              <button type="submit" className={styles.submitbtn}>
                Login
              </button>
            </form>
            <p>
              Don't have an account?{" "}
              <span className={styles.span} onClick={handleFlip}>
                Sign up
              </span>
            </p>
          </div>

          <div className={styles.back}>
            <h2 className={styles.h2}>Sign Up</h2>
            <form className={styles.form} onSubmit={handleSubmitSignUp}>
              <div className={styles.inputGroup}>
                <label>Username: </label>
                <input
                  type="text"
                  name="username"
                  value={userLoginData.username}
                  onChange={handleChangeLogin}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={userLoginData.email}
                  onChange={handleChangeLogin}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={userLoginData.fName}
                  onChange={handleChangeLogin}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={userLoginData.lName}
                  onChange={handleChangeLogin}
                  className={styles.input}
                  required
                />
              </div>

              <div>
                <label>Password:</label>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    onChange={handleChangeLogin}
                    className={styles.input}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={userLoginData.password}
                    required
                    style={{ paddingRight: "2.5rem" }}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "0.5rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      style={{ color: "black" }}
                    />
                  </span>
                </div>
              </div>

              <div>
                <label>Repeat Password:</label>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    className={styles.input}
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={userLoginData.confirmPassword}
                    onChange={handleChangeLogin}
                    required
                    style={{ paddingRight: "2.5rem" }}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "0.5rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {differentPassword && (
                      <p style={{ color: "red" }}>
                        Passwords must be the same!
                      </p>
                    )}
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      style={{ color: "black" }}
                    />
                  </span>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>User Type</label>
                <select
                  name="userType"
                  value={userLoginData.userType}
                  defaultValue={"student"}
                  onChange={handleChangeLogin}
                  className={styles.input}
                >
                  <option value="student" className={styles.option}>
                    Student
                  </option>
                  <option value="job seeker" className={styles.option}>
                    Job Seeker
                  </option>
                  <option value="counselor" className={styles.option}>
                    Career Counselor
                  </option>
                </select>
              </div>

              <button type="submit" className={styles.submitbtn}>
                Sign up
              </button>
            </form>
            <p>
              Already have an account?{" "}
              <span className={styles.span} onClick={handleFlip}>
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
