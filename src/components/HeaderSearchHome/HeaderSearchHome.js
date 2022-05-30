import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button/Button'
import './HeaderSearchHome.css'
import logoLupa from '../../assets/img/lupa.svg'
import { productContext } from '../../contexts/ProductosContext'

const HeaderSearchHome = () => {
const [buscador, setBuscador] = useState("")
const {productos, buscarProductosRelacionados} = useContext(productContext)

const handleChange = (event) =>{
  setBuscador(event.target.value)
}

useEffect(() => {
  buscarProductosRelacionados(buscador)
}, [buscador])



  return (
    <div className='hsh-container'>
        <p>Productos</p>
        <div className='hsh-containerBuscador'>
            <div className='hsh-containerInput'>
                <input className='hsh-input' placeholder='Buscar Productos' name='buscador' value={buscador} onChange={handleChange}/>
                <button className='hsh-iconoBoton'> <img className='hsh-iconoBuscador' src={logoLupa}/></button>
            </div>
            <Button tipoButton={"tipoLink1"} textoDescripcion={"Agregar producto"} linkTo={"/products/new"}/>
        </div>
    </div>
  )
}

export default HeaderSearchHome