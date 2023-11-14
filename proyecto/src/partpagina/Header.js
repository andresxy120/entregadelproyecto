import React from "react";
import logo from './imagenes/BlackMotorcycle.png'
import stylos from 'styled-components'
import { Link, Outlet } from "react-router-dom";
const Header=()=>{
    return(
        <Seccion>
            <nav>
            <Lista className="header">
                <li><Imagen src={logo} alt="logo"/></li>
                <li><Link to="/Inicio">Inicio</Link></li>
                <li><Link to="/Servicio">Servicio</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
            
            </Lista>
            </nav>
            
            <Outlet/>
        </Seccion>
    );
}
export default Header

const Seccion=stylos.section`

`
const Lista=stylos.ul`
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