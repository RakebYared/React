import React from 'react'
import { useParams, Link } from 'react-router-dom'

const userProfile = () => {
    const { id } = useParams();
    const array = ['a', 'b', 'c'];
    return (
    <div>
      <h1>User Id {array[Number(id)]}</h1>
      <br />
      <Link to = '/user-profile/0' style = {{marginLeft : '10px'}}>person 1</Link>
      <Link to = '/user-profile/1' style = {{marginLeft : '10px'}}>person 1</Link>
      <Link to = '/user-profile/2' style = {{marginLeft : '10px'}}>person 1</Link>

    </div>
  )
}

export default userProfile
