import { Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home/Home";
import ProductsNew from "../pages/Products/ProductsNew/ProductsNew";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/products" />
            <Route path="/products/:id" />
            <Route path="/products/new" element={<ProductsNew />}/>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<h1>Error 404: Pagina no encontrada</h1>}/>
        </Routes>
    )
}

export default MainRoutes