import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
    const location = useFetch('https://rickandmortyapi.com/api/location/3')
    console.log(location);
  return (
    <div className="App">
      
    </div>
  )
}

export default App
