import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon404 = () => {
  return (
    <div>
        <h1>Pokemon404</h1>
        <Link to='/pokedex'>Return pokedex</Link> 
    </div>
  )
}

export default Pokemon404