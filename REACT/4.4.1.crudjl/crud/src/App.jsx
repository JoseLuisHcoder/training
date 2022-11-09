import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import CarsView from './components/CarsView'

//https://cars-crud.herokuapp.com/swagger/   url de la web de la api DOC
function App() {
  const [cars, setCars] = useState()

  useEffect(() => {
    const URL = 'https://cars-crud.herokuapp.com/cars/'
    axios.get(URL)
      .then(res => getAllCars())
      .catch(err => console.log(err))
  }, [])
  
  const getAllCars = () => {
    const URL = 'https://cars-crud.herokuapp.com/cars/'
    axios.get(URL)
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }

  const createNewCar = () => {
      const URL = 'https://cars-crud.herokuapp.com/cars/'
      const data = {
        brand:'JLH',
        model:'Z7',
        color:'black',
        year:2022,
        price:'15000'
      }

      axios.post(URL, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
  }

console.log(cars);
  return (
    <div className="App">
      
      <button onClick={createNewCar}>New car</button>
      {
        cars?.map(car => (
          <CarsView key={car.id} car={car}/>
        ))
      }
    </div>
  )
}

export default App
