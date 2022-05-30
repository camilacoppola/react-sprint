import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button/Button'
import './HeaderSearchHome.css'
import logoLupa from '../../assets/img/lupa.svg'
import { productContext } from '../../contexts/ProductosContext'
import {consumeThemeContext} from '../../contexts/ThemeContext'

const HeaderSearchHome = () => {
const {query, setQuery} = useContext(productContext)

const handleChange = (event) =>{
  setQuery(event.target.value)
}

  const {darkModeTheme} = useContext(consumeThemeContext)


  return (
    <div className={darkModeTheme?'hsh-container':'hsh-container hsh-modo_claro'}>
        <p>Productos</p>
        <div className='hsh-containerBuscador'>
            <div className='hsh-containerInput'>
                <input className='hsh-input' placeholder='Buscar Productos' name='buscador' value={query} onChange={handleChange}/>
                <button className='hsh-iconoBoton'> <img className='hsh-iconoBuscador' src={logoLupa}/></button>
            </div>
            <Button claseBoton="hsh-container-agregar_producto" tipoButton={"tipoLink1"} textoDescripcion={"Agregar producto"} linkTo={"/products/new"}/>
        </div>
    </div>
  )
}

export default HeaderSearchHome