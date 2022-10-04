import axios from 'axios'
import React from 'react'

const CardCars = ({car, getAllCars}) => {

    const deleteCarId = id => {
        const URL = `https://cars-crud.herokuapp.com/cars/${id}/`
        axios.delete(URL)
            .then(res => getAllCars())
            .catch(err => console.log(err))
    
    }
  return (
    <div>
        <ul>
            <li>{car.brand}</li>
            <li>{car.color}</li>
            <li>{car.model}</li>
            <li>{car.price}</li>
            <li>{car.year}</li>
        </ul>
        <button onClick={() => deleteCarId(car.id)}>Delete car</button>
    </div>
  )
}

export default CardCars