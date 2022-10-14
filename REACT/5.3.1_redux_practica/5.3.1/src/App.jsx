import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormUsers from './components/FormUsers'
import UserHello from './components/UserHello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>practica redux</h1>
      <FormUsers />
      <UserHello /> 
     
    </div>
  )
}

export default App
