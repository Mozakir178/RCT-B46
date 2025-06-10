import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './componands/ProductList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>React</h1>
     <ProductList/>
    </>
  )
}

export default App
