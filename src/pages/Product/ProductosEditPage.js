import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
import HeaderSearchHome from '../../components/HeaderSearchHome/HeaderSearchHome'
import PlantillaPagina from '../../components/PlantillaPagina/PlantillaPagina'
import borrarProducto from '../../utils/borrarProducto'
import Product from './Product'
import './ProductEdit.css'
const ProductosEditPage = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const handleDelete = () => {
    console.log("entrooo")
    borrarProducto(id)
    navigate('/products')
  }
  return (
    <PlantillaPagina>
      <div className='botonEliminar' style={{width:"100%"}}>
        <h1 style={{display:"inline"}}>{`Productos > #${id}`}</h1>
        <Button claseBoton={"botonEliminar"} tipoButton="tipoBoton1" textoDescripcion="Eliminar" accion={handleDelete}/>
      </div>
        <Product />
    </PlantillaPagina>
  )
}

export default ProductosEditPage