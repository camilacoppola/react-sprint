import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../../components/Productos/InformacionProducto/ProductForm'
import useForm from '../../hooks/useForm'
import useIncrementOrDecrement from '../../hooks/useIncrementOrDecrement'
import actualizarProducto from '../../utils/actualizarProducto'
import guardarProducto from '../../utils/guardarProducto'

const Product = () => {
    const navigate = useNavigate()
    const [producto, setProducto] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then(resp => resp.json())
        .then(data => setProducto(data))
      }, [])






    const handleSubmit = (e,producto) => {
        e.preventDefault()
        console.log('holaactualizar')
        //validaciones igual que arriba.
        /*let productoActualizado = {
            nombre:"cocacola",
            valor: 200,
            descripcion: 'sprite la mejor',
            opcionTienda: 'pescaderia',
            imagen: 'no tiene'
        }*/
        actualizarProducto(producto.id,producto)
        console.log('producto actualizado')
    }
    
  return (
    <>
        <ProductForm producto={producto} handleSubmit={handleSubmit} />
    </>
  )
}

export default Product