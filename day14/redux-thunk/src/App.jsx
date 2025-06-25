import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchUsers } from './redux/thunk' // we were importing wrong fetchUsers function
import { fetchUsers } from './redux-toolkit/userSlice'
import { increament } from './redux-toolkit/userSlice'

function App() {
  const dispatch = useDispatch() ;
  const {users, loading, error , count } = useSelector((state) => state.users);

  console.log(users, loading , error);


// setValue(10)
// dispatch(type:"increase")
  useEffect(() => {
    dispatch(fetchUsers());
  } )
  return (
    <>
    {count}
    <button onClick={() => dispatch(increament())}> Increase</button>
    {loading && <p>Data is loading</p>}
    {error && <p>There is some error</p>}
    {users.map((user) => (
      <p key={user.id}>{user.firstName}</p>
    ))}
      
    </>
  )
}

export default App
