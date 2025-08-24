import React from 'react';
import Home from './Home/Home';
// import Freebook from './Components/Freebook';
import { Route, Routes } from 'react-router-dom';
import Course from './Courses/Course';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import { useAuth } from './context/Authprovider';
import { Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Toaster } from 'react-hot-toast';
function App() {
  const [authuser, setAuthuser] = useAuth();
    // console.log(authuser)
  return (
    <>
     {/* <Home />
     <Courses /> */}
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Courses" element= {authuser? <Course />:<Navigate to="/Signup"/>} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Contact" element={<Contact/>} />
     </Routes>
     <Toaster />
    </>
  );
}

export default App
