import { Routes, Route } from "react-router-dom";
import React from 'react'
import Productos from "../pages/Products/Productos";
import Producto from "../pages/Product/Product";
import Home from "../pages/Home/Home";
import CreateProducto from "../pages/CreateProduct/CreateProduct";
import ErrorStore from "../pages/ErrorStore/ErrorStore";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path="/products" element={<Productos />} />
            <Route path="/products/:id" element={<Producto />} />
            <Route path="/products/new" element={<CreateProducto />} />
            <Route path="*" element={<h1>Error 404: Pagina no encontrada</h1>}/>
            <Route path="/stores"  element={<ErrorStore/>}/>
            <Route path="/stores/new" element={<ErrorStore/>}/>
        </Routes>
    )
}

export default MainRoutes