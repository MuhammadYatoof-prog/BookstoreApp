import React from 'react';
import Home from './Home/Home';
// import Freebook from './Components/Freebook';
import { Route, Routes } from 'react-router-dom';
import Course from './Courses/Course';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
function App() {
  return (
    <>
     {/* <Home />
     <Courses /> */}
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Courses" element={<Course />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Contact" element={<Contact/>} />
     </Routes>
    </>
  );
}

export default App
