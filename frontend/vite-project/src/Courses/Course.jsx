import React from 'react'
import Navbar from '../Components/Navbar'
import Courses from '../Components/Courses'
import Footer from '../Components/Footer'

function Course() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <Courses />
    </div>
    <Footer />
    </>
  )
}

export default Course