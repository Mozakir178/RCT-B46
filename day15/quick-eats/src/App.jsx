import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector} from "react-redux"
import {Routes , Route} from "react-router-dom"
import Login from './pages/Login'
import Ragister from "./pages/Ragister"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Items from './pages/Items'
function App() {

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/ragister' element={<Ragister/>} /> 
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Items/>} />
    </Routes>

    </>
  )
}

export default App
