import {render,screen} from "@testing-library/react";
import MainContentHome from "../pages/MainContent/MainContentHome";
import ThemeContext  from '../contexts/ThemeContext';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";


describe('MainContentHome', ()=>{

    beforeEach(()=>{render(
        <ThemeContext>
            <MainContentHome/>
        </ThemeContext>,
        {wrapper:MemoryRouter}
    )})

    test('Verificar titulo de productos', ()=>{
        const tituloProductos = screen.getByText(/123 Productos/i);
        expect(tituloProductos).toBeInTheDocument();
    })

    test('Verificar titulo de tiendas', () =>{
        const tituloTiendas = screen.getByText(/10 Tiendas/i);
        expect(tituloTiendas).toBeInTheDocument()
    })

    test('Funcionamiento del boton - Ver listado',()=>{
        const link = screen.getAllByRole("link")
        userEvent.click(link[0])
        expect(link[0]).toMatchSnapshot()
        expect(link[0].getAttribute("href")).toMatch('/products')
    })

    test('Funcionamiento del boton - Agregar producto',()=>{
        const linkAgregarProducto = screen.getAllByRole("link")
        userEvent.click(linkAgregarProducto[1])
        expect(linkAgregarProducto[1]).toMatchSnapshot()
        expect(linkAgregarProducto[1].getAttribute("href")).toMatch('/products/new')
    })

    test('Funcionamiento del boton - Ver listado tiendas - Pagina de error',()=>{
        const linkListadoTiendas = screen.getAllByRole("link")
        userEvent.click(linkListadoTiendas[2])
        expect(linkListadoTiendas[2]).toMatchSnapshot()
        expect(linkListadoTiendas[2].getAttribute("href")).toMatch('/stores')
    })

    test('Funcionamiento del boton - Agregar tiendas - Pagina de error',()=>{
        const linkAgregarTiendas = screen.getAllByRole("link")
        userEvent.click(linkAgregarTiendas[3])
        expect(linkAgregarTiendas[3]).toMatchSnapshot()
        expect(linkAgregarTiendas[3].getAttribute("href")).toMatch('/stores/new')
    })

})