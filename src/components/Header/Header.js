import React, { useContext, useEffect, useState } from 'react'
import HeaderContent from '../HeaderContent/HeaderContent'
import Sidebar from '../Sidebar/Sidebar'
import './Header.css'
import MenuContext, { consumeMenuContext }  from '../../contexts/MenuContext'
import {consumeThemeContext} from '../../contexts/ThemeContext'

const Header = ({children, styleHeader}) => {
  
  const {toggleMenu} = useContext(consumeMenuContext)

  const {darkModeTheme} = useContext(consumeThemeContext);
  console.log(window.innerWidth)

  

  return (
    <header className={darkModeTheme?'Header':'Header Header-modo_claro'}>
        <button className={'Header-button_hide'} onClick={toggleMenu}>
          <img className='Header-button_hide-image' src='/icons/menu.svg' alt='Icono menu'/>
        </button>
        <HeaderContent >
            {children}
        </HeaderContent >
    </header>
  )
}

export default Header