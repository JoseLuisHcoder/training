import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Pokemon404 from '../pokedex/Pokemon404';

const PokedexById = () => {
  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  const {id} = useParams()
// console.log(id);

useEffect(() => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`

  axios.get(URL)
    .then(res => setPokemon(res.data))
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
}, [])
console.log(pokemon);
if(hasError){
  return <Pokemon404 />
}
  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
     
      <ul>
        {
          pokemon?.moves.map(move => (
            <li>{move.move.name}</li>
          ))
        }
      
      </ul>
    </div>
  )
}

export default PokedexById