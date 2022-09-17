import React from 'react'
import hooksCounter from '../hooks/hooks'

const Counter = () => {
   const {counter, add, rest, reset} = hooksCounter(10)
  return (
    <div>
        <h2>Counter 2</h2>
     <h2>{counter}</h2>
     <button onClick={rest}>-1</button>
     <button onClick={reset}>reset</button>
     <button onClick={add}>+1</button>
    </div>
  )
}

export default Counter