import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './componets/Home'
import AboutMe from './componets/AboutMe'
import Project from './componets/Project'
import Contact from './componets/Contact'
import CharacterId from './componets/CharacterId'
import ParentRoute from './componets/ParentRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <Link to='/'>Go to Home</Link>
        <Link to='/aboutme'>AboutMe</Link>
        <Link to='/project'>Project</Link>
        <Link to='/contact'>Contac</Link>
        <Link to='/character/:id'>Character</Link>
      </nav>
      <Routes>
        <Route element={<ParentRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>Not Found</h1>} />
            <Route path='/character/:id' element={<CharacterId />} />
        </Route>

      </Routes>
      
    </div>
  )
}

export default App
