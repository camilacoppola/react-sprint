import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../../components/Productos/InformacionProducto/ProductForm'
import ProductoDescripcion from '../../components/Productos/ProductoDescripcion/ProductoDescripcion'
import { consumeThemeContext } from '../../contexts/ThemeContext'
import traerProductoXId from '../../utils/traerProductoXId'
import actualizarProducto from '../../utils/actualizarProducto'
import borrarProducto from '../../utils/borrarProducto'
import '../Products/ProductoEditAndCreate.css' //deberia estar sobre esta carpeta

const Product = () => {
    const navigate = useNavigate()
    const [producto, setProducto] = useState({}) 
    const {id} = useParams()
     useEffect(() => {
        traerProductoXId(id).then(data => {setProducto(data)})
      }, [])

    const handleSubmit = (producto) => {
        producto.imagenes = [...producto.imagenes, producto.imagen]
        actualizarProducto(producto.id,producto)
        navigate('/products')
    }


    const {darkModeTheme} = useContext(consumeThemeContext)

    
  return (
    <>
      {/*<Header handleDelete={handleDelete}/>*/} 
      {/*Hacer un contexto desde aca para el renderizado al tocar el boton quitar de lo productos. */}
      {/* <ProductoContext> */}
        <main className={darkModeTheme ? 'ProductoEditAndCreate-contenedor_main' : 'ProductoEditAndCreate-contenedor_main ProductoEditAndCreate-modo_claro'} style={{overflow:"scroll"}}> 
          {
            Object.keys(producto).length > 0 &&
            <>
              {/*<Header handleDelete={handleDelete}/>*/}
              <ProductoDescripcion producto={producto}/>                   
              <ProductForm producto={producto} handleSubmit={handleSubmit} setProducto={setProducto} /> 
            </>
          }
        </main>
      {/* </ProductoContext> */}
    </>
  )
}

export default Product