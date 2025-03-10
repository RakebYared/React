import React from 'react'

const Lists = () => {
    const data = [
        {name : "Cupcake",
            price : "$ 2.00 "
        },
        {name : "Banana Cake",
            price : "$ 3.50"
        },
        {name : "Browine",
            price : "$ 2.50"
        }

    ];
  return (
    <div>
      <ul>
        {data.map((item)=>(
            <li>{item.name} : {item.price} </li>
))}
      </ul>
    </div>
  )
}

export default Lists
