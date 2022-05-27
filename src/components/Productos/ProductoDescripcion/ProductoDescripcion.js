import React from 'react'
import lataCoca from '../../../assets/img/cocacola.jpg'
const ProductoDescripcion = ({producto}) => {
  return (
    <section className='section-container-descripcion'>
        <article>
            <img src={producto.img} alt={producto.nombre} className="img-producto"/>
        </article>
        <div className=''>
            <p>{producto.nombre} {producto.descripcion}</p>
            <div className='container-stock-precio'>
                <div>
                    <h3>{producto.valor}</h3>
                    <p>PUNTOS SUPERCLUB</p>
                </div>
                <div>
                    <h3>{producto.stock}</h3>
                    <p>STOCK DISPONIBLE</p>
                </div>
                <div>
                    <img />
                    <span>Olivia Store</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductoDescripcion