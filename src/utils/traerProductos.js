

const traerProductos = async () => {
    let resp  = await fetch("http://localhost:3001/products")
    let data = await resp.json()
    return data
    
}

export default traerProductos