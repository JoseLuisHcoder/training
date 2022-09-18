import React, { useState } from 'react'

const Forms = () => {
const [search, setSearch] = useState()

const handleInput = e => {
    setSearch(e.target.value)
}
if(search==='gen16'){
    setSearch('Eres alumno de Academlo')
}
console.log(search);

  return (
    <form>
        <h2>Form</h2>
        <input type="text" onChange={handleInput} />
        <h2>{search}</h2>
    </form>
  )
}

export default Forms