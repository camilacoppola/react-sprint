import React, { createContext, useState } from 'react';

export const consumeThemeContext = createContext();

const ThemeContext = ({children}) => {

    let modoOscuro = localStorage.getItem('modoOscuro');
    if (modoOscuro === undefined || modoOscuro === null){
        localStorage.setItem('modoOscuro', false);
        modoOscuro = false;
    }

    const [darkModeTheme, setTheme] = useState(modoOscuro);

    const toggleTheme = () => {
        setTheme(!darkModeTheme);
    }

    return (
        <consumeThemeContext.Provider value={{darkModeTheme, toggleTheme}}>
            {children}
        </consumeThemeContext.Provider>
    )
}

export default ThemeContext;