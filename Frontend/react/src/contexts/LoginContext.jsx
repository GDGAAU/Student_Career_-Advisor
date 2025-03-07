import { useState, createContext } from "react";

const LoginContext = createContext(null);

function LoginProvider({ children }) {
  const [token,setToken] = useState("")
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
  async function login({ email, password }) {
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email:email, password:password }), // Fixed
      });
  
      const data = await response.json(); // Wait for response JSON
  
      if (response.ok) {
        setToken(data.access_token); // Assuming `setToken` is defined
        setUser(data); // Assuming `setUser` is defined
        return { user: data, status: 0 };
      } else {
        return { status: 1, message: "Your entered wrong password or email" };
      }
    } catch (error) {
      console.error("Error logging in", error);
      return { status: 1, message: "Something went wrong" };
    }
  }
  
  function logout(){
    setUser(null);
    setToken(null);
  }

  function editUserCredential({
    email,
    username,
    userType,
    fName,
    lName,
}){ 
  const updateUser = async ()=>{
    const response = await fetch("http://127.0.0.1:5000/",{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer  ${token}`
      },
      body:{
        emial:email,
        username:username,
        userType:userType,
        fName:fName,
        lName:lName,
      }
    }).then((response)=>{
      return {message:response.json(),status:(response.ok)?0:1}
    });
    if(response.status === 0){
      setUser(response)
    }
  } 
  updateUser();
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
      const result = await await fetch("http://127.0.0.1:5000/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName: fName,
          lName: lName,
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
      value={{ user, login, signup, logout, editUserCredential, token, userLoginData, setUserLoginData }}
    >
      {children}
    </LoginContext.Provider>
  );
}
export { LoginContext, LoginProvider };
