import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/components/routes/Home'
import ProductsDetails from './components/components/routes/ProductsDetails'
import Login from './components/components/routes/Login'
import Purchases from './components/components/routes/Purchases'
import Header from './components/components/routes/shared/Header'
import Cart from './components/components/routes/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductsDetails />}  />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />

        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App

// https://documenter.getpostman.com/view/5028918/UVypxw3W#8d80d26a-7c0a-4283-a272-253ae4144624.   
// https://dashing-puppy-89779d.netlify.app/
// URL en postman
