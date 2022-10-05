import React from 'react'
import { useForm } from 'react-hook-form'

const HookForm = ({createNewCar}) => {
    const {register, handleSubmit, reset} = useForm()

    const submit = data => {
        console.log(data);
        createNewCar(data)
        reset(defaultValue)
    }
    
    const resetValue = {
        name:'',
        password:''
    }

    const defaultValue = {
            brand: '',
            model: '',
            color: '',
            year: '',
            price: ''
        
    }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="brand">Brand</label>
            <input {...register("brand")} type="text" id="brand" />
        </div>
        <div>
            <label htmlFor="model">Model</label>
            <input {...register("model")} type="text" id="model" />
        </div>
        <div>
            <label htmlFor="color">Color</label>
            <input {...register("color")} type="text" id="color" />
        </div>
        <div>
            <label htmlFor="year">Year</label>
            <input {...register("year")} type="text" id="year" />
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input {...register("price")} type="text" id="price" />
        </div>
        <button>submit</button>
    </form>
  )
}

export default HookForm