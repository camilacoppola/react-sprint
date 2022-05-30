import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductForm from '../../components/Productos/InformacionProducto/ProductForm'
import { consumeThemeContext } from '../../contexts/ThemeContext'
import guardarProducto from '../../utils/guardarProducto'
import '../Products/ProductoEditAndCreate.css'
const CreateProduct = () => {
    const navigate = useNavigate()

    const handleSubmit = async(producto) => {
        producto.imagenes = [producto.imagen]
        await guardarProducto({
            ...producto
        })
        navigate('/products')
    }

    const {darkModeTheme} = useContext(consumeThemeContext)
    console.log(darkModeTheme)


    return (
        <main className={darkModeTheme?'ProductoEditAndCreate-contenedor_main lightmode':'ProductoEditAndCreate-contenedor_main' } style={{overflowY:"scroll"}}>
            <ProductForm handleSubmit={handleSubmit}/>
        </main>
      )
}

export default CreateProduct