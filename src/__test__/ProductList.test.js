import {render,screen} from "@testing-library/react";
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import ProductsList from "../components/ProductsList/ProductsList";
import ThemeContext from "../contexts/ThemeContext";

describe('Product List', () => {
  
    beforeEach(() => {
        const productos = [
        {
            "nombre": "sprite",
            "valor": "50",
            "descripcion": "La mejor gaseosa",
            "opcionTienda": "mariscos",
            "imagen": "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
            "stock": 5,
            "imagenes": [
                "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
            ],
            "id": 3
          },
          {
            "nombre": "Aquarius",
            "valor": "100",
            "descripcion": "pomelo",
            "opcionTienda": "mariscos",
            "imagen": "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
            "stock": 1,
            "imagenes": [
                "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
            ],
            "id": 4
          },
          {
            "imagen": "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
            "descripcion": "asffsa",
            "valor": "12",
            "nombre": "asfsaf",
            "opcionTienda": "mariscos",
            "stock": 1,
            "imagenes": [
                "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
            ],
            "id": 5
          },
        ]
        render (<ThemeContext><ProductsList productos={productos}/></ThemeContext>,{wrapper: MemoryRouter})       
    });

    test('Renderizado de Product List', ()=>{
        screen.debug()
    })

    test('testeando longitud de productos', () => {
        const articulosProductos = screen.getAllByRole('article')
        expect(articulosProductos.length).toBe(3)
    });

    test('Coincidencia del producto', () => {
        const coincidenciaArticulo = screen.getAllByRole('article')
        expect(coincidenciaArticulo[0]).toHaveTextContent("sprite La mejor gaseosa")
        const [idProducto] = screen.getAllByRole('heading', {level:6})
        expect(coincidenciaArticulo[0]).toContainElement(idProducto)
    });

    test('testeo detalle producto', () => {
        const links = screen.getAllByRole('link')
        expect(links.length).toBe(3)
        links.forEach((link, index) => {
            expect(link.getAttribute("href")).toMatch(`/products/${link.id}`)                      
        });   
    });    
    test('Texto de imagenes', () => {
        const imagenes = screen.getAllByRole('img')
        expect(imagenes.length).toBe(3)
        const imagenesProducto = screen.getAllByRole('imagenProducto')
        expect(imagenesProducto.length).toBe(3)
        imagenesProducto.forEach((imagenProducto, index) => {
            expect(imagenProducto.getAttribute("src")).toMatch("http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg")                      
        });   
    });
});