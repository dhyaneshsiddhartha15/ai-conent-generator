import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Users/Register";
import Login from "./Components/Users/Login";
import Dashboard from "./Components/Users/UserDashboard";
import PublicNavbar from "./Components/Navbar/PublicNavbar";
import PrivateNavbar from "./Components/Navbar/PrivateNavbar";
import Home from "./Components/Home/Home";
import { useAuth } from "./AuthContext/AuthContext";
import AuthRoute from "./Components/AuthRoute/AuthRoute";
import GenerateContent from "./Components/ContentGeneration/GenerateContent";
import ContentGenerationHistory from "./Components/Users/ContentGeneration/ContentGenerationHistory";
import HomeFeatures from "./Components/Home/HomeFeatures";
import AboutUs from "./Components/About/AboutUs";
const App = () => {
const {isAuthenticated}=useAuth();
  return (
    <>
      <BrowserRouter>
      {isAuthenticated? <PrivateNavbar/>:<PublicNavbar/>}
     
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/features" element={<HomeFeatures/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/" element={<Home/>}/>
         <Route path="/register" element={<Registration/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/generate-content" element={<AuthRoute>
          <GenerateContent/>
          </AuthRoute>} />
          <Route path="/history" element={<AuthRoute>
            <ContentGenerationHistory/>
          </AuthRoute>} />
          {/* <Route path="/history" element=
          {<ContentGenerationHistory/>

          }/>
     */}
         <Route path="/dashboard" element={<AuthRoute>
          <Dashboard/>
          </AuthRoute>} />
     
          

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
