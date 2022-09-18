import React from 'react'
import useFetch from '../hooks/useFecth'

const CardResidents = ({url}) => {
    
     const resident = useFetch(url)

     
  return (
    <article>
        <header>
            <img src={resident?.image} alt={resident?.name} />
            <div className='circle'>
                <span>{resident?.status}</span>
            </div>

        </header>
        
        <div>
            <h3>{resident?.name}</h3>
            <ul>
                <li><span>Specie: </span>{resident?.species}</li>
                <li> <span>Origin: </span>{resident?.origin.name}</li>           
                <li><span>Episodes where appear: </span>{resident?.episode.length}</li>
            </ul>
        </div>

    </article>
  )
}

export default CardResidents