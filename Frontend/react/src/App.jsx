import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUP.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import FormCareerRequest from "./components/FormCareerRequest.jsx";
import User from "./components/User.jsx";

function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<User />} />
        <Route path="/form" element={<FormCareerRequest />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;

