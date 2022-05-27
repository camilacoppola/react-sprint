import React from 'react'
import GaleriaImagenesActuales from '../GaleriaImagenesActuales/GaleriaImagenesActuales'
import InformacionProducto from '../InformacionProducto/InformacionProducto'
import ProductoDescripcion from '../ProductoDescripcion/ProductoDescripcion'

import './Producto.css'


const Productos = () => {
  return (
    <>
      {/*Header Productos > #id                   Boton eliminar*/}
      <main className='Producto-contenedor_main'>
          {/*<ProductoDescripcion /> este es condicional dependiendo si edita o agrega producto */} 
          <InformacionProducto />
      </main>
    </>
  )
}

export default Productos