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
const createNewCar = data => {
  const URL = 'https://cars-crud.herokuapp.com/cars/'
  
  axios.post(URL, data)
    .then(res => getAllCars())
    .catch(err => console.log(err))
}

  useEffect(() => {
    getAllCars()
  })

  const updateCardById = id => {
    const URL = `https://cars-crud.herokuapp.com/cars/${id}/`
    const data = {
      brand: 'terminator',
      model: 'ghghghg',
      color: 'black',
      year: '2023',
      price: 999999
    }
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data);
        getAllCars()
      })
      .catch(err => console.log(err))

  }

// console.log(cars);

  return (
    <div className="App">
      <h1>CRUD con axios</h1>
      <HookForm createNewCar={createNewCar} />
      <button onClick={createNewCar}></button>
      <div>
        {
          cars?.map(car =>(
            <CardCars  key={car.id} car={car} getAllCars={getAllCars} updateCardById={updateCardById}/>
          ))
        }
      </div>
    </div>
  )
}

export default App


//https://cars-crud.herokuapp.com/swagger/

