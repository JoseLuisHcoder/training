import React from 'react'

const CardUser = ({user}) => {
  return (
    <div>
        <div className="container">
          <img src={user?.picture.large} alt="" />
        <ul>
        
          <li className='name'><span className='bold'>Name:</span>{`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</li>
          <li className='email'><span className='bold'>Email:</span>{user?.email}</li>
          <li className='location'><span className='bold'>Location:</span>{user?.location.city}, {user?.location.country} </li>
          <li className='gender'><span className='bold'>Gender:</span>{user?.gender}</li>
         
        </ul>
      </div>
    </div>
  )
}

export default CardUser