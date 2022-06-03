import React, { useContext, useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import { productContext } from '../../contexts/ProductosContext'
import './Products.css'
import {consumeThemeContext} from '../../contexts/ThemeContext'

const Productos = () => {
  
 const {productos} = useContext(productContext) 
 const {darkModeTheme} = useContext(consumeThemeContext)
 const [productosFR, setProductosFR] = useState(0)

 useEffect(() => {
   setProductosFR(x => x + 1)
 }, [productos])
 
 const renderizarResultados = () => {
   if(productosFR < 3){
     return <h2>Cargando...</h2>
   }
   else if(productos.length > 0){
     return <ProductsList productos={productos} />
   }
   else{
    return <h2>No hay coincidencias</h2>
   }
 }


  return (
    <>
      <main className={darkModeTheme?'Products-contenedor_main':'Products-contenedor_main Products-modo_claro'}>
        {renderizarResultados()}
      </main>
    </>
  )
}

export default Productos