import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const SelectByType = ({setTypeSelected}) => {
    const [types, setTypes] = useState()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/type`
        axios.get(URL)
            .then(res => setTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setTypeSelected(e.target.value)
    }
// console.log(types);
  return (
    <select onChange={handleChange}>
        <option value="All Pokemons"></option>
        {
            types?.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectByType