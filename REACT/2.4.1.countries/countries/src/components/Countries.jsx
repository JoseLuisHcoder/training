import React from 'react'

const Countries = ({country}) => {
  return (
    <div>
        <img src={country.flags.png} alt="" />
        <h1>{country.name.common}</h1>
        <h2>{country.capital[0]}</h2>
    </div>
  )
}

export default Countries