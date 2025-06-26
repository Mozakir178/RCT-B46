import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Ragister from './pages/Ragister'
import {useSelector} from "react-redux"

function App() {
  const [count, setCount] = useState(0)
  const {user} = useSelector(state => state.auth);

  return (
    <>
    <Login/>
    <Ragister/>
    </>
  )
}

export default App
