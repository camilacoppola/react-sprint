import { fireEvent, getByRole, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ThemeContext from "../contexts/ThemeContext"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { act, renderHook } from "@testing-library/react"
import useIncrementOrDecrement from "../hooks/useIncrementOrDecrement"



describe('Testeando useHook incrementOrDecrement', () => {

    test('Test increment useIncrementOrDecrement ', () => {
        let {result} = renderHook(() => useIncrementOrDecrement(2))
        expect(result.current[0]).toBe(2)
        act(() => {
            result.current[1]()
        })
        expect(result.current[0]).toBe(3)
        act(() => {
            result.current[1]()
        })
        expect(result.current[0]).toBe(4)
    });

    test('Test decrement useIncrementOrDecrement ', () => {
        let {result} = renderHook(() => useIncrementOrDecrement(2))
        expect(result.current[0]).toBe(2)
        act(() => {
            result.current[2]()
        })
        expect(result.current[0]).toBe(1)
        act(() => {
            result.current[2]()
        })
        expect(result.current[0]).toBe(0)
    });

});