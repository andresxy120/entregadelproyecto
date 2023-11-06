import React from "react";
import stylos from "styled-components";

const Pagos=()=>{
    return(
        <Contenedor>
             <form>
                <Lista>
                    <li>
                        <label>Nombre de la Tarjeta</label>
                        <input type="text" id="nombre-tarjeta"/>
                    </li>
                    <li>
                        <label>Tipos de Documento</label>
                        <select>
                            <option>C.C</option>
                            <option>C.E</option>
                            <option>CC DIG</option>
                        </select>
                    </li>
                    <li>
                        <label>Numero de la Tarjeta</label>
                        <input type="text" id="numero-tarjeta"/>
                    </li>
                    <li>
                        <label>Codigo de Seguridad</label>
                        <input type="text" id="codigo"/>
                    </li>
                    <li>
                        <label>Fecha de Vencimiento</label>
                        <input type="text" id="mes"/>
                        <input type="text" id="año"/>
                    </li>
                    <li>
                        <label>Telefono celular</label>
                        <input type="text" id="telefono"/>
                    </li>
                    <li>
                        <button type="submit">Pagar</button>
                    </li>
                </Lista>
             </form>
        </Contenedor>
    );
};
const Contenedor=stylos.section`
`
const Lista=stylos.ul`
`
