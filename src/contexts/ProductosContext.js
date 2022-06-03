import React, { createContext, useEffect, useState } from 'react';
import traerProductos from '../utils/traerProductos';
export const productContext = createContext();

const ProductosContext = ({children}) => {
    const [query, setQuery] = useState('')
    const [filteredProducts, setfilteredProducts] = useState([])
    const [productos, setProductos] = useState([])

    useEffect(() => {
      traerProductos().then(data=>{
        setProductos(data)
        setfilteredProducts(data)
      })
    },[])

    useEffect(() =>{
      buscarProductosRelacionados()
    }, [query])

const buscarProductosRelacionados = ()=>{
   let nuevosProductos = productos.filter( producto => producto.nombre.toLowerCase().includes(query.toLowerCase()))
     setfilteredProducts(nuevosProductos)     
}

  return (
   <productContext.Provider value={{productos:filteredProducts, buscarProductosRelacionados, setQuery, query}}>
       {children}
   </productContext.Provider>
  )
}

export default ProductosContext