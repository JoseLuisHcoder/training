import React from 'react'
import { useDispatch } from 'react-redux'
import { setUsersGlobal } from '../store/slices/users.slice'

const FormUsers = () => {

    const dispatch = useDispatch()


    const submit = e => {
        e.preventDefault()

        const firstname = e.target.firstname.value
        const lastname = e.target.lastname.value

        dispatch(setUsersGlobal({firstname, lastname}))
    }

  return (
    <form onSubmit={submit}>
        <div>
            <label htmlFor="firstname">firstName</label>
            <input type="text" id='firstname' />
        </div>
        
        <div>
            <label htmlFor="lastname">Lastname</label>
            <input type="text" id='lastname' />
        </div>
        <button>save</button>
    </form>
  )
}

export default FormUsers