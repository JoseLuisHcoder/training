import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationInfo from './components/LocationInfo'
import CardResidents from './components/CardResidents'
import { useEffect } from 'react'
import axios from 'axios'



function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
  
  
  
  useEffect(() => {
    let randomLocation
    if(searchInput === ''){
      randomLocation = Math.floor(Math.random()*125) + 1
    }else{
      randomLocation=searchInput
    }
    
    const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`

    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)

  }
  // console.log(location);
  console.log(searchInput);

  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        <input type="text" id="search" />
        <button>Search</button>
      </form>
      <LocationInfo location={location}/>
      {
        location?.residents.map(url => (
          <CardResidents key={url} url={url} />
        ))
      }
      
    </div>
  )
}

export default App
