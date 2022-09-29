import React, { useState } from 'react'

const InputControlado = () => {
    const [inputText, setInputText] = useState('')

    const handleChange = e => {
        e.preventDefault()
        setInputText(e.target.value.trim());
    }
    console.log(inputText);
  return (
    <div>
        <h2>Input Controlado</h2>
      
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default InputControlado