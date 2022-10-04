import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import CardCars from './components/CardCars'
import HookForm from './components/HookForm'

function App() {
  const baseURL = 'https://cars-crud.herokuapp.com/'
   
  const [cars, setCars] = useState()
  

  const getAllCars = () => {
    const URL = 'https://cars-crud.herokuapp.com/cars/'
    axios.get(URL)
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
      }
const createNewCar = () => {
  const URL = 'https://cars-crud.herokuapp.com/cars/'
  const data = {
    brand: 'toretto',
    model: 'tor',
    color: 'orange',
    year:	2022,
    price: 452255

  }
  axios.post(URL, data)
    .then(res => getAllCars())
    .catch(err => console.log(err))
}

  useEffect(() => {
    getAllCars()
  })

// console.log(cars);

  return (
    <div className="App">
      <h1>CRUD con axios</h1>
      <HookForm />
      <button onClick={createNewCar}>Create New car</button>
      <div>
        {
          cars?.map(car =>(
            <CardCars  key={car.id} car={car} getAllCars={getAllCars}/>
          ))
        }
      </div>
    </div>
  )
}

export default App


//https://cars-crud.herokuapp.com/swagger/

