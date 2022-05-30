import React from 'react'
import Button from '../../components/Button/Button';
import './ErrorStore.css'

const ErrorStore = () => {
  return (
    <div className='ErrorStore-container'>
      <div className='ErrorStore-container_error'>
        <h1 className= 'ErrorStore-informacion_error'>Error: Pagina fuera de alcance</h1>
      </div>
      <div className='ErrorStore-containerButton_error'>
        <Button  tipoButton={"tipoLink1"} textoDescripcion={"Volver al inicio"} linkTo={'/'} />
      </div>
    </div>
  )
}

export default ErrorStore