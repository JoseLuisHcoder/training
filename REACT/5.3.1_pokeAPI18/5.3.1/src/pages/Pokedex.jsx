import React from 'react'
import { useSelector } from 'react-redux'

const Pokedex = () => {
const userName = useSelector(state => state.userName)

  return (
    <div>
    <header>
      <h1>pokedex</h1>
      <p>Welcome <span>{userName}</span></p>
    </header>
    </div>
  )
}

export default Pokedex