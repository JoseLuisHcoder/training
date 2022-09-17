import React from 'react'

const CardUsers = ({userRandom, colorRandom, clickBtn}) => {
    console.log(userRandom);

const colorFont = {
    color:colorRandom
}
const colorBtn = {
    backgroundColor:colorRandom
}
    
  return (
    <div className='card'>
        <img className='card__img' src={userRandom.picture.large} alt="" />
        <h2 style={colorFont} className='card__name'>{`${userRandom.name.title} ${userRandom.name.first} ${userRandom.name.last} `}</h2>
        <button onClick={clickBtn} style={colorBtn} className='card__btn'>&gt;</button>
    </div>
  )
}

export default CardUsers