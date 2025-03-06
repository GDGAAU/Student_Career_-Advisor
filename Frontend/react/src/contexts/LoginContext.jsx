import { useState, createContext } from "react";

const LoginContext = createContext(null);

function LoginProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    username: "",
    userType: "",
    password: "",
    confirmPassword: "",
    fName: "",
    lName: "",
  });
  function login({ email, password }) {
    const fetchUser = async () => {
      const result = await fetch(
        `/login?email=${email}&password=${password}`
      ).then((response) => {
        response.json();
      });
      if (result.ok) {
        return { user: result, status: 0 };
      } else {
        return { status: 1, message: "Your entered wrong password or email" };
      }
    };

    if (fetchUser.status == 0) {
      setUser(fetchUser.user);
    }
    return fetchUser;
  }
  function signup({
    email,
    username,
    userType,
    password,
    confirmPassword,
    fName,
    lName,
  }) {
    const createUser = async () => {
      const result = await await fetch("/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: fName,
          lastName: lName,
          username: username,
          email: email,
          password: password,
          userType: userType,
        }),
      }).then((response) => response.json());

      return result;
    };
    if (password === confirmPassword) {
      setUser(createUser());
    }
  }

  return (
    <LoginContext.Provider
      value={{ user, login, signup, userLoginData, setUserLoginData }}
    >
      {children}
    </LoginContext.Provider>
  );
}
export { LoginContext, LoginProvider };
