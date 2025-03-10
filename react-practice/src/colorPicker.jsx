import React, { useState } from 'react'

const colorPicker = () => {
    
    const [color, setColor] = useState();
    const handleChange = (event) => {
        setColor(event.target.value)
    }
    return (
    <div className='container'>
      <h1>Color Picker</h1>
      <p>pick any color you like :)</p>
      <div className='colordisplay' style={{backgroundColor: color}}>
        {color} 
      </div>
      <br />
      <label>Select Color: </label>
      <input
      type='color'
      value = {color}
      onChange={handleChange}
      />
    </div>
  )
}

export default colorPicker
