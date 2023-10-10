import React from "react";
import logo from './imagenes/BlackMotorcycle.png'
import stylos from 'styled-components'
const Header=()=>{
    return(
        <Seccion>
            <Listas className="header">
            <li><Imagen src={logo} alt="logo"/></li>
            <li><a href="#">Inicio</a>
                <a href="#">Servicio</a>
                <a href="#">Productos</a>
            </li>
            </Listas>
        </Seccion>
    )
}
export default Header

const Seccion=stylos.section`

`
const Listas=stylos.ul`
    &.header{
        display: flex;
        justify-content: space-between;
        list-style-type: none;
    }
`
const Imagen=stylos.img`
    width: 150px;
    height: 150px;
`