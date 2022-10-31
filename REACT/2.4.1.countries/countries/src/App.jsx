import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardCountries from './components/CardCountries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CardCountries />
    </div>
  )
}

export default App
