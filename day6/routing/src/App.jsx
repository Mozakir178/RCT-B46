import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes , Link } from 'react-router-dom'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    {/* <a href="path"></a> -> page use to reload */}
    {/* <Homepage/>
    <About/>
    <Contact/> */}
    <div>
      <nav style={{display:'flex' , gap: "50px"}}>
        <Link to="/"> Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products"> Products</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/products/:id' element={<ProductDetail/>}/>
      </Routes>
    </div>


    </>
  )
}

export default App
