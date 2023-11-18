import React from "react";
import stilos from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './feauters/Counterslice';
const Carrito =()=>{
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return(
        <Contenedor>
            <Contenedor>
                <Titulo>Carrito: {counter}</Titulo>
                <Boton onClick={() => dispatch(increment())}>Increment</Boton>
                <Boton onClick={() => dispatch(decrement())}>Decrement</Boton>
            </Contenedor>
            <Contenedor>
                
            </Contenedor>
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
