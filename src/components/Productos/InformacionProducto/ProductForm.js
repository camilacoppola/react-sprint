import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import useIncrementOrDecrement from '../../../hooks/useIncrementOrDecrement'
import actualizarProducto from '../../../utils/actualizarProducto'

import GaleriaImagenesActuales from '../GaleriaImagenesActuales/GaleriaImagenesActuales'
import './ProductForm.css'

const ProductForm = ({producto = {},handleSubmit}) => {
    console.log(producto)
    
    
    
    const [error, setError] = useState({
        estado: false,
        msg: ''
    })
    
    
    const [form,handleChangeForm,limpiarForm,cambiarCampos] = useForm({
        nombre:'',
        valor: 0,
        descripcion: '',
        opcionTienda: '',
        imagen: ''
    })
    
    //const {nombre,valor, descripcion, opcionTienda, imagen} = form
    //console.log(nombre, ' nombre')
    const [stock,incrementar,decrementar] = useIncrementOrDecrement(0)
    
    useEffect(() => {
      if(producto){
        cambiarCampos(producto)
      }
    }, [producto])


    
  return (
    <section>
                <h2>Informacion</h2>
                <div>
                    <label>Nombre</label>
                    <input placeholder='Nombre' name='nombre' type={"text"} value={form.nombre} onChange={handleChangeForm} />
  </div>
                {/*<div>
                    <label>Valor</label>
                    <input placeholder='Valor' name='valor' type={"number"} value={valor} onChange={handleChangeForm}/>
                </div>
                <div className=''>
                    <label>Stock</label>
                    <div className='InformacionProducto-contenedor_stockProducto'>
                        <button onClick={decrementar}>-</button>
                        <span>{stock}</span>
                        <button onClick={incrementar}>+</button>
                    </div>
                </div>
                <div className="">
                    <label>Descripcion</label>
                    <input className='InformacionProducto-contenedor_descripcionInput' placeholder='Descripcion' value={descripcion} name="descripcion" onChange={handleChangeForm}/>
                </div>
                <div>
                    <label>Tienda</label>
                    <select name='opcionTienda' value={opcionTienda} onChange={handleChangeForm}>
                        <option value="frutas">Lola Castro Frutas</option>
                        <option value="mariscos">Ultramariscos Lolo Castro</option>
                        <option value="pescados">Pescados El Boquerón</option>
                    </select>
                </div>
  <GaleriaImagenesActuales imagen={imagen} handleChangeForm={handleChangeForm}/>*/}
                <form onSubmit={handleSubmit}>
                    <button>Guardar</button>
                    <button><Link to="/asdsad">Cancelar</Link></button>
  </form>
    </section>
  )
}

export default ProductForm