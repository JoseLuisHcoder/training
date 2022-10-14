import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../store/slices/UserName.slice'

const FormHome = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const submit = e => {
        e.preventDefault()
        // console.log(e.target.name.value)
        dispatch(setUserNameGlobal(e.target.name.value.trim()))
        navigate('/pokedex')
    }
  return (
    <form onSubmit={submit}>
        <input  id='name' type="text" placeholder='Enter your name' />
        <button>Catch them all</button>
  </form>
  )
}

export default FormHome