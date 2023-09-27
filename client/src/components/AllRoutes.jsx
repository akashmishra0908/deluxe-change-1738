import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<h3>Page Not Found</h3>}/>
    </Routes>
  )
}

export default AllRoutes
