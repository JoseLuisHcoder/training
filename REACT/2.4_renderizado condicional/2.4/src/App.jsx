import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import CardUser from './components/CardUser'

function App() {
  const [users, setUsers] = useState()

  useEffect(()=>{
    const URL = 'https://randomuser.me/api/?results=20'
    axios.get(URL)
      .then(res=>setUsers(res.data.results))
      .catch(err => console.log(err))

      
  }, [])
  return (
    <div className="App">
     {
      users?.map(user=>(
        <CardUser key={user.login.uuid} user={user}/>
      ))
     }
    </div>
  )
}

export default App
