import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './componands/Profile'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <h1>First React App</h1>
        <p>Hello World</p>

      </div>

      <Profile name = "Akash" age = "27" /> 
      <Profile name = "Sumit" age = "20" /> 
       <Profile name = "Anubhav" age = "21" /> 
        <Profile name = "Pooja" age = "17" /> 
      {/* Akash 
      Sumit 
      Anubhav  */}
    </>
  )
}

export default App
