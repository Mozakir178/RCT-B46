import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const {theme , toggleTheme}= useContext(ThemeContext) ;

  return (
    <>
    <Navbar/>
     <h1>Current Theme is : {theme}</h1>
     <button onClick={toggleTheme}>ToggleTheme</button>
    </>
  )
}

export default App
