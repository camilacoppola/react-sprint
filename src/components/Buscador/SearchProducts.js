import React from 'react';
import {Productos} from './ejemplo'
import './search.css';

const SearchProducts = () => {
  return (
    <div>
      <p className='titulo'>Buscador</p>
      <ul className='listaProductos'>
        {Productos.map(product=>{
          <li>{product.nombre}</li>
        })}

      </ul>




    </div>
  )
}

export default SearchProducts