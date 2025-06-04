import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './componands/Display'
import IncreamentButton from './componands/Button'


function App() {
  const [count, setCount] = useState(0)
  const handleIncreament = () => setCount(count+1);

  return (
    <>
     <Display count={count}/>
    <IncreamentButton onIncreament={handleIncreament}/>
      
    </>
  )
}

export default App
