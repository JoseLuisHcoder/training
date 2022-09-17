import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];

const colorRandom = arr =>{
  const indexColor = Math.floor(Math.random() * arr.length)
  return arr[indexColor];
}
console.log(colorRandom(colors));


function App() {
  const [showPass, setShowPass] = useState('password')
  const [count, setcount] = useState(0)
  const [color, setcolor] = useState()

  const showPassChange = ()=>{
    if(showPass==='password'){
      setShowPass('text')
    }else{
      setShowPass('password')
    }
    
  }
  console.log("dentro");
  useEffect(()=>{
   setcolor(colorRandom(colors))
  },[count])

  
  return (
    <div className="App" style={{backgroundColor:color}}>
        <label htmlFor="">Contraseña</label>
        <input type={showPass} />
        <button onClick={showPassChange} >{`${showPass==='password'?'hide':'show'} password`}</button>
        <hr />
       <h2>{count}</h2>
       <button onClick={()=>setcount(count + 1)}>+1</button>

    
    </div>
  )
}

export default App
