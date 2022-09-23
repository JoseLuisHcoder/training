import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { decrement, increment, resett } from '../store/slices/counter.slice'


const CardCounter = () => {

    const counter = useSelector(state=>state.counterSlice)
  
    const dispatch = useDispatch()
  
    const add = () => dispatch(increment())
    const reset = () => dispatch(resett())
    const rest = () => dispatch(decrement())
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={rest}>-1</button>
      <button onClick={reset}>reset</button>
      <button onClick={add}>+1</button>

    </div>
  )
}

export default CardCounter