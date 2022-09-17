import { useState } from 'react'

import './App.css'
import CardUsers from './componets/CardUsers';
import users from './json/users.json';
import colors from './componets/utilities/colors'





function App() {
  const getRandomElement = (arr)=>{
    const indexRandom = Math.floor(Math.random()*arr.length)
    
    return arr[indexRandom]
  }
  let genUserRandom = getRandomElement(users)
  let genColorRandom = getRandomElement(colors)


  const [userRandom, setUserRandom] = useState(genUserRandom)
  const [colorRandom, setColorRandom] = useState(genColorRandom)
  
  const colorBg = {
    background:colorRandom
  }
  const clickBtn = ()=>{
    genUserRandom = getRandomElement(users)
    genColorRandom = getRandomElement(colors)

    setColorRandom(genColorRandom)
    setUserRandom(genUserRandom)


  }
  
  return (
    <div className="App" style={colorBg} >
      <CardUsers userRandom={userRandom} colorRandom={colorRandom} clickBtn={clickBtn}/>
    </div>
  )
}

export default App
