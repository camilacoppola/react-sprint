import ThemeContext from "../contexts/ThemeContext";
import {render, screen, act, waitFor} from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import Product from '../pages/Product/Product';
import traerProductoXId from '../utils/traerProductoXId';

jest.mock('../utils/traerProductoXId')

let producto = new Promise((resolve) =>{
    resolve({
        nombre: "test",
        valor: "123123",
        descripcion: "asdasd",
        opcionTienda: "mariscos",
        imagen: "https://www.w3schools.com/images/html5.gif",
        stock: 4,
        imagenes: [
            "https://www.w3schools.com/images/html5.gif"
        ],
        id: 7
    })
})

beforeAll(()=>{
    act(() =>{
        traerProductoXId.mockImplementation(() => producto);
        render(
        <MemoryRouter>
            <ThemeContext>
                <Product/>
            </ThemeContext>
        </MemoryRouter>
        )
    })
})

test('Se trae un producto a modificar', async () =>{
    await waitFor(() =>{
        const inputNombre = screen.getByPlaceholderText(/Nombre/i);
        const inputValor = screen.getByPlaceholderText(/valor/i);
        const inputDescripcion = screen.getByPlaceholderText(/Descripcion/i);
        const stockDisponible = screen.getByText('4')
        const inputImagenes = screen.getByAltText(/imagen/i);

        expect(inputNombre).toMatch('test');
        expect(inputValor).toMatch('123123');
        expect(inputDescripcion).toMatch('asdasd');
        expect(screen.getByRole('option', {name: 'Ultramariscos Lolo Castro'}).selected).toBe(true);
        expect(inputImagenes.src).toMatch('https://www.w3schools.com/images/html5.gif');
        expect(stockDisponible).toBeInTheDocument();
    })
})