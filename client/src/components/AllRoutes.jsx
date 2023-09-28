import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { Signin } from '../pages/Signin'
import SignUp from '../pages/SignUp'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="*" element={<h3>Page Not Found</h3>}/>
    </Routes>
  )
}

export default AllRoutes
