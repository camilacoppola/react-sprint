import React, { useContext, useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import { productContext } from '../../contexts/ProductosContext'
import './Products.css'


const Productos = () => {
  
 const {productos} = useContext(productContext)
  
  return (
    <>
      {/*Header Productos > #id                   Boton eliminar*/}
      <main className='Products-contenedor_main'>
          <ProductsList productos={productos} />
      </main>
    </>
  )
}

export default Productos