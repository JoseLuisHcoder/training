import React, { useState } from 'react'

const Lamp = () => {
    const [OnOff, setOnOff] = useState('off')
  const toogleOnOff = ()=>{
    if(OnOff==='off'){
      setOnOff('on')
    }else{
      setOnOff('off')
    }

  }
  return (
    <div>
        <div className={`circle ${OnOff}`}></div>
        <button onClick={toogleOnOff} className='btn'>{OnOff}</button>
    </div>
  )
}

export default Lamp