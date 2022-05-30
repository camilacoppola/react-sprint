import React from 'react'
import Button from '../Button/Button'
import './HeaderSearchHome.css'
import logoLupa from '../../assets/img/lupa.svg'

const HeaderSearchHome = () => {
  return (
    <div className='hsh-container'>
        <p>Productos</p>
        <div className='hsh-containerBuscador'>
            <div className='hsh-containerInput'>
                <input className='hsh-input' placeholder='Buscar Productos' />
                <button className='hsh-iconoBoton'> <img className='hsh-iconoBuscador' src={logoLupa}/></button>
            </div>
            <Button tipoButton={"tipoBoton1"} textoDescripcion={"Agregar producto"}/>
        </div>
    </div>
  )
}

export default HeaderSearchHome