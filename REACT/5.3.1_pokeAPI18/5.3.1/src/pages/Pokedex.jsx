import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PokemonCard from '../pokedex/PokemonCard'
import InputSearch from '../pokedex/InputSearch'
import SelectByType from '../pokedex/SelectByType'

const Pokedex = () => {
const userName = useSelector(state => state.userName)

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState()

  useEffect(() => {
    if(typeSelected !== 'All Pokemons'){
      //si selecciono un tipo
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)})
        .catch(err => console.log(err))
    }else{
      //si kiero todos los pokemons
      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])
  // console.log(pokemons);

  return (
    <div>
    <header>
      <h1>pokedex</h1>
      <p>Welcome <span>{userName}</span></p>
    </header>
    <aside>
      <InputSearch />
      <SelectByType setTypeSelected={setTypeSelected} />
    </aside>
    <div>
      {
        pokemons?.map(pokemon => (
          <PokemonCard key={pokemon.url} url={pokemon.url} />
        ))
      }
    </div>
    </div>
  )
}

export default Pokedex

// https://pokeapi.co/api/v2/pokemon