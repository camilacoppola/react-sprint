import React from 'react'

const guardarProducto = async(producto) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    };

  await fetch("http://localhost:3001/products", requestOptions)
}

export default guardarProducto