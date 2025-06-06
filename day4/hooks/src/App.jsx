import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './componands/Profile';

function App() {
  // const [count, setCount] = useState(0)
  // let count = 0 ; replace with useState 
  // useState => [variable , functionToUpdateTheVariable] = initialValue
  // count = 0,1
  const [count, setCount] = useState({}) ;
  let obj = {a:1,b:2}
  let increase = () => {
    // you have an object 
    // count.newValue = "newValue" // value will get added, ui will not know, if reset, those changes are gone
    setCount({...count , newVariable:0}) ; // 0
    console.log(count) ;//0
  }

  return (
    <>
      <h1>React State</h1>
      <Profile/>

      <p>Count is: {count}</p>
      <button onClick={increase}>Increase</button>
    </>
  )
}

export default App
