import React, { useState } from 'react'

const FormSubmit = () => {

    const [FormInfo, setFormInfo] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        const obj = {}
        obj.name = e.target.name.value
        obj.apellido = e.target.apellido.value
        obj.correo = e.target.correo.value

        setFormInfo(obj)
        
        
          
        
    }

    console.log(FormInfo);
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input id="name" type="text" placeholder='enter your name' />

        <label htmlFor="apellido">Apellido</label>
        <input id="apellido" type="text" placeholder='enter your Apellido' />    
    
        <label htmlFor="correo">Correo</label>
        <input id="correo" type="email" placeholder='enter your correo' />
        <button>Enviar</button>
    </form>
  )
}

export default FormSubmit