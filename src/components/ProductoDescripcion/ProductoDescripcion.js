import React from 'react'
import lataCoca from '../../assets/img/cocacola.jpg'
const ProductoDescripcion = () => {
  return (
    <section className='section-container-descripcion'>
        <article>
            <img src={lataCoca} className="img-producto"/>
        </article>
        <div className=''>
            <p>Coca Cola Lata 220ml Original Pack x8</p>
            <div className='container-stock-precio'>
                <div>
                    <h3>19.900</h3>
                    <p>PUNTOS SUPERCLUB</p>
                </div>
                <div>
                    <h3>999</h3>
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