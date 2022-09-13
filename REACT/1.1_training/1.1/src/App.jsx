import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'



function App() {
  const [count, setCount] = useState(0)

  const hobbies = {
    title:"hobbies",
    list:["Musica", "ir a la playa", "Peliculas"],
    

  }
  const myFavorities = {
    title:"favorities",
    list:["Churrasco", "Saice", "Hamburguesa"],
   

  }

  return (
    <div className="App">
      <ul className='list'>
        <li className='list__item'><b>Nombre: </b>Jose Luis</li>
        <li className='list__item'><b>Edad: </b>43</li>
        <li className='list__item'><b>Pelicula: </b>Matrix</li>
        <li className='list__item'><b>Musica:</b> Rock clasico</li>
      </ul>

      <Card objInfo={hobbies} color="list1"/>

      <Card objInfo={myFavorities} color="list2"/>
      

      <ul className='list'>
      <h2>My Hobbies</h2>
        <li className='list__item'><b>Nombre: </b>Jose Luis</li>
        <li className='list__item'><b>Edad: </b>43</li>
        <li className='list__item'><b>Pelicula: </b>Matrix</li>
        <li className='list__item'><b>Musica:</b> Rock clasico</li>
      </ul>

    </div>
  )
}

export default App
