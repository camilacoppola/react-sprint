import { fireEvent, render,screen} from "@testing-library/react";
import MainContentHome from "../pages/MainContent/MainContentHome";
import ThemeContext  from '../contexts/ThemeContext';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import Button from "../components/Button/Button";
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


    
})