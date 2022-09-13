import React from 'react'

const Card = ({objInfo, color}) => {
  return (
    <ul className= {` list ${color}`}>
    <h2>{objInfo.title}</h2>
      <li className='list__item'><b>Nombre: </b>{objInfo.list[0]}</li>
      <li className='list__item'><b>Edad: </b>{objInfo.list[1]}</li>
      <li className='list__item'><b>Pelicula: </b>{objInfo.list[2]}</li>
      <li className='list__item'><b>Musica:</b> Rock clasico</li>
    </ul>
  )
}

export default Card