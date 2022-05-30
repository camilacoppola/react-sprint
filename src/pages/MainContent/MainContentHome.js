import React, { useContext } from 'react';
import './MainContentHome.css'
import logoProducts from '../../assets/img/package-variant-closed.svg'
import logoTiendas from '../../assets/img/store.svg'
import Button from '../../components/Button/Button';
import { consumeThemeContext } from '../../contexts/ThemeContext';

const MainContentHome = () => {
    const {darkModeTheme} = useContext(consumeThemeContext)

  return (
    <div className={darkModeTheme? 'Home-contenedor_home': 'Home-contenedor_home Home-modo_claro'}>
        <div className='Home-productos_home'>
            <div className='Home-imgDescripcion_home'>
                <img className='Home-logoProductsTienda_home'src={logoProducts} alt="Logo productos" />
                <p> 123 Productos</p>
            </div>
            <div className='Home-contenedorButton_home'>
                <Button tipoButton={"tipoLink1"} textoDescripcion={"Ver Listado"} linkTo={'/products'} />
                <Button tipoButton={"tipoLink1"} textoDescripcion={"Agregar Producto"} linkTo={'/products/new'} />
            </div>
        </div>
        <div className='Home-tiendas_home'>
            <div className='Home-imgDescripcion_home'>
                <img className='Home-logoProductsTienda_home'src={logoTiendas} alt="Logo productos" />
                <p>10 tiendas</p>
            </div>
            <div className='Home-contenedorButton_home'>
                <Button tipoButton={"tipoLink1"} textoDescripcion={"Ver Listado"} linkTo={'/stores'} />
                <Button tipoButton={"tipoLink1"} textoDescripcion={"Agregar Tienda"} linkTo={'/stores/new'} />
            </div>
        </div>
    </div>
  )
}

export default MainContentHome