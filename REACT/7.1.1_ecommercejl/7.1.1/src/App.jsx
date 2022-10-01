import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/components/routes/Home'
import ProductsDetails from './components/components/routes/ProductsDetails'
import Login from './components/components/routes/Login'
import Purchases from './components/components/routes/Purchases'
import Header from './components/components/routes/shared/Header'

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
      </Routes>
    </div>
  )
}

export default App
