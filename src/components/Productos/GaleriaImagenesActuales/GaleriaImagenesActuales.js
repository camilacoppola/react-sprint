import React from 'react'
import useForm from '../../../hooks/useForm'
import ImagenesActuales from './ImagenActual'

const GaleriaImagenesActuales = ({imagen,handleChangeForm,mostrar,imagenes,setProducto}) => {
  return (
    <section className='GaleriaImagenes-container'>
            <h2 className="ProductoForm-informacion">Galeria de imagenes</h2>
            <div>
                <label>Nueva Imagen</label>
                <input placeholder='url imagen' name='imagen' type={"text"} value={imagen || ''} onChange={handleChangeForm} />
            </div>
            {
              mostrar &&

            <div>
                <label>Imagenes actuales</label>
                {
                  
                  (imagenes.length > 0) &&
                  imagenes.map((img,index) =>
                    <ImagenesActuales setProducto={setProducto} imagen={img} key={index} indice={index}/> 
                  )
                }
            </div>

            }
    </section>
  )
}

export default GaleriaImagenesActuales