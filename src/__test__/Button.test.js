import {fireEvent, render,screen} from "@testing-library/react";
import ThemeContext  from '../contexts/ThemeContext';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import Button from "../components/Button/Button";



describe('Button', ()=>{
 test('Boton 1',()=>{
     render(<Button tipoButton={"tipoBoton1"} textoDescripcion={"Eliminar"}/>)
     const boton1 = screen.getByRole('button')
     expect(boton1).toBeInTheDocument()
     expect(boton1.innerHTML).toMatch(/Eliminar/i)     
 })

 test('Boton 1',()=>{
    render(<Button tipoButton={"tipoBoton2"} textoDescripcion={"Agregar"}/>)
    const boton2 = screen.getByRole('button')
    expect(boton2).toBeInTheDocument()
    expect(boton2.innerHTML).toMatch(/Agregar/i)     
})

})