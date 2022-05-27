
const actualizarProducto = async(id,productoActualizado) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productoActualizado)}
    await fetch(`http://localhost:3001/products/${id}`,requestOptions)
}

export default actualizarProducto