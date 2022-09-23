import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import CardMovies from './components/CardMovies'


function App() {
  const [movies, setMovies] = useState()
  

  const getMovies = ()=>{
    const URL = 'http://movies-crud-academlo.herokuapp.com/movies/'

    axios.get(URL)
      .then(res=> setMovies(res.data) )
      .catch(err=>console.log(err))
  }

  useEffect(()=>{
    getMovies()
  }, [])
const getAllMovies = ()=>{
  const URL = 'http://movies-crud-academlo.herokuapp.com/movies/'

  axios.get(URL)
    .then(res=> setMovies(res.data) )
    .catch(err=>console.log(err))
}

const createNewMovie = () => {
  const URL = 'http://movies-crud-academlo.herokuapp.com/movies/'
  const data = {
    name:'netflix',
    genre:'netflix',
    duration:'fdf',
    release_date: '2003-10-10'
  }
  axios.post(URL, data)
    .then(res=>getAllMovies())
    .catch(err=>console.log(err))
}
  return (
    <div className="App">
      <h1>Movies CRUD</h1>
      <div className="card__container">
        {
          movies?.map(movie =>(
            <CardMovies getAllMovies={getAllMovies} key={movie.id} movie={movie} />  
          ))

        }
        <button onClick={createNewMovie}>Create Movie</button>    
      </div>
    </div>
  )
}

export default App
