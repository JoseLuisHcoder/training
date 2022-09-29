import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'


function App() {
  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/ditto'
    axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(pokemons);
  return (
    <div className="App">
      
    </div>
  )
}

export default App
