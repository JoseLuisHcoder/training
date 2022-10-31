import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResidents = ({url}) => {
    const resident = useFetch(url)
    // console.log(resident);
  return (
    <div>
        <img src={resident?.image} alt="" />
        <h3>{resident?.name}</h3>
        <span>{resident?.status}</span>

    </div>
  )
}

export default CardResidents