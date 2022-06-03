import { getByRole, render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import ProductoDescripcion from "../components/Productos/ProductoDescripcion/ProductoDescripcion"
import ThemeContext from "../contexts/ThemeContext"
import "@testing-library/jest-dom"



describe('Producto descripcion', () => {
    
    beforeEach(()=>{

        let producto = {
            "nombre": "Perro",
            "valor": "500",
            "descripcion": "Perrito de mascota",
            "opcionTienda": "mariscos",
            "imagen": "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
            "stock": 1,
            "imagenes": [
              "data:image/jpeg;base64,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"
            ],
            "id": 1
        }

        render(
        <ThemeContext>
            <ProductoDescripcion producto={producto}/>
        </ThemeContext>,
        {wrapper:MemoryRouter}
    )})
    
    test('Testeando el scren del producto', () => {
        screen.debug()
    })

    test('Testeando la imagen del producto ', () => {
        let imagen = screen.getByAltText(/perro/i)
        expect(imagen).toBeInTheDocument()
        expect(imagen.getAttribute('src')).toMatch("http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg")
        expect(imagen.getAttribute('alt')).toMatch(/perro/i)
    })

    test('Testeando que en el paragraph se muestre la descripcion ', () => {
        let textDescription = screen.getByText(/perro/i)
        expect(textDescription).toBeInTheDocument()
        console.log(textDescription.innerHTML)
        expect(textDescription.innerHTML).toMatch(/^perro perrito de mascota$/i)
    })

    test('Testeando el h3', () => {
        //let etiquetah3 = screen.getByRole('heading', {level:3})
    })

})