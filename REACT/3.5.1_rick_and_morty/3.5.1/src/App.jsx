import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'

function App() {
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')


  useEffect(() => {
    const random = getRandomNumber()
    const URL = `https://rickandmortyapi.com/api/location/${random}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchInput])
// console.log(location);
  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
    
  }
console.log(searchInput);
  return (
    <div className="App">
      <h1>Rick And Morty</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="search" />
        <button>Search</button>
      </form>

      <LocationInfo location={location}/>
      <div>
        {
          location?.residents.map(url => (
            <CardResident key={url} url={url}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
