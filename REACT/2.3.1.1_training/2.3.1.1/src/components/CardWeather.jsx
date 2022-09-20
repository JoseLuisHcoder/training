import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardWeather = ({lat, lon}) => {

    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()
    const [isCelcius, setIsCelcius] = useState(true)

      
    useEffect(()=>{
        if(lat){
            const APIkey = 'c0258c56ace18fe84580fe52d11edffb'
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
                axios.get(URL)
                    .then(res => {setWeather(res.data)
                        const temp = {
                            celcius:`${Math.round(res.data.main.temp - 273.15)} °C`,
                            farenheit:`${(Math.round(res.data.main.temp - 273.15)*(9/5)+32)} °F` 
                        }
                            setTemp(temp)
                    })
                    .catch(err => console.log(err))
        }
      
    }, [lat, lon])
  console.log(temp);
  const handleClick = ()=>setIsCelcius(!isCelcius)
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
                 <h2>{isCelcius ? temp?.celcius : temp?.farenheit}</h2>
             </div>
             <div className="btn">
             <button onClick={handleClick}>{isCelcius ? 'change °f' : 'change °C'}</button>
             </div>
    </div>
)

}

export default CardWeather