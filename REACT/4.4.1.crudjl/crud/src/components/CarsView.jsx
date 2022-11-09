import React from 'react'

const CarsView = ({car}) => {
  return (
    <div>
        <ul>
            <li><span>Brand: </span>{car.brand}</li>
            <li><span>color: </span>{car.color}</li>
            <li><span>model: </span>{car.model}</li>
            <li><span>price: </span>{car.price}</li>
            <li><span>year: </span>{car.year}</li>
            
        </ul>
    </div>
  )
}

export default CarsView