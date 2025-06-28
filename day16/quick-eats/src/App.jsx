import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux"
import {Routes , Route, useNavigate} from "react-router-dom"
import Login from './pages/Login'
import Ragister from "./pages/Ragister"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import { onAuthStateChanged } from 'firebase/auth'
import { updateUser } from './app/authSlice'
import { auth } from './utils/firebase'
function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if(user){
        //update user data in the auth
        //action to updateUser 
        dispatch(updateUser(user));

      }
      else{
        //send user to login
        navigate("/login")

      }
    })
  } , [dispatch])

  

  return (
    
    <>
    <Navbar/>

    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/ragister' element={<Ragister/>} /> 
      <Route path='/' element={<Home/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>

    </>
  )
}

export default App
