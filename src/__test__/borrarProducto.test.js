import { getByRole, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ThemeContext from "../contexts/ThemeContext"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import borrarProducto from "../utils/borrarProducto"


jest.mock("../utils/borrarProducto")

describe('Test del borrar producto', () => {


    test('testeando que el borrar producto se llame una vez ', () => {
        //borrarProducto.mockReturnValue('true')
        borrarProducto('12')
        borrarProducto('12')
        borrarProducto('12')
        expect(borrarProducto.mock.calls.length).toBe(3)
        borrarProducto('3')
        expect(borrarProducto.mock.calls.length).toBe(4)
        expect(borrarProducto).toHaveBeenCalledTimes(4)
    });


    test('testeando que el borrar producto cuando se llame retorne true y que se llame con el parametro correspondiente', () => {
        borrarProducto.mockReturnValue('true')
        expect(borrarProducto('9')).toBeTruthy()
        expect(borrarProducto).toHaveBeenCalledWith('9')
        expect(borrarProducto.mock.calls[0][0]).toBe('9') 
    });


}); 