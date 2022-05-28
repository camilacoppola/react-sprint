import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../../components/Productos/InformacionProducto/ProductForm'
import ProductoDescripcion from '../../components/Productos/ProductoDescripcion/ProductoDescripcion'
import actualizarProducto from '../../utils/actualizarProducto'
import '../Products/ProductoEditAndCreate.css' //deberia estar sobre esta carpeta

const Product = () => {
    const navigate = useNavigate()
    const [producto, setProducto] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then(resp => resp.json())
        .then(data => setProducto(data))
      }, [])

    const handleSubmit = (producto) => {
        actualizarProducto(producto.id,producto)
    }
    
  return (
    <main className='ProductoEditAndCreate-contenedor_main'>          
        <ProductoDescripcion producto={producto}/>   
        <ProductForm producto={producto} handleSubmit={handleSubmit} />
    </main>
  )
}

export default Product