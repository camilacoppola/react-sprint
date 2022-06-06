export default async function traerProductoXId(id){
    const producto = await fetch(`http://localhost:3001/products/${id}`);
    const productoJSON = await producto.json();
    return productoJSON;
}
