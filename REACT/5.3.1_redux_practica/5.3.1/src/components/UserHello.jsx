import React from 'react'
import { useSelector } from 'react-redux'

const UserHello = () => {

    const user = useSelector(state => state.users)
    console.log(user);
  return (
    <div>{
        user !== '' ?
        `Hola ${user.firstname} ${user.lastname}`
        : 'ingresa tu nombre para saludarte'
    }
    </div>
  )
}

export default UserHello