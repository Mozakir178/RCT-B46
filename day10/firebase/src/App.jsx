import { lazy, Suspense, useContext, useState } from 'react'
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
// import ProductDetails from './pages/ProductDetails'

const ProductDetails = lazy(() => import("./pages/ProductDetails"))
// if productDetails is a heavy component -> then it will take time to load, fallback UI -> Suspense

import { NotFound } from './pages/NotFound'
import Signup from './pages/Signup'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
import Loader from './components/Loader'

// // lazy component rendering 
// React.lazy 


function App() {
  const {theme} = useTheme();

  return (
    <>
      <div style={{color: theme == "dark" ? "white" : "black" , background: theme == "dark" ? "black" : "white" , height: "100vh"}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          } />
          <Route path='/products/:id' element={
            <PrivateRoute>
              <Suspense fallback={<Loader/>}>
                <ProductDetails/> 
              </Suspense>
              {/* Heavy component */}
            </PrivateRoute>
          }/>
          <Route path="/signin" element = {<Signup/>} />
          <Route path='/reset' element = {<ForgotPassword/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
