import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import FormCareerRequest from "./components/FormCareerRequest.jsx";
import User from "./components/User.jsx";
import Footer from "./components/Footer.jsx";
import { LoginProvider } from "./contexts/LoginContext.jsx";

import Chatroom from "./components/chatroom.jsx";
import Contact from "./components/Contact.jsx";
import Profile from "./components/Profile.jsx";
import Analytics from "./components/Analytics.jsx";

function App() {
  return (
    <LoginProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<User />} />
        <Route path="/consultance" element={<FormCareerRequest />} /> 
        <Route path="/chat" element={<Chatroom />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
      <Footer/>
    </Router>
    </LoginProvider>



  );
}

export default App;

