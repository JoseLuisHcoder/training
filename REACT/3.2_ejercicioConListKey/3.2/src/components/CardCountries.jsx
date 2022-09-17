import React from 'react'

const CardCountries = ({country}) => {
  return (
    <article className='card'>
        <img className='card__img' src={country.flags.svg} alt="" />
        <h2 className='card__title'>{country.name.common}</h2>
    </article>
  )
}

export default CardCountries