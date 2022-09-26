import React from 'react'

const InputSearch = ({setInputSearch}) => {
  
    const handleChange = e => {
        console.log(e.target.value)
        setInputSearch(e.target.value)

    }
  
    return (
    <div>
        <input onChange={handleChange} type="text" />
    </div>
  )
}

export default InputSearch