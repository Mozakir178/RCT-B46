import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux"
import { decreament, increament, increaseByValue, reset } from './redux-with-toolkit/counterSlice'
// import { increament as themeIncreament } from './redux-with-toolkit/themeSlice'
import { toggle } from './redux-with-toolkit/themeSlice'

function App() {
  // const [count, setCount] = useState(0)
// count 
    // const count = useSelector((state) => state.counter.count) ;
    // const value = useSelector((state) => state.theme.value) ;
    // const theme = useSelector(state => state.theme.theme) ;
    // const count1 = useSelector((state) => state.theme.count);

   
    // make changes -> changes will be done by reducer -> dispatch will be taking these chage to the reducer 
    // const dispatch = useDispatch();

    const count = useSelector((state) => state.counter.count) ;
    const theme = useSelector((state) => state.theme.theme) ;
    const dispatch = useDispatch();
    const value = useSelector((state) => state.theme.value)

    // c
  return (
    <>
      <h1>{count}</h1>

      {/* <button onClick={() => dispatch({type: "Increament" , payload: {values need to pass}})} > Increase</button>
      <button onClick={() => dispatch({type: "Decreament"})} > Decrease</button>
      <button onClick={() => dispatch({type: "Reset"})} > Reset</button> */}

      <button onClick={() => dispatch(increament())} > Increase</button>
      <button onClick={() => dispatch(decreament())} > Decrease</button>
      <button onClick={() => dispatch(increaseByValue({id:1, name: "test"}))}>push</button>
      <button onClick={() => dispatch(reset())} > Reset</button>

      <h1>Current Theme: {theme}</h1>
      <h1>Current value from theme : {value}</h1>
      

      <button onClick={() => dispatch(toggle())}>Toggle</button>
    </>
  )
}

export default App
