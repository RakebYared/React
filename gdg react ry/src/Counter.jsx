import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0){
            setCount(count - 1)
        };

    };

    const handleReset = () => {
        setCount(0)

    };

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleDecrement}>-</button>

    </div>
  )
}

export default Counter
