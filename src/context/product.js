import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const consumeProducto = createContext()


const ProductoContext = ({children}) => {
    const {id} = useParams()
    const [producto, setProducto] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then(resp => resp.json())
        .then(data => {
          setProducto(data)
        })
      }, [])

    return(
        <consumeProducto.Provider value={{producto}}>
            {children}
        </consumeProducto.Provider>
    )
}

export default ProductoContext