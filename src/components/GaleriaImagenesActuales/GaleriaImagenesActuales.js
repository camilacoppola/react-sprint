import React from 'react'
import useForm from '../../hooks/useForm'

const GaleriaImagenesActuales = ({imagen,handleChangeForm}) => {


  return (
    <section>
            <h2>Galeria de imagenes</h2>
            <div>
                <label>Nueva Imagen</label>
                <input placeholder='url imagen' name='imagen' type={"text"} value={imagen} onChange={handleChangeForm} />
            </div>
            <div>
                {/*<ImagenesActuales /> iterar sobre el context de las iamgenes o de donde vnegna de la api */}
            </div>
    </section>
  )
}

export default GaleriaImagenesActuales