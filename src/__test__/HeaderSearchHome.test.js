import { getByRole, render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ThemeContext from "../contexts/ThemeContext"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import HeaderSearchHome from "../components/HeaderSearchHome/HeaderSearchHome";
import ProductosContext from "../contexts/ProductosContext";

//let query = jest.fn("../contexts/ProductosContext")

describe('Header search home', () => {
    //En este describe se van a realizar test, con respecto a el componente HeaderSearchHome.
    
    beforeEach(() => {
        render(
            <ThemeContext>
                <ProductosContext>
                    <HeaderSearchHome />
                </ProductosContext>
            </ThemeContext>,
            {wrapper:MemoryRouter}
        )})

    test('busqueda input', () => {
        //En este test, se verifica que cuando se hace click en el input e ingresa la palabara coca, se actualice a ese valor
        const input = screen.getByRole("textbox")
        userEvent.click(input)
        userEvent.keyboard("coca")
        expect(input).toHaveFocus()
        expect(input).toHaveDisplayValue(/coca/i)
    });


    test('Test boton ', () => {
        //En este test, se verifica que el boton link que se encuentra, contenga en su atributo href /products/new
        //Tambien se verifica que el link tenga como contenido Agregar Producto
        const link = screen.getByRole("link")
        userEvent.click(link)
        expect(link.getAttribute("href")).toMatch("/products/new")
        expect(link).toHaveTextContent(/Agregar producto/i)
        expect(link).toHaveFocus()

    });
});
