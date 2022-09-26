import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, rest, reset, getUsers} from './store/slices/users.slice'
import { useEffect } from 'react'


function App() {
  const users = useSelector(state => state.usersSlice)
  const dispatch = useDispatch()

  const incr = () => dispatch(add())
  const resett = () => dispatch (reset())
  const decr = () => dispatch(rest())

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className="App">  
      <h1>counter Users: {users}</h1>
      <button onClick={decr}>-1</button>
      <button onClick={resett}>reset</button>
      <button onClick={incr}>+1</button>
    </div>
  )
}

export default App
