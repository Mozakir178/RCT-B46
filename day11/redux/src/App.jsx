import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './context/themeContext'
import {useDispatch, useSelector} from "react-redux"

function App() {
  // const [count, setCount] = useState(0)
// count 
    const count = useSelector((state) => state.counter.count) ;
    const theme = useSelector(state => state.theme.theme) ;

   
    // make changes -> changes will be done by reducer -> dispatch will be taking these chage to the reducer 
    const dispatch = useDispatch();

    // c
  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => dispatch({type: "Increament"})} > Increase</button>
      <button onClick={() => dispatch({type: "Decreament"})} > Decrease</button>
      <button onClick={() => dispatch({type: "Reset"})} > Reset</button>

      <h1>Current Theme: {theme}</h1>

      <button onClick={() => dispatch({type: "Toggle"})}>Toggle</button>
    </>
  )
}

export default App
