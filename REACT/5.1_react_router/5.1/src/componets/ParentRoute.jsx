import React from 'react'
import { Outlet } from 'react-router-dom'

const ParentRoute = () => {
  return (
    <div>
        <Outlet />
        <h2>header ParentRoute</h2>
            <Outlet />
        <h2>Footer ParentRoute</h2>
        <Outlet />
    </div>
    
  )
}

export default ParentRoute