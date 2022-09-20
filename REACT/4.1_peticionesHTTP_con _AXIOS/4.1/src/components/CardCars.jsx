import axios from 'axios'
import React from 'react'

const CardCars = ({car, getAllCar, setUpdateInfo}) => {

    const deleteCarId = id => {
        const URL = `https://cars-crud.herokuapp.com/cars/${id}`

        axios.delete(URL)
            .then(res=>{
                getAllCar()
            })
            .catch(err=>console.log(err))
    }

    const getInfoUpdate = ()=>{
        setUpdateInfo(car)
    }

  return (
    <div>
        <ul>
            <li><span>Brand: </span>{car.brand}</li>
            <li><span>Color: </span>{car.color}</li>
            <li><span>Model: </span>{car.model}</li>
            <li><span>Year: </span>{car.year}</li>
            <li><span>Price: </span>{car.price}</li>
        </ul>
        <button onClick={ ()=>deleteCarId(car.id)} >Delete Car ID</button>
        <button onClick={getInfoUpdate}>Update Info</button>
    </div>
  )
}

export default CardCars