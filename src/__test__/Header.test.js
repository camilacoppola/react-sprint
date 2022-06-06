import { fireEvent, getByRole, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ThemeContext from "../contexts/ThemeContext"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header/Header"
import MenuContext, { consumeMenuContext } from "../contexts/MenuContext"





describe('Test del header dinamico', () => {
    beforeEach(() => {
        render(
                <ThemeContext>
                    <MenuContext>
                        <Header>
                            <div className='botonEliminar' style={{ width: "100%" }}>
                                <h1 style={{ display: "inline" }}>{`Productos > #22`}</h1>
                                <button>Eliminar</button>
                            </div>
                        </Header>
                    </MenuContext>
                </ThemeContext>,
            { wrapper: MemoryRouter }
        )
    })

    test('test screen', () => {
        screen.debug()
    });

    test('test que este en el documento', () => {
        const eliminar = screen.getByText(/eliminar/i)
        expect(eliminar).toBeInTheDocument()
        const [buttonImagen] = screen.getAllByRole('button')
        expect(buttonImagen).toHaveClass("Header-button_hide")
    })



});
