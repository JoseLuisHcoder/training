import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const HookForm = ({createNewCar, updateInfo, getAllCar, setUpdateInfo}) => {
    const { register, handleSubmit, reset} = useForm()

    const defaultValues = {
        brand:'',
        model:'',
        color:'',
        year: '',
        price:''
    }

    useEffect(()=>{
        if(updateInfo){
            reset(updateInfo)
        }
    }, [updateInfo])

  
    const submit = data =>{ 
        //UPDATE
        if(updateInfo){
            const URL = `https://cars-crud.herokuapp.com/cars/${updateInfo.id}/`
        
            axios.patch(URL, data)
                .then(res=>{
                    console.log(res.data)
                    getAllCar()
                })
                .catch(err=>console.log(err))
                reset(defaultValues)
                setUpdateInfo()

        }else{       //CREATE
            createNewCar(data)
            reset(defaultValues)
            
        }
    }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>{updateInfo ? 'Update Car' : 'Create Car'}</h2>
        <label htmlFor="brand">Name: </label>
        <input {...register('brand')}  type="text" id='brand' />
        <label  htmlFor="model">Model: </label>
        <input {...register('model')}  type="text" id='model' />
        <label  htmlFor="color">Color: </label>
        <input {...register('color')}  type="text" id='color' />
        <label  htmlFor="year">Year: </label>
        <input {...register('year')}  type="number" id='year' />
        <label  htmlFor="price">Price: </label>
        <input {...register('price')}  type="text" id='price' />
        <button>{updateInfo ? 'Update' : 'Create'}</button>

        
    </form>
  )
}

export default HookForm