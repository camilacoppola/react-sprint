import { Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home/Home";
import ErrorStore from "../pages/ErrorStore/ErrorStore";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/products" />
            <Route path="/products/:id" />
            <Route path="/products/new" />
            <Route path="/"  element={<Home />}/>
            <Route path="*" element={<h1>Error 404: Pagina no encontrada</h1>}/>
            <Route path="/stores"  element={<ErrorStore/>}/>
            <Route path="/stores/new" element={<ErrorStore/>}/>

        </Routes>
    )
}

export default MainRoutes