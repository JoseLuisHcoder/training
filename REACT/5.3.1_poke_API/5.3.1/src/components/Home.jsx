import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slice/nameTrainer.slice'

const Home = () => {

   const dispatch = useDispatch()
   const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.name.value.trim()
        if(inputValue.length !== 0){
            dispatch(setNameTrainer(inputValue))
            navigate('/pokedex')
        }
        e.target.name.value = ""
    }

  return (
    <div>
        <h1>Hi Trainer</h1>
        <p>To Start give me your trainer name</p>
        <form onSubmit={handleSubmit}>
            <input id='name' type="text" />
            <button>Catch them All</button>
        </form>
    </div>
  )
}

export default Home