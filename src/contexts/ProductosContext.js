import React, { createContext, useEffect, useState } from 'react';
export const productContext = createContext();

const ProductosContext = ({children}) => {
    const [query, setQuery] = useState('')
    const [filteredProducts, setfilteredProducts] = useState([])
    const [productos, setProductos] = useState([])

    useEffect(() => {
      fetch("http://localhost:3001/products")
      .then(resp => resp.json())
      .then(data => {
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