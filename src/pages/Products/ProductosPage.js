import React from 'react'
import HeaderSearchHome from '../../components/HeaderSearchHome/HeaderSearchHome'
import PlantillaPagina from '../../components/PlantillaPagina/PlantillaPagina'
import ProductosProvider from '../../contexts/ProductosContext'
import Productos from './Productos'

const ProductosPage = () => {
  return (
    <ProductosProvider>
      <PlantillaPagina>
          <HeaderSearchHome /> 
          <Productos />
      </PlantillaPagina>
   </ProductosProvider>

  )
}

export default ProductosPage