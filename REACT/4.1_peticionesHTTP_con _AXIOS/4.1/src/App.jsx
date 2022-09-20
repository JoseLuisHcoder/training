import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import CardCars from './components/CardCars'
import HookForm from './components/HookForm'

// API de ACADEMLO de CARS  https://cars-crud.herokuapp.com/cars/
// API de ACADEMLO DE USERS   https://users-crud1.herokuapp.com/swagger/


function App() {
  const [cars, setCars] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  
  useEffect(()=>{
   const URL = 'https://cars-crud.herokuapp.com/cars/'

   axios.get(URL)
      .then(res=>setCars(res.data))
      .catch(err=>console.log(err))
  }, [])

const getAllCar =()=>{
    const URL = 'https://cars-crud.herokuapp.com/cars/'

    axios.get(URL)
     .then(res=>setCars(res.data))
     .catch(err=>console.log(err))
}

const createNewCar = data =>{
  const URL = 'https://cars-crud.herokuapp.com/cars/'
 
  axios.post(URL, data)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    .finally(()=>getAllCar())
}

console.log(cars);

  return (
    <div className="App">
      <HookForm setUpdateInfo={setUpdateInfo} getAllCar={getAllCar} updateInfo={updateInfo} createNewCar={createNewCar} />
      <h1>Cars in Ofert</h1>
      <button onClick={createNewCar}>Create Car</button>
      <div>{
        cars?.map(car => (
          <CardCars  setUpdateInfo={setUpdateInfo} key={car.id} car={car} getAllCar={getAllCar}/>
        ))
        }
      </div>
      
      
    </div>
  )
}

export default App
