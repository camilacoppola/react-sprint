import { Routes, Route } from "react-router-dom";
import React from 'react'
import Productos from "../components/Productos/Productos";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/products" />
            <Route path="/products/:id" element={<Productos />} />
            <Route path="/products/new" element={<Productos />} />
            <Route path="/" />
            <Route path="*" element={<h1>Error 404: Pagina no encontrada</h1>}/>
        </Routes>
    )
}

export default MainRoutes