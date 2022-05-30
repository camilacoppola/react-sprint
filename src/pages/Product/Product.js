import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../../components/Productos/InformacionProducto/ProductForm'
import ProductoDescripcion from '../../components/Productos/ProductoDescripcion/ProductoDescripcion'
import actualizarProducto from '../../utils/actualizarProducto'
import borrarProducto from '../../utils/borrarProducto'
import '../Products/ProductoEditAndCreate.css' //deberia estar sobre esta carpeta

const Product = () => {
    const navigate = useNavigate()
    const [producto, setProducto] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then(resp => resp.json())
        .then(data => {
          setProducto(data)
        })
      }, [])

    const handleSubmit = (producto) => {
        //producto.imagen = [...producto.imagen, imagen]
        producto.imagenes = [...producto.imagenes, producto.imagen]
        actualizarProducto(producto.id,producto)
    }

    const handleDelete = () => {
      borrarProducto(producto.id)
    }
    
  return (
    <>
      {/*<Header handleDelete={handleDelete}/>*/} 
      {/*Hacer un contexto desde aca para el renderizado al tocar el boton quitar de lo productos. */}
      <main className='ProductoEditAndCreate-contenedor_main'>  
        {
          Object.keys(producto).length > 0 &&
          <>
            <ProductoDescripcion producto={producto}/>                   
            <ProductForm producto={producto} handleSubmit={handleSubmit} />
          </>
        }
      </main>
    </>
  )
}

export default Product