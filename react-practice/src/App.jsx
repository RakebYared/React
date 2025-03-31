import React from 'react'
import {Brow}

const App = () => {
  return (
    <div>
      <Routes>
            <Route path={`${localStorage.getItem('token')? '/Home' : '/Login'}`} element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/user-profile/:id' element={<UserProfile/>}/>
  
        </Routes>
    </div>
  )
}

export default App
