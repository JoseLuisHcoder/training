import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/slices/counter.slice'

const CardCounter = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
  
    const rest = () => dispatch(decrement())
    const resetCounter = () => dispatch(reset())
    const add = () => dispatch(increment())

  return (
    <div>
        <h1>CardCounter</h1>
        <h2>{counter}</h2>
        <button onClick={rest}>rest</button>
        <button onClick={resetCounter}>reset</button>
        <button onClick={add}>add</button>
    </div>
  )
}

export default CardCounter