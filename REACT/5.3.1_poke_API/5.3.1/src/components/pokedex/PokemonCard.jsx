import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatPokemon from './StatPokemon'

const PokemonCard = ({url}) => {
const [pokemon, setPokemon] = useState()
const navigate = useNavigate()

useEffect(()=>{
    axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
}, [])

const handleClick = () => navigate(`/pokedex/${pokemon.name}`)

  return (
    <article onClick={handleClick}>
        <header>
            <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <section className='body'>
            <h3>{pokemon?.name}</h3>
            <ul>
                {
                    pokemon?.types.map(slot => (
                        <li key={slot.type.url}>{slot.type.name}</li>
                    ))
                }
            </ul>
        </section>
        <footer>
            <ul>
                {
                    pokemon?.stats.map(stat =>(
                        <StatPokemon 
                        key={stat.stat.url}
                        infoStat={stat}
                        />
                    ))
                }
            </ul>
            
        </footer>
    </article>
  )
}

export default PokemonCard