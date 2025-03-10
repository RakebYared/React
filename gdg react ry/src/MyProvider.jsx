import React from 'react'
import { createContext, useState } from 'react';

export const themeContext = createContext();

const MyProvider = ({children}) => {
    const [theme, setTheme] = useState('hello world');
  return (
    <div>
      <themeContext.Provider value ={{theme, setTheme}}>
        {children}
      </themeContext.Provider>
    </div>
  )
}

export default MyProvider
