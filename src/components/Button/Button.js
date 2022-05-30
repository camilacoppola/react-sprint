import React from 'react'
import './Button.css'
import './Link.css'
import { Link } from 'react-router-dom';

const Button = ({tipoButton, textoDescripcion, linkTo, claseBoton}) => {
    let botonAElegir;
    switch(tipoButton){
        case "tipoBoton1": 
            botonAElegir = (<button className= 'Button-button1'>{textoDescripcion}</button>)
            break;
        case "tipoBoton2":
            botonAElegir = (<button className= 'Button-button2'>{textoDescripcion}</button>)
            break;
        case "tipoLink1": 
            botonAElegir = <Link to={linkTo} className={'Button-link1 ' + claseBoton}>{textoDescripcion}</Link>
            break;
        case "tipoLink2":
            botonAElegir = <Link to={linkTo} className={'Button-link2 ' + claseBoton}>{textoDescripcion}</Link>
            break;
        default : 
            throw 'Tipo de boton incorrecto'
      }
    

  return (
   botonAElegir
)

}

export default Button