import React, { useContext, useState } from 'react'
import HeaderContent from '../HeaderContent/HeaderContent'
import Sidebar from '../Sidebar/Sidebar'
import './Header.css'
import MenuContext, { consumeMenuContext }  from '../../contexts/MenuContext'

const Header = ({children}) => {
  const {toggleMenu} = useContext(consumeMenuContext)

  return (
    <header className='Header'>
        <button className='Header-button_hide' onClick={toggleMenu}>
          <img src='/icons/menu.svg' alt='Icono menu'/>
        </button>
        <HeaderContent >
            {children}
        </HeaderContent >
    </header>
  )
}

export default Header