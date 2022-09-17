import axios from 'axios'

import { useEffect,useState } from 'react'

const CardWeather = ({lat, lon}) => {

    const [weather, setWeather] = useState()
    
    useEffect(()=>{
        if(lat){
            const APIkey = 'c0258c56ace18fe84580fe52d11edffb'
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
            
            axios.get(URL)
                .then(res => setWeather(res.data))
                .catch(err => console.log(err))
            
            
        }

    }, [lat, lon])
console.log(weather);
  return (
    <div>CardWeather</div>
  )
}

export default CardWeather