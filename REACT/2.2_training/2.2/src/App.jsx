import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'
import CardUser from './componets/CardUser'


function App() {
  const [user, setuser] = useState()

  useEffect(()=>{
    const URL = "https://randomuser.me/api/"
    axios.get(URL)
    .then(res=>setuser(res.data.results[0]))
    
    .catch()
    console.log(user);
  },[])

  return (
    <div className="App">
       <CardUser user={user} />
           
    </div>
  )
}

export default App
