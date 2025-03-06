import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUP.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import FormCareerRequest from "./components/FormCareerRequest.jsx";
import User from "./components/User.jsx";
import Footer from "./components/Footer.jsx";
import Chatroom from "./components/chatroom.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<User />} />
        <Route path="/form" element={<FormCareerRequest />} /> 
        <Route path="/chatroom" element={<Chatroom/>} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/contact" element={<Contact/>} />

        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

