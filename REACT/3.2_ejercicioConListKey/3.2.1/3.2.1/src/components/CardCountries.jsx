import React from 'react'




const CardCountries = ({countrie}) => {
  return (
    <div className='card'>
        <h1 className='card__name'>{countrie.name.common}</h1>
        <h3 className='card__capital'>{countrie.capital[0]}</h3>
        <img className='card__flag' src={countrie.flags.png} alt="" />
        <ul>
            <li>Pupulation: {countrie.population}</li>
            <li>Continent: {countrie.continents[0]}</li>
            <li>Area: {countrie.area}</li>
        </ul>
        
       
    </div>
  )
}

export default CardCountries