import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const FormLogin = () => {

    const {register, handleSubmit, reset} = useForm()
    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
        
            .then(res => {
                    console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                })
            .catch(err => console.log(err))
        
        reset({
            email:'',
            password:''
        })
    }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>Welcome! Enter your email and password</h2>
        <div>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email" />
        </div>
        <div>
        <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password" />
        </div>
        <button>Login</button>
    </form>
  )
}

export default FormLogin