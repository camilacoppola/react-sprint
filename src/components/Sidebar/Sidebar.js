import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { consumeMenuContext } from '../../contexts/MenuContext'

const Sidebar = () => {

  const {menuVisibility}  = useContext(consumeMenuContext)

  const [menuVisibilidad, setMenuVisibilidad] = useState(menuVisibility)

  console.log(menuVisibility)

  useEffect(() => {
    setMenuVisibilidad(menuVisibility)
  }, [menuVisibility])

  return (
    <aside className={menuVisibilidad ? 'Sidebar Sidebar-showed' : 'Sidebar'}>
      <img src='/icons/logo.svg'></img>
        <nav>
          <ul>
              <li>
                <NavLink to="/">
                  <img src='/icons/home.svg' alt='Icono home' />
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/new">
                    <img src='/icons/package-variant-closed.svg' alt='Icono productos'/>
                    Productos
                </NavLink>
              </li>
          </ul>
        </nav>
    </aside>
  )
}

export default Sidebar