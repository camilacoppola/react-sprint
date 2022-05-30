import React, { useContext } from 'react'
import Button from '../../components/Button/Button';
import { consumeThemeContext } from '../../contexts/ThemeContext';
import './ErrorStore.css'

const ErrorStore = () => {
  const {darkModeTheme} = useContext(consumeThemeContext)
  return (
    <div className={darkModeTheme ? 'ErrorStore-container' : 'ErrorStore-container ErrorStore-container-modo_claro'}>
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