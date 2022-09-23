import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import CardCounter from './components/CardCounter'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShow } from './store/slices/isShow.slice'


function App() {
   
     const isShow = useSelector(state => state.isShow)
     console.log(isShow);
     const dispatch = useDispatch()

     const handleClick = () => dispatch(changeIsShow())
     
     
  return (
    <div className="App">
      <button onClick={handleClick}>Show/Hide Counter</button>
      {
        isShow && <CardCounter />
      }
      
    </div>
  )
}

export default App
