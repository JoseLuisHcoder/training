import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import CardWeather from './componenst/CardWeather'

function App() {


  const [coords, setCoords] = useState()

  useEffect(()=>{
    const success = pos=>{
      const latlon = {
        lat:pos.coords.latitude,
        lon:pos.coords.longitude
      }
      setCoords(latlon)
      
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  return (
    <div className="App">
      <div className='card_app'>
          <CardWeather lat={coords?.lat} lon={coords?.lon} />
      </div>
       
    </div>
  )
}

export default App
