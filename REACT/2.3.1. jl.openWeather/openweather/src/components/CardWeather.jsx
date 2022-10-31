import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'

const CardWeather = ({lat, lon}) => {

    const [weather, setWeather] = useState()
    const [temperature, setTemperature] = useState()
    const [celcius, setCelcius] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(lat){
            const APIKey = 'c0258c56ace18fe84580fe52d11edffb'
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
            
            axios.get(URL)
                .then(res => {setWeather(res.data)
                    const temp = {
                        celcius:`${Math.round(res.data.main.temp - 273.15)} °C`,
                        farenheit:`${(Math.round(res.data.main.temp - 273.15)*(9/5)+32)} °F`
                    }
                    setTemperature(temp)
                    setLoading(false)
                })
                    
                .catch(err => console.log(err))
        }


    }, [lat, lon])

    const handleClick = () => setCelcius(!celcius)
    if(loading){LoadingScreen}
    else{
         // console.log(weather);
    // console.log(temperature);
    console.log(celcius);
  return (
    <div>
        <h1>WEATHER APP</h1>
        <h2>{`${weather?.name} - ${weather?.sys.country}` }</h2>
        <div>
            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="icono" />
            <div>
                <ul>
                <li><span>Winds Speed: </span>{weather?.wind.speed} m/s</li>
                <li><span>Clouds: </span>{weather?.clouds.all} %</li>
                <li><span>Prassure: </span>{weather?.main.pressure} hPa</li>
                </ul>
            </div>

        </div>
        <div>
            <h2>{celcius ? temperature?.celcius : temperature?.farenheit}</h2>
        </div>
        <button onClick={handleClick}>{celcius ? 'change °F' : 'change °C' }</button>
    </div>
  )
    }
   
}

export default CardWeather