import React from 'react'
import CardProducto from './CardProducto/CardProducto'

import './ProductsList.css'

const ProductsList = ({productos}) => {
  return (
    <section className='ProductList-contenedor_section'>
            {
                productos.map(producto => (
                    <CardProducto producto={producto} key={producto.id} />
                ))
            }
    </section>
  )
}

export default ProductsList