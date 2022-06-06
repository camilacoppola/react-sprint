import { fireEvent, getByRole, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ThemeContext from "../contexts/ThemeContext"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { act, renderHook } from "@testing-library/react"
import useForm from "../hooks/useForm"


let producto = {
    nombre:'',
    valor:'',
    stock:'' 
}

describe('Test del useForm custom hook', () => {

    test('Agregar contenido', () => {
        let {result} = renderHook(() => useForm(producto))
        act(() => {
           result.current[3]({
               nombre:'Coca',
               valor:'500',
               stock:'1'
           })
        })
        expect(result.current[0]).toEqual({
            nombre:'Coca',
            valor:'500',
            stock:'1' 
        })
        act(() => {
            result.current[2]()
        })
        expect(result.current[0]).toEqual(producto)
        
    
        act(() => {
            result.current[3]({
                nombre:'Sprite'
            })
        })
        expect(result.current[0]).toEqual({nombre:'Sprite'})
    });
});



