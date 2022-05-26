import { Routes, Route } from "react-router-dom";
import React from 'react'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/products" />
            <Route path="/products/:id" />
            <Route path="/products/new" />
            <Route path="/" />
            <Route path="*" element={<h1>Error 404: Pagina no encontrada</h1>}/>
        </Routes>
    )
}

export default MainRoutes