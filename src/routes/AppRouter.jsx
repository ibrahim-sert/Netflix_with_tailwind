import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default AppRouter