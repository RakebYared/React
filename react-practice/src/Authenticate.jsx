import axios from 'axios';
import React from 'react'

const Authenticate = () => {

    const handleSubmit = async (e) => {

        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log('password')


        try{
            const response = await axios.post('https://reqres.in/api/login' , {email, password} )
            localStorage.setItem('token', response.data.token)

        }
        catch(error){
            console.error(error.response)
        }
    };

  return (
    <div>
        <form id='form' onSubmit={(e) => handleSubmit(e)}>
        {/* <label htmlFor = 'email' >Email</label> */}
        <input className = 'border-2' key= 'email' id='email' type="text"/>
        <br />
        {/* <label htmlFor = 'pass' >Password</label> */}
        <input className = 'border-2' id ='password' type='password'/>
        <input type='submit'/>
        </form>
      
    </div>
  )
}

export default Authenticate
