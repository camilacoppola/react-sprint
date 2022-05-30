import React, { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'

import './Products.css'


const Productos = () => {
  
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/products")
    .then(resp => resp.json())
    .then(data => setProductos(data))
  }, [])
  
  
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