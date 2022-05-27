import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ErrorStore.css'

const ErrorStore = () => {
  const navigate = useNavigate();

    const handleVolverInicio = () => {
        navigate('/');
    }

  return (
    <div>
      <div className='ErrorStore-container_error'>
        <h1 className= 'ErrorStore-informacion_error'>Error: Pagina fuera de alcance</h1>
      </div>
      <div className='ErrorStore-containerButton_error'>
        <button className='ErrorStore-button_error' onClick={handleVolverInicio}>Volver al inicio</button>
      </div>
    </div>
  )
}

export default ErrorStore