import { useState, createContext, useEffect } from "react";

const LoginContext = createContext(null);

function LoginProvider({ children }) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    username: "",
    userType: "student",
    password: "",
    confirmPassword: "",
    fName: "",
    lName: "",
  });
  useEffect(() => {
    const result = fetch("/get-user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(result.json);

    return () => {
      setUser(null);
    };
  }, [token]);

  async function login({ email, password }) {
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }), // Fixed
      });
      const data = await response.json(); // Wait for response JSON
      console.log("access token: " ,data)
      if (response.ok) {
        setToken(data.access_token); 
        console.log("the token",data.access_token)
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error logging in", error);
      return { status: 1, message: "Something went wrong" };
    }
  }

  function logout() {
    setUser(null);
    setToken(null);
  }

  function editUserCredential({ email, username, userType, fName, lName }) {
    const updateUser = async () => {
      const response = await fetch("http://127.0.0.1:5000/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${token}`,
        },
        body: {
          emial: email,
          username: username,
          userType: userType,
          fName: fName,
          lName: lName,
        },
      }).then((response) => {
        return { message: response.json(), status: response.ok ? 0 : 1 };
      });
      if (response.status === 0) {
        setUser(response);
      }
    };
    updateUser();
  }
  async function signup({
    email,
    username,
    userType,
    password,
    confirmPassword,
    fName,
    lName,
  }) {
    if (password !== confirmPassword) {
      
      return {status:1, "message":"Passwords do not match!"}; // Early exit if passwords mismatch
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName,
          lName,
          username,
          email,
          password,
          userType,
        }),
      });

      if (response.status === 400) {
        return {status: 1, message: "User already exists.Enter another email or username."}
        }

      const result = await response.json();
      console.log("Response data:", result);
      setToken(result.access_token); // Update state with the actual result
      return {status:0, message:"User successfully created"}
    } catch (error) {
      console.error("Signup failed:", error);
    }
  }

  return (
    <LoginContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        editUserCredential,
        token,
        userLoginData,
        setUserLoginData,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
export { LoginContext, LoginProvider };
