import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InputControlado from './components/InputControlado'
import FormSubmit from './components/FormSubmit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <InputControlado />
      <FormSubmit />
    </div>
  )
}

export default App
