import { useEffect, useState } from 'react'

import './App.css'
import './styles/cardCountries.css'

import axios from 'axios'
import CardCountries from './components/CardCountries'


//https://restcountries.com/v3.1/lang/spa

function App() {

  const [countries, setCountries] = useState()

  useEffect(() => {
    const URL = 'https://restcountries.com/v3.1/lang/spa'
    axios.get(URL)
      .then(res => setCountries(res.data))
      .catch(err => console.log(err))
  }, [])
console.log(countries);
  

  return (
    <div className="App">
      <div className='card_container'>
        {
          countries?.map(countrie => (
            <CardCountries  key={countrie.name.common}countrie={countrie}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default App
