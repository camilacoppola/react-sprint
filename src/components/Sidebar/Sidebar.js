import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { consumeMenuContext } from '../../contexts/MenuContext'
import { consumeThemeContext } from '../../contexts/ThemeContext'
import Button from '../Button/Button'

const Sidebar = () => {

  const {darkModeTheme, toggleTheme} = useContext(consumeThemeContext)

  const {menuVisibility, changeMenuVisibility}  = useContext(consumeMenuContext)

  const [menuVisibilidad, setMenuVisibilidad] = useState(menuVisibility)

  useEffect(() => {
    setMenuVisibilidad(menuVisibility)
  }, [menuVisibility])

  useEffect(() =>{
    if(menuVisibility){
      document.addEventListener('click', (e) =>{
        if(sidebar.current.classList.contains("Sidebar-showed") && !sidebar.current.contains(e.target)){
          sidebar.current.classList.remove('Sidebar-showed')
          changeMenuVisibility(false)
        }
      })
    }
  }, [menuVisibility])

  const sidebar = useRef();

  let nameDeClaseSidebar = 'Sidebar'

  if(menuVisibilidad){
    nameDeClaseSidebar = 'Sidebar Sidebar-showed';
  }
  
  if(!darkModeTheme){
    nameDeClaseSidebar += ' Sidebar-modo_claro'
  }

  return (
    <aside ref={sidebar} className={nameDeClaseSidebar}>
      <img className='Sidebar-logo' src='/icons/MiEcommerce.svg' alt='Logo de Ecommerce'></img>
        <nav>
          <ul className='Sidebar-nav'>
              <li>
                <NavLink className='Sidebar-nav-link' to="/">
                  <img className='Sidebar-nav-link-icon' src='/icons/home.svg' alt='Icono home' />
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink className='Sidebar-nav-link' to="/products/new">
                    <img className='Sidebar-nav-link-icon' src='/icons/package-variant-closed.svg' alt='Icono productos'/>
                    Productos
                </NavLink>
              </li>
          </ul>
        </nav>
        {darkModeTheme?
        (<button onClick={toggleTheme} className='Sidebar-Boton_modo_oscuro'><img className='Sidebar_boton_theme_icon' src="./icons/light_mode.svg"/> Cambiar a modo claro</button>) :
        (<button onClick={toggleTheme} className='Sidebar-Boton_modo_claro'><img className='Sidebar_boton_theme_icon boton_theme_oscuro' src="./icons/dark_mode.svg"/> Cambiar a modo oscuro </button>)
        }
        <div className='Sidebar-container-user'>
          <img className='Sidebar-container-user-image' src='/photos/foto_user_perfil.jpg' alt='Foto de perfil de usuario'></img>
          <p className='Sidebar-container-user-text'>Nombre usuario</p>
        </div>
    </aside>
  )
}

export default Sidebar