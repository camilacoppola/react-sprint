import { render,screen} from "@testing-library/react";
import MainContentHome from "../pages/MainContent/MainContentHome";
import ThemeContext  from '../contexts/ThemeContext';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';


describe('MainContentHome', ()=>{

    beforeEach(()=>{render(
        <ThemeContext>
            <MainContentHome/>
        </ThemeContext>,
        {wrapper:MemoryRouter}
    )})

    test('Verificar titulo de productos', ()=>{
        const titulo1 = screen.getByText(/123 Productos/i);
       
        expect(titulo1).toBeInTheDocument()
    })
})