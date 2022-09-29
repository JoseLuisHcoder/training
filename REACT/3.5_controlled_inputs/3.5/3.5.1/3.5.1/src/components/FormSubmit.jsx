import React, { useState } from 'react'

const FormSubmit = () => {
    const [formSubmit, setFormSubmit] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        const obj = {}
            obj.name = e.target.name.value
            obj.lastname = e.target.lastname.value
            obj.email = e.target.email.value
        setFormSubmit(obj)
    }
    console.log(formSubmit);
  return (
    <form onSubmit={handleSubmit}>
        <h2>Form Submit</h2>
        <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder='name' />
        </div>
        <div>
            <label htmlFor="lastname">Apellido</label>
            <input type="text" id='lastname' placeholder='lastname' />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='email' />
        </div>
            <button>Submit</button>
    </form>
  )
}

export default FormSubmit