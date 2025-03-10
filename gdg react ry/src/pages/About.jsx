// quick fix
// rface
import React, { useContext } from 'react'

const About = () => {
  const {theme, setTheme} = useContext(themeContext);
 
  return (

    <div style = {{backgroundColor : theme}}>

        <h1>About us </h1> 
        <button onClick={()=> setTheme(theme === 'white' ? 'black' : 'white') }>ChangeTheme</button>
      
    </div>
  )
}

export default About
