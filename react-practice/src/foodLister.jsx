import React, { useState } from 'react'

const foodLister = () => {
    const [foods, setFoods] = useState([]);
    const [food, setFood] = useState('');

    const handleSubmit = () => {
        setFoods(f => [...f, food])
        setFood('')

    };

  return (
    <div>
        <ul>
            {foods.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            
        </ul>
        <input 
        type="text"
        placeholder='Enter food name' 
        value = {food}
        onChange={(event) => {setFood(event.target.value)}}/>
        
        <button style={{marginLeft : '10px'}} onClick={handleSubmit}>submit</button> 
    </div>
  )
}

export default foodLister
