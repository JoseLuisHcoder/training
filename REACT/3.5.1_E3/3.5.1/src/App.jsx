import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFecth from './hooks/useFecth'
import Locationinfo from './components/Locationinfo'
import CardResidents from './components/CardResidents'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

    const [searchInput, setSearchInput] = useState('')
    const [location, setLocation] = useState()

    useEffect(()=>{
      let numberLocation
      if(searchInput===''){
        numberLocation = Math.floor((Math.random()*125) + 1)
      }else{
        numberLocation=searchInput
      }

      const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`

        axios.get(URL)
          .then(res=>setLocation(res.data))
          .catch(err=>console.log(err))

    }, [searchInput])
    

     const handleSubmit = e =>{
      console.log(e);
      e.preventDefault()
      setSearchInput(e.target.search.value)
    } 
console.log(searchInput);
  
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="search"/>
        <button>Search</button>
      </form>
      <Locationinfo location = {location}/>
      <div>
        {
          location?.residents.map(url=>(
            <CardResidents key={url} url={url} />
          ))
        }
      </div>
    </div>
  )
}

export default App
