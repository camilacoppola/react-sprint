import { act, fireEvent, getByRole, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ThemeContext from "../contexts/ThemeContext"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import ProductosPage from "../pages/Products/ProductosPage"
import traerProductos from "../utils/traerProductos"



jest.mock('../utils/traerProductos')

let producto = new Promise((resolve) =>{

    resolve([{
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
    }])

})


describe('Name of the group', () => {
    
    beforeEach(() => {
        act(() =>{
            
            traerProductos.mockImplementation(() => producto);
            render(
            <MemoryRouter>
                <ThemeContext>
                    <ProductosPage />
                </ThemeContext>
            </MemoryRouter>
            )
        })
    })

    test('test input buscar productos', async() => {
        await waitFor(() => {
            let articulo = screen.getByRole('article')
            expect(articulo).toBeInTheDocument()
            screen.debug()
        })


        let input = screen.getByPlaceholderText('Buscar Productos')
        userEvent.type(input,'te') 
        await waitFor(() => {
            let articulos = screen.getAllByRole('article')
            expect(articulos.length).toBe(1)
        })    
        userEvent.type(input,'zzzzzzz')
        await waitFor(() => {
            let articulos = screen.queryAllByRole('article')
            expect(articulos.length).toBe(0)
        })  

    });

});



