import React, { useContext, useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import { productContext } from '../../contexts/ProductosContext'
import './Products.css'
import {consumeThemeContext} from '../../contexts/ThemeContext'

const Productos = () => {
  
 const {productos} = useContext(productContext)
 const {darkModeTheme} = useContext(consumeThemeContext)

  return (
    <>
      <main className={darkModeTheme?'Products-contenedor_main':'Products-contenedor_main Products-modo_claro'}>
          <ProductsList productos={productos} />
      </main>
    </>
  )
}

export default Productos