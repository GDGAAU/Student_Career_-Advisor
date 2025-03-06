import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import FormCareerRequest from "./components/FormCareerRequest.jsx";
import User from "./components/User.jsx";
import Footer from "./components/Footer.jsx";
import { LoginProvider } from "./contexts/LoginContext.jsx";

function App() {
  return (
    <LoginProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<User />} />
        <Route path="/form" element={<FormCareerRequest />} /> 
      </Routes>
      <Footer/>
    </Router>
    </LoginProvider>
  );
}

export default App;

