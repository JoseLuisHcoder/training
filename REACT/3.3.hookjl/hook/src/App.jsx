import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import hookCounter from './hooks/hook'

function App() {
  const{counter, rest, add, resett}=hookCounter()

  return (
    <div className="App">
      <h1>{counter}</h1>
      <div>
        <button onClick={rest}>-1</button>
        <button onClick={resett}>reset</button>
        <button onClick={add}>+1</button>
      </div>
    </div>
  )
}

export default App
