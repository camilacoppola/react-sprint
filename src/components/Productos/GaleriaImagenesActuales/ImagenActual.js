import React from 'react'
import './ImagenActual.css'
const ImagenesActuales = ({imagen = [], indice}) => {

  const cortarUrl = (url) => {
    return url.slice(0,21)
  }

  return (
    <div className='ImagenActual-container_imagen'>
        <div>
          <img className='img-producto' src={imagen} alt="imagen"/>
          <p>{cortarUrl(imagen)}</p>
        </div>
        <div className='ImagenActual-container_button'>
          <button>Quitar</button>
        </div>
    </div>
  )
}

export default ImagenesActuales