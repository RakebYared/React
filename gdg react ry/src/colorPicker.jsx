import React, { useState } from 'react'

const colorPicker = () => {
    
    const [color, setColor] = useState('#000000');

    const handleChange = (e) => {
        setColor(e.target.value)
    }

    return (
    <div>
      <div className='colordisplay' style={{backgroundColor: color}}>
        {color} 
      </div>
      <input
      type='color'
      value = {color}
      onChange={handleChange}
      />
    </div>
  )
}

export default colorPicker
