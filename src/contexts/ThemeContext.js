import React, { createContext, useState } from 'react'

export const consumeThemeContext = createContext();

const ThemeContext = ({children}) => {
    const [darkModeTheme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(!darkModeTheme)
    }

    return (
        <consumeThemeContext.Provider value={{darkModeTheme, toggleTheme}}>
            {children}
        </consumeThemeContext.Provider>
    )
}

export default ThemeContext