import React from 'react'
import HeaderSearchHome from '../../components/HeaderSearchHome/HeaderSearchHome'
import PlantillaPagina from '../../components/PlantillaPagina/PlantillaPagina'
import Productos from './Productos'

const ProductosPage = () => {
  return (
    <PlantillaPagina>
        <HeaderSearchHome /> 
        <Productos />
    </PlantillaPagina>
  )
}

export default ProductosPage