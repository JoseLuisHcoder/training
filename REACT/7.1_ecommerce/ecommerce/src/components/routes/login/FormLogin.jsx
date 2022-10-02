import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {

    const {register, handleSubmit, reset} = useForm()
    const [isErrorLogin, setIsErrorLogin] = useState(false)
    const navigate = useNavigate()
    
    const submit = data => {
        console.log(data);
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
        
            .then(res => {
                    console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                navigate('/')
                })
            .catch(err => {
                localStorage.setItem('token', '')
                setIsErrorLogin(true)
                setTimeout(() => {
                    setIsErrorLogin(false)
                }, 5000)
            })
        // comentamos esto para q no se resete nuestro usuario y contraseña cada ve, lo ponemos cuando se necesite
        // reset({
        //     email:'',
        //     password:''
        // })
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
        <div>
            {
                isErrorLogin && 'Invalid credentials, Try again...'
            }
        </div>
        <button>Login</button>
    </form>
  )
}

export default FormLogin