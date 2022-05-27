import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContentHome.css'
import logoProducts from '../../assets/img/package-variant-closed.svg'
import logoTiendas from '../../assets/img/store.svg'

const MainContentHome = () => {
    const navigate = useNavigate();

    const handleVerProducts = () => {
        navigate('/products');
    }

    const handleNewProduct = () => {

        navigate('/products/new');
    }

    const handleVerTienda= () => {
        navigate('/stores');
    }

    const handleNewTienda = () => {

        navigate('/stores/new');
    }
  return (
    <div className='Home-contenedor_home'>
        <div className='Home-productos_home'>
            <div className='Home-imgDescripcion_home'>
                <img className='Home-logoProductsTienda_home'src={logoProducts} alt="Logo productos" />
                <p> 123 Productos</p>
            </div>
            <div className='Home-contenedorButton_home'>
                <button className= 'Home-button_home' onClick={handleVerProducts}>Ver Listado</button>
                <button className= 'Home-button_home' onClick={handleNewProduct}>Agregar producto</button>
            </div>
        </div>
        <div className='Home-tiendas_home'>
            <div className='Home-imgDescripcion_home'>
                <img className='Home-logoProductsTienda_home'src={logoTiendas} alt="Logo productos" />
                <p>10 tiendas</p>
            </div>
            <div className='Home-contenedorButton_home'>
                <button className= 'Home-button_home' onClick={handleVerTienda}>Ver Listado</button>
                <button className= 'Home-button_home' onClick={handleNewTienda}>Agregar Tienda</button>
            </div>
        </div>
    </div>
  )
}

export default MainContentHome