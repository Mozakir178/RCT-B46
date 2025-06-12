import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const location = useLocation() ;

  return (
    <>
     <button onClick={() => navigate(1)}>Next</button>
      <button onClick={() => navigate(-2)}>Previous</button>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/about' element ={<About/>} />
      <Route path='/products' element = {<Products/>} />
      <Route path='/products/:id' element = {<ProductDetails/>} /> 
      <Route path='*' element={<NotFound/>} />

    </Routes>
    </>
  )
}

export default App
