import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './componands/Child'


// <p> Some value</p>
// <button onclick = "increase" >Some button</button>

// <script>
//   {/* let button = document.getElementById("btn") ;
//   button.addEventLister("click" , () => {

//   }) */}

//   function increase = () =>{
//     do something here 
//   }
// </script>

// {we can write js}

function App() {
  const [count, setCount] = useState(0)
  const increaseCount = () => setCount(count+1)
  const reset = () => setCount(0)

  return (
    <>
     <p>Parent Componand</p>
     <p>{count}</p>

     <button onClick={increaseCount}> Increase Count</button>
     <button onClick={reset}>Reset</button>
     { count >= 5 && count <= 10 && <Child count= {count}/>}
    </>
  )
}

export default App

// This is Child
// Current count is: 0
