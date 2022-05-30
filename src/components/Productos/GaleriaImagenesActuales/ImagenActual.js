import React from 'react'
import './ImagenActual.css'
const ImagenesActuales = ({imagen = [], indice, setProducto}) => {

  const cortarUrl = (url) => {
    return url.slice(0,21)
  }

  const handleQuitarProducto = () => {
    console.log(indice)
    setProducto(prevProducto => ({
      ...prevProducto,
      imagenes:prevProducto.imagenes.filter((img,index) => index !== indice )
    }))
  }

  return (
    <div className='ImagenActual-container_imagen'>
        <div>
          <img className='img-producto' src={imagen} alt="imagen"/>
          <p>{cortarUrl(imagen)}</p>
        </div>
        <div className='ImagenActual-container_button'>
          <button onClick={handleQuitarProducto}>Quitar</button>
        </div>
    </div>
  )
}

export default ImagenesActuales