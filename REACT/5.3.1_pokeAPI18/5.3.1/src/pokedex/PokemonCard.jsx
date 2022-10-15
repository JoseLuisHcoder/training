import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import StatPokemon from './StatPokemon'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({url}) => {
  const [pokemon, setPokemon] = useState()
   const navigate = useNavigate()

  
  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])
// console.log(pokemon);
const handleClick = () => navigate(`/pokedex/${pokemon.id}`)


  return (
    <article onClick={handleClick}>
      <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <section>
          <h3>{pokemon?.name}</h3>
          <ul>
            {
              pokemon?.types.map(slot => (
                <li key={slot.type.url}>{slot.type.name}</li>
                
              ))
            }
          </ul>
        </section>
      </header>
      <footer>
        <ul>
          {
            pokemon?.stats.map(stat => (
              <StatPokemon key={stat.stat.url}  infoStat={stat} />
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokemonCard