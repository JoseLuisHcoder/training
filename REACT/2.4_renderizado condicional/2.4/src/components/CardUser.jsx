import React from 'react'

const CardUser = ({user}) => {
    console.log(user);
  return (
    <div>
        <img src={user?.picture.large} alt="" />
       <h2>{`${user?.name.first}`}</h2>
    </div>
  )
}

export default CardUser