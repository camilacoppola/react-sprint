import {render,screen} from "@testing-library/react";
import ThemeContext  from '../contexts/ThemeContext';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import GaleriaImagenesActuales from "../components/Productos/GaleriaImagenesActuales/GaleriaImagenesActuales";

describe('MainContentHome', ()=>{

    beforeEach(()=>{render(
        <GaleriaImagenesActuales/>
    )})

    test('Verificar titulo de la galeria de imagenes', ()=>{
        const tituloInformacion = screen.getByText(/Galeria de imagenes/i);
        expect(tituloInformacion).toBeInTheDocument();
    })

})