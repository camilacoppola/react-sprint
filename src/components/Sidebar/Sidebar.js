import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { consumeMenuContext } from '../../contexts/MenuContext'

const Sidebar = () => {

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

  return (
    <aside ref={sidebar} className={menuVisibilidad ? 'Sidebar Sidebar-showed' : 'Sidebar'}>
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
        <div className='Sidebar-container-user'>
          <img className='Sidebar-container-user-image' src='/photos/foto_user_perfil.jpg' alt='Foto de perfil de usuario'></img>
          <p className='Sidebar-container-user-text'>Nombre usuario</p>
        </div>
    </aside>
  )
}

export default Sidebar