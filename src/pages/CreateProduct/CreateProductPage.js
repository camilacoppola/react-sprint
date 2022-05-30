import React from 'react'
import PlantillaPagina from '../../components/PlantillaPagina/PlantillaPagina'
import CreateProduct from './CreateProduct'

const CreateProductPage = () => {
  return (
    <PlantillaPagina>
        <h1>{"Productos > Nuevo Producto"}</h1>
        <CreateProduct/>
    </PlantillaPagina>
  )
}

export default CreateProductPage