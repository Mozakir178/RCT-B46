import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
// import { Products } from './pages/Products'
import Products from './pages/Products'
import { Login } from './pages/Login'
import { ThemeContext, useTheme } from './context/ThemeContext'
import ProductDetails from './pages/ProductDetails'
import { NotFound } from './pages/NotFound'


function App() {
  const {theme} = useTheme();

  return (
    <>
      <div style={{color: theme == "dark" ? "white" : "black" , background: theme == "dark" ? "black" : "white" , height: "100vh"}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
