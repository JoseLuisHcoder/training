import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import LoadingScreen from './LoadingScreen'

const CardWeather = ({lat, lon}) => {

    const [weather, setWeather] = useState()
    const [temperature, setTemperature] = useState()
    const [isCelcius, setIsCelcius] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{
        if(lat){
            const APIKey = 'c0258c56ace18fe84580fe52d11edffb'
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
            
            axios.get(URL)
                .then(res=>{setWeather(res.data)
                    const temp = {
                        celcius:`${Math.round(res.data.main.temp - 273.15)} °C`,
                        farenheit:`${(Math.round(res.data.main.temp - 273.15)*(9/5)+32)} °F`
                    }
                    setTemperature(temp)
                    setIsLoading(false)
                })
                    
                
                
        }
    }, [lat, lon])
   
   const handleClick = ()=>setIsCelcius(!isCelcius)
   if(isLoading){
    LoadingScreen
   }else{

       return (
         <div>
             <h1>Weather APP</h1>
             <h2>{`${weather?.name}, ${weather?.sys.country} `}</h2>
             <div className="data">
                 <div className="data__img">
                     <img src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                 </div>
     
                 <div className="data__info">
                     <ul>
                         <li><span>Winds Speed: </span>{weather?.wind.speed} m/s</li>
                         <li><span>Clouds: </span>{weather?.clouds.all} %</li>
                         <li><span>Prassure: </span>{weather?.main.pressure} hPa</li>
                     </ul>
                 </div>
     
             </div>
     
             <div className="temperature">
                 <h2>{isCelcius ? temperature?.celcius : temperature?.farenheit}</h2>
             </div>
             <div className="btn">
             <button onClick={handleClick}>{isCelcius ? 'change °f' : 'change °C'}</button>
             </div>
         </div>
       )
   }
}

export default CardWeather