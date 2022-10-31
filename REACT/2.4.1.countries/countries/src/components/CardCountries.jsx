import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Countries from './Countries'

const CardCountries = () => {
    const [countries, setCountries] = useState()

    useEffect(() => {
        const URL = 'https://restcountries.com/v3.1/lang/spa'
        axios.get(URL)
            .then(res => setCountries(res.data))
            .catch(err => console.log(err))
    }, [])
console.log(countries);
  return (
    <div>
        {
            countries?.map(country =>(
                <Countries key={country.name.common} country={country}/>
            ))
        }
    </div>
  )
}

export default CardCountries