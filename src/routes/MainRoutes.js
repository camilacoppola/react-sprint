import { Routes, Route } from "react-router-dom";
import React from 'react'
import ProductosPage from "../pages/Products/ProductosPage";
import Home from "../pages/Home/Home";
import ErrorStore from "../pages/ErrorStore/ErrorStore";
import CreateProductPage from "../pages/CreateProduct/CreateProductPage";
import ProductosEditPage from "../pages/Product/ProductosEditPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path="/products" element={<ProductosPage />} />
            <Route path="/products/:id" element={<ProductosEditPage />} />
            <Route path="/products/new" element={<CreateProductPage />} />
            <Route path="*" element={<h1>Error 404: Pagina no encontrada</h1>}/>
            <Route path="/stores"  element={<ErrorStore/>}/>
            <Route path="/stores/new" element={<ErrorStore/>}/>
        </Routes>
    )
}

export default MainRoutes