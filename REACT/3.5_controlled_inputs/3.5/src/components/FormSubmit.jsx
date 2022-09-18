import React, { useState } from 'react'



const FormSubmit = () => {

    const [forminfo, setForminfo] = useState()

const handleSubmit = e =>{
    e.preventDefault()

    const obj = {}
        obj.name = e.target.name.value
        obj.lastname = e.target.lastname.value
        obj.email = e.target.email.value
    setForminfo(obj)
    console.log(forminfo);
}

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" placeholder='name' />
        <label htmlFor="lastname">Apellido</label>
        <input type="text" id="lastname" placeholder='lastname' />
        <label htmlFor="email">email</label>
        <input type="email" id="email" placeholder='email' />
        <button>Submit</button>
    </form>
  )
}

export default FormSubmit