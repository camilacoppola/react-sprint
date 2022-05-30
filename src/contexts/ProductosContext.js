import React, { createContext, useEffect, useState } from 'react';
export const productContext = createContext();

const ProductosContext = ({children}) => {
    const [buscador, setBuscador] = useState([])
    const [productos, setProductos] = useState([])
    useEffect(() => {
      fetch("http://localhost:3001/products")
      .then(resp => resp.json())
      .then(data => {
          setProductos(data)
          setBuscador(data)
        })
    },[])

const buscarProductosRelacionados = (nombreBuscador)=>{
   let nuevosProductos = productos.filter( producto => producto.nombre.toLowerCase().includes(nombreBuscador.toLowerCase()))
   setBuscador(nuevosProductos)     
}

  return (
   <productContext.Provider value={{productos:buscador, buscarProductosRelacionados }}>
       {children}
   </productContext.Provider>
  )
}

export default ProductosContext