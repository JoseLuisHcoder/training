import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
      const countries = useFetch('https://restcountries.com/v3.1/all')
      const users = useFetch('https://randomuser.me/api/?results=50')
    console.log(countries);
    console.log(users);
  return (
    <div className="App">
      
    </div>
  )
}

export default App
