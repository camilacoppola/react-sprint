import React, { createContext, useState } from 'react'

export const consumeMenuContext = createContext();

const MenuContext = ({children}) => {
    const [menuVisibility, setMenuVisibility] = useState(false);

        const toggleMenu = function() {
            setMenuVisibility(!menuVisibility);
        }
        
        const changeMenuVisibility = function(menuState){
            setMenuVisibility(menuState);
        }

    return (
        <consumeMenuContext.Provider value={{menuVisibility, toggleMenu, changeMenuVisibility}}>
            {children}
        </consumeMenuContext.Provider>
    )
}

export default MenuContext