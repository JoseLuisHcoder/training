import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'
import CardCountries from './components/CardCountries'

function App() {
  const [countries, setCountries] = useState()

  useEffect(()=>{
    const URL = 'https://restcountries.com/v3.1/lang/spa'
    axios.get(URL)
      .then(res=> setCountries(res.data))
      .catch(err=>console.log(err))
    console.log(countries);
  }, [])
console.log(countries);
  return (
    <div className="App">
      {
        countries?.map(country=>(
          <CardCountries key={`${countries.area}_${countries.popupation}`} country={country} />
        ))
      }
    </div>
  )
}

export default App
