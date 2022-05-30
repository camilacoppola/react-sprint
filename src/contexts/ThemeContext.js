import React, { createContext, useEffect, useState } from 'react';
import useLocalStorageGet from '../hooks/useLocalStorageGet';

export const consumeThemeContext = createContext();

const ThemeContext = ({children}) => {

    const [value] = useLocalStorageGet('modoOscuro');
    const [darkModeTheme, setTheme] = useState();

    useEffect(() =>{
        if(value === null){
            localStorage.setItem('modoOscuro', false);
            setTheme(false);
        }else{
            console.log()
            setTheme(value);
        }
    }, [])

    const toggleTheme = () => {
        localStorage.setItem('modoOscuro', !darkModeTheme);
        setTheme(!darkModeTheme);
    }

    return (
        <consumeThemeContext.Provider value={{darkModeTheme, toggleTheme}}>
            {children}
        </consumeThemeContext.Provider>
    )
}

export default ThemeContext;