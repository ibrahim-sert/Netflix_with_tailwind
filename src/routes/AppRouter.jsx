import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import { AuthContextProvider } from '../context/AuthContext'
import Account from '../pages/Account'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ProtectedRoute from "../components/ProtectedRoute"

const AppRouter = () => {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/account' element= {<ProtectedRoute><Account/></ProtectedRoute>} />
    </Routes>
    </AuthContextProvider>
    </>
  )
}

export default AppRouter