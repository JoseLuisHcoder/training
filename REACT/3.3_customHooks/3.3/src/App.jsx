import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import hooksCounter from './hooks/hooks'
import Counter from './components/Counter'


function App() {
  
  const {counter, add, rest, reset} = hooksCounter(0, 5, -10, 8)

  return (
    <div className="App">
     <h2>App Counter</h2>
     <h2>{counter}</h2>
     <button onClick={rest}>-1</button>
     <button onClick={reset}>reset</button>
     <button onClick={add}>+1</button>
     <Counter />

    </div>
  )
}

export default App
