import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderSearchHome from '../../components/HeaderSearchHome/HeaderSearchHome'
import PlantillaPagina from '../../components/PlantillaPagina/PlantillaPagina'
import Product from './Product'

const ProductosEditPage = () => {

  const {id} = useParams()

  return (
    <PlantillaPagina>
        <h1>{`Productos > #${id}`}</h1>
        <Product />
    </PlantillaPagina>
  )
}

export default ProductosEditPage