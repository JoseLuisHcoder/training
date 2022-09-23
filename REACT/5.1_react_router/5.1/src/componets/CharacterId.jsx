import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CharacterId = () => {

    const [character, setCharacter] = useState()

    const { id } = useParams()

    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/character/${id}`
        
        axios.get(URL)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err))
    }, [id])

    console.log(character) 
  return (
    <article>
        <h1>character</h1>
        <img src={character?.image} alt="" />
        <h2>{character?.name}</h2>
    </article>
  )
}

export default CharacterId