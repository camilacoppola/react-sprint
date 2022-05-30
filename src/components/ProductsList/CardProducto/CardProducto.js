import React, { useContext } from 'react'
import flechita from '../../../assets/img/flechita.png'
import './CardProducto.css'
import { Link } from 'react-router-dom'
import {consumeThemeContext} from '../../../contexts/ThemeContext'

const CardProducto = ({producto}) => {
    
  const {darkModeTheme} = useContext(consumeThemeContext)
  
  return (
    <article className={darkModeTheme?'CardProducto-container_article':'CardProducto-container_article CardProducto-container_article-modo_claro'}>
        <div className='CardProducto-container_producto'>
            <div className='CardProducto-container_imagenProducto'>
                <img src={producto.imagen} />
            </div>
            <div className='CardProducto-container_descripcion'>
                <p>{producto.nombre + ' ' +producto.descripcion}</p>
                <h6>#{producto.id}</h6>
            </div>
        </div>
        <div className='CardProducto-container_flechita'>
            <Link to={`/products/${producto.id}`}><img src={flechita} /></Link>
        </div>
    </article>
  )
}

export default CardProducto