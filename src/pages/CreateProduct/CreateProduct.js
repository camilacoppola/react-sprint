import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductForm from '../../components/Productos/InformacionProducto/ProductForm'
import guardarProducto from '../../utils/guardarProducto'
import '../Products/ProductoEditAndCreate.css'
const CreateProduct = () => {
    const navigate = useNavigate()

    const handleSubmit = async(producto) => {
        await guardarProducto({
            ...producto
        })
        navigate('/products')
    }




    return (
        <main className='ProductoEditAndCreate-contenedor_main'>
            <ProductForm handleSubmit={handleSubmit}/>
        </main>
      )
}

export default CreateProduct