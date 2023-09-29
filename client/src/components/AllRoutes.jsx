import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { Signin } from '../pages/Signin'

import Product from './products/product'

import SignUp from '../pages/SignUp'
import { SingleDetailPage } from '../pages/SingleDetailPage'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>

        <Route path='/product' element ={<Product/>} />

       <Route path='/detail/:courseId' element={<SingleDetailPage/>} />

        <Route path="*" element={<h3>Page Not Found</h3>}/>
    </Routes>
  )
}

export default AllRoutes
