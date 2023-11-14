import React from "react";
import stilos from "styled-components";
import { producid } from "./Productos";
const Carrito =()=>{
    return(
        <Contenedor>
            <Titulo>Carrito</Titulo>
            <Parrafo>Tu carrito esta vacio</Parrafo>
        </Contenedor>
    )

};
export default Carrito;
const Contenedor=stilos.section`
`
const Titulo=stilos.h1`
`
const Parrafo=stilos.p`
`
const Lista=stilos.ul`
`
const Imagenes=stilos.img`
`
const Subtitulo=stilos.h2`
`
const Boton=stilos.button`
`
