import './ProductoDescripcion.css'

const ProductoDescripcion = ({producto}) => {

    //const producto=useContext(consumeProducto)
    //console.log(producto)
  return (
    <section className='ProductoDescripcion-container_section'>
        <article>
            <img src={producto.imagen} alt={producto.nombre} className="img-producto"/>
        </article>
        <div className='ProductoDescripcion-container_columna'>
            <p>{producto.nombre} {producto.descripcion}</p>
            <div className='container-stock-precio'>
                <div>
                    <h3>{producto.valor}</h3>
                    <div className='ProductoDescripcion-container_data'>
                        <p>PUNTOS</p>
                        <p>SUPERCLUB</p>

                    </div>
                </div>
                <div>
                    <h3>{producto.stock}</h3>
                    <div className='ProductoDescripcion-container_data'>
                        <p>STOCK</p>
                        <p>DISPONIBLE</p>
                    </div>
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