import React, { useState } from 'react'

const Form = () => {
    const [search, setSearch] = useState()

    const handleInput = e => {
        setSearch(e.target.value)
        if(search === 'gen18'){
            alert('Eres alumno de academlo')
        }

    }

  return (
    <form>
        <h2>Form</h2>
        <input onChange={handleInput} type="text" />
    </form>
  )
}

export default Form