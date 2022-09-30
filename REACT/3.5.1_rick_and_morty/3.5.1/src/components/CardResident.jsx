import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardResidents = ({url}) => {
const [resident, setResident] = useState()

useEffect(() => {
  axios.get(url)
    .then(res => setResident(res.data))
    .catch(err => console.log(err))
}, [])
// console.log(resident);
  return (
    <article>
      <header>
          <img src={resident?.image} alt={resident?.name} />
        <div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div>
        <h3>{resident?.name}</h3>
        <ul>
          <li><span>Specie: </span>{resident?.species}</li>
          <li><span>Origin: </span>{resident?.origin.name}</li>
          <li><span>Episodes: </span>{resident?.episode.length}</li>
        </ul>
      </div>
    </article>
  )
}

export default CardResidents