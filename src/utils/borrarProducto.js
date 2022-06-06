

const borrarProducto = async(id) => {
  try{
    await fetch(`http://localhost:3001/products/${id}`, {
        method: 'delete'
    })
  }catch(e) {
    console.log(e)
  }
}

export default borrarProducto