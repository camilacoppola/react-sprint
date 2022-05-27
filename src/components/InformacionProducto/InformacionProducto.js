import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import useIncrementOrDecrement from '../../hooks/useIncrementOrDecrement'
import guardarProducto from '../../utils/guardarProducto'
import GaleriaImagenesActuales from '../GaleriaImagenesActuales/GaleriaImagenesActuales'
import './InformacionProducto.css'

const InformacionProducto = () => {
    
    const navigate = useNavigate()

    const [error, setError] = useState({
        estado: false,
        msg: ''
    })

    const [form,handleChangeForm,limpiarForm] = useForm({
        nombre:'',
        valor: 0,
        descripcion: '',
        opcionTienda: '',
        imagen: ''
    })

    const {nombre,valor, descripcion, opcionTienda, imagen} = form

    const [stock,incrementar,decrementar] = useIncrementOrDecrement(0)

    const handleGuardarProducto = async(e) => {
        e.preventDefault()
        //limpiarForm()
        if(nombre === '' || imagen === '' || valor === '' || stock === '' || opcionTienda === ''){
            //setError({estado:true,msg:'No se pueden dejar campos vacios'})
            return
        }
        console.log("hola")
        if(Number(valor) <= 0 || Number(stock) <= 0){
            //setError({estado:true,msg:"No se pueden negativos, ni stock 0"})
            return
        }
        console.log("hola")
        await guardarProducto({
            ...form,
            imagenes:[imagen],
            stock
        })
        //setError({estado:false,msg:''})
        navigate('/')
        console.log(imagen, ' ', nombre, ' ',valor, ' ', stock, ' ', descripcion, ' ', opcionTienda)
    }

  return (
    <section>
                <h2>Informacion</h2>
                <div>
                    <label>Nombre</label>
                    <input placeholder='Nombre' name='nombre' type={"text"} value={nombre} onChange={handleChangeForm} />
                </div>
                <div>
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
                <GaleriaImagenesActuales imagen={imagen} handleChangeForm={handleChangeForm}/>
                <form onSubmit={handleGuardarProducto}>
                    <button>Guardar</button>
                    <button><Link to="/asdsad">Cancelar</Link></button>
                </form>
    </section>
  )
}

export default InformacionProducto