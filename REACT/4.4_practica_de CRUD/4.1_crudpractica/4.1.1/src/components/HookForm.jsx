import React from 'react'
import { useForm } from 'react-hook-form'

const HookForm = () => {
    const {register, handleSubmit, reset} = useForm()

    const submit = data => {
        console.log(data);
        reset(resetValue)
    }
    
    const resetValue = {
        name:'',
        password:''
    }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="name">Name</label>
            <input {...register("name")} type="text" id="name" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="text" id="password" />
        </div>
        <button>submit</button>
    </form>
  )
}

export default HookForm