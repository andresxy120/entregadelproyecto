import React from "react";
import stylos from "styled-components";

const Registro=()=>{
    return(
        <Contenedor>
            <form>
                <Lista>
                    <li>
                        <input type="text" id="nombre" placeholder="Ingrese tu nombre completo"></input>
                    </li>
                    <li>
                        <input type="text" id="email" placeholder="Ingrese tu correo electronico"></input>
                    </li>
                    <li>
                        <button type="submit"></button>
                    </li>
                </Lista>
            </form>
        </Contenedor>
    );
}

const Contenedor=stylos.section`
`
const Lista=stylos.ul`
`

