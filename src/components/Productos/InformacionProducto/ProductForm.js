import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { consumeThemeContext } from '../../../contexts/ThemeContext'
import useForm from '../../../hooks/useForm'
import useIncrementOrDecrement from '../../../hooks/useIncrementOrDecrement'

import GaleriaImagenesActuales from '../GaleriaImagenesActuales/GaleriaImagenesActuales'
import './ProductForm.css'

const ProductForm = ({producto = {},handleSubmit, setProducto}) => {
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
    const [stock,incrementar,decrementar,setStock] = useIncrementOrDecrement(0)
    
    useEffect(() => {
      if(Object.keys(producto).length !== 0){
        //let {nombre,valor,descripcion,imagen,opcionTienda} = producto
        cambiarCampos(producto)
        setStock(producto.stock)
      }
    }, [producto])

    const handleProducto = (e) => {
        e.preventDefault()
        let {nombre,imagen,valor,opcionTienda} = form
        if(nombre === '' || imagen === '' || valor === '' || stock === 0 || opcionTienda === ''){
            setError({estado:true,msg:'No se pueden dejar campos vacios'})
            return
        }
        if(Number(valor) <= 0 || Number(stock) <= 0){
            setError({estado:true,msg:"No se pueden negativos, ni stock 0"})
            return
        }
        setError({estado:false,msg:''})
        handleSubmit({...form,stock})
    }
    
    const {darkModeTheme} = useContext(consumeThemeContext)
  return (
    <section className={darkModeTheme?'Producto-contenedor_main' : 'Producto-contenedor_main Producto-contenedor_main-modo_claro'}>
                <h2 className="ProductoForm-informacion">Informacion</h2>
                <div>
                    <label>Nombre</label>
                    <input placeholder='Nombre' name='nombre' type={"text"} value={form.nombre || ''} onChange={handleChangeForm} />
                </div>
                <div>
                    <label>Valor</label>
                    <input placeholder='Valor' name='valor' type={"number"} value={form.valor || ''} onChange={handleChangeForm}/>
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
                    <textarea className='InformacionProducto-contenedor_descripcionInput' placeholder='Descripcion' value={form.descripcion || ''} name="descripcion" onChange={handleChangeForm}></textarea>
                </div>
                <div>
                    <label>Tienda</label>
                    <select name='opcionTienda' value={form.opcionTienda || ''} onChange={handleChangeForm}>
                        <option disabled  hidden value={""}>Select</option>
                        <option value="frutas">Lola Castro Frutas</option>
                        <option value="mariscos">Ultramariscos Lolo Castro</option>
                        <option value="pescados">Pescados El Boquerón</option>
                    </select>
                </div>
                <GaleriaImagenesActuales setProducto={setProducto} imagen={form.imagen || ''} imagenes={producto.imagenes} handleChangeForm={handleChangeForm} mostrar={Object.keys(producto).length > 0?true:false}/>
                <form onSubmit={(e) => handleProducto(e)} className="InformacionProducto-form_botones">
                    {/* <button><Link to="/products">Cancelar</Link></button> */}
                    <button>Guardar</button>
                </form>
                {
                    error.estado && <p>{error.msg}</p>
                }
    </section>
  )
}

export default ProductForm