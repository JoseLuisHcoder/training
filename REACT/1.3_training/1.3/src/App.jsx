import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ImagePlaya from './componets/ImagePlaya.jsx'

function App() {
 const [isName, setisName] = useState(false);

const toogleState = ()=> {
  setisName(!isName)
}

 return (
    <div className="App">
      <h1 >
        { isName ? <ImagePlaya /> : <h1>Hay una imagen oculta</h1> }
      </h1>
      <button onClick={toogleState}>Change State</button>
      
    </div>
  )
}

export default App
