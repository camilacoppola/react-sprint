import { getByRole, render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ThemeContext from "../contexts/ThemeContext"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import HeaderSearchHome from "../components/HeaderSearchHome/HeaderSearchHome";
import ProductosContext from "../contexts/ProductosContext";

//let query = jest.fn("../contexts/ProductosContext")

describe('Header search home', () => {
    //query.mockReturnValue({query:"asdsadsad",setQuery:"asdsadasasd"})
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
        const input = screen.getByRole("textbox")
        userEvent.click(input)
        userEvent.keyboard("coca")
        expect(input).toHaveFocus()
        expect(input).toHaveDisplayValue(/coca/i)
    });


    test('Test boton ', () => {
        const link = screen.getByRole("link")
        userEvent.click(link)
        expect(link.getAttribute("href")).toMatch("/products/new")
        expect(link).toHaveTextContent(/Agregar producto/i)
        expect(link).toHaveFocus()

    });
});
