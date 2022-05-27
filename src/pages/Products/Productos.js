import React, { useEffect, useState } from 'react'
import ProductoDescripcion from '../../components/Productos/ProductoDescripcion/ProductoDescripcion'

import './Producto.css'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../../components/Productos/InformacionProducto/ProductForm'


const Productos = () => {
  const [producto, setProducto] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:3001/products')
    .then(resp => resp.json())
    .then(data => {
      let productId = data.find(producto => producto.id === Number(id))
      if(!productId){
        //navigate('/asdasds') //ver a donde lo lleva
      }
      setProducto(productId)
    })
  }, [])

  
  return (
    <>
      {/*Header Productos > #id                   Boton eliminar*/}
      <main className='Producto-contenedor_main'>
          {
            id && <ProductoDescripcion producto={producto}/>
          }
          {/*<ProductoDescripcion /> este es condicional dependiendo si edita o agrega producto */} 
          <ProductForm producto={producto}/>
      </main>
    </>
  )
}

export default Productos