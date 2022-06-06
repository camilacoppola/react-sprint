import ThemeContext, { consumeThemeContext } from "../contexts/ThemeContext"
import {render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import CreateProduct from '../pages/CreateProduct/CreateProduct'

beforeEach(()=>{render(
    <MemoryRouter>
        <ThemeContext>
            <CreateProduct/>
        </ThemeContext>
    </MemoryRouter>
)})

test('Se crea el producto', () =>{
    const botonGuardar = screen.getByText(/Guardar/i);
    const inputNombre = screen.getByPlaceholderText(/Nombre/i);
    const inputValor = screen.getByPlaceholderText(/valor/i);
    const botonValor = screen.getByText("+");
    const inputDescripcion = screen.getByPlaceholderText(/Descripcion/i);
    const inputTiendas = screen.getByRole('combobox')
    const inputImagenes = screen.getByPlaceholderText(/url imagen/i);

    userEvent.type(inputNombre, 'Coca cola pixel');
    userEvent.type(inputValor, '325');
    userEvent.click(botonValor);
    userEvent.type(inputDescripcion, 'No la encuentro');
    userEvent.selectOptions(inputTiendas, ['frutas']);
    userEvent.type(inputImagenes, 'https://www.w3schools.com/images/html5.gif');
    
    userEvent.click(botonGuardar);

    const textoError = screen.queryByText(/No se pueden dejar campos vacios/i);

    expect(textoError).not.toBeInTheDocument();
})

test('No se crea el producto', () =>{
    const botonGuardar = screen.getByText(/Guardar/i);
    userEvent.click(botonGuardar)
    expect(screen.getByText(/No se pueden dejar campos vacios/i)).toBeInTheDocument();
})