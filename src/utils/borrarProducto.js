

const borrarProducto = (id) => {
  fetch(`http://localhost:3001/products/${id}`, {
      method: 'delete'
  })
}

export default borrarProducto