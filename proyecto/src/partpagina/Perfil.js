import React from "react";
import stylos from "styled-components";

import perfil1 from "./imgperfil/perfil1.jpg";
import perfil2 from "./imgperfil/perfil2.jpg";
import perfil3 from "./imgperfil/perfil3.jpg";
import perfil4 from "./imgperfil/perfil4.jpg";

const Perfil=()=>{
    return(
        <Contenedor>
            <Contenedor>
                <Contenedor>
                    <Foto src={perfil1}/>
                </Contenedor>
                <Contenedor>
                    <Titulo>JUAN DAVID GONZALES</Titulo>
                    <Subtitulo>
                        Tecnico Especializado
                    </Subtitulo>
                    <Parrafo>
                        3 años de experiencia en la profesion, sus funciones como Tecnico son:
                        <Listas>
                            <li>Mantenimiento preventivo y correctivo de motocicletas.</li>
                            <li>Diagnóstico de problemas mecánicos y eléctricos.</li>
                            <li>Reparación de sistemas de frenos, suspensión, transmisión y motor.</li>
                            <li>Ajuste y sincronización de carburadores e inyección electrónica.</li>
                        </Listas>
                    </Parrafo>
                </Contenedor>
            </Contenedor>
            <Contenedor>
                <Contenedor>
                    <Foto src={perfil2}/>
                </Contenedor>
                <Contenedor>
                    <Titulo>CARLOS SALDARRIAGA MARTINEZ</Titulo>
                    <Subtitulo>
                        Tecnico Especializado
                    </Subtitulo>
                    <Parrafo>
                        4 años de experiencia en la profesion, sus funciones como Tecnico son:
                        <Listas>
                            <li>Conocimiento de sistemas de encendido y electricidad de motocicletas.</li>
                            <li>Montaje y equilibrado de neumáticos.</li>
                            <li>Inspección y mantenimiento de sistemas de escape.</li>
                            <li>Ajuste y sincronización de carburadores e inyección electrónica.</li>
                        </Listas>
                    </Parrafo>
                </Contenedor>
            </Contenedor>
            <Contenedor>
                <Contenedor>
                    <Foto src={perfil3}/>
                </Contenedor>
                <Contenedor>
                    <Titulo>MANUEL URRUTIA RESTREPO</Titulo>
                    <Subtitulo>
                        Tecnico Especializado
                    </Subtitulo>
                    <Parrafo>
                        2 años de experiencia en la profesion, sus funciones como Tecnico son:
                        <Listas>
                            <li>Uso de herramientas y equipos de diagnóstico.</li>
                            <li>Montaje y equilibrado de neumáticos.</li>
                            <li>Inspección y mantenimiento de sistemas de escape.</li>
                            <li>Cumplimiento de estándares de seguridad en la reparación.</li>
                        </Listas>
                    </Parrafo>
                </Contenedor>
            </Contenedor>
            <Contenedor>
                <Contenedor>
                    <Foto src={perfil4}/>
                </Contenedor>
                <Contenedor>
                    <Titulo>ANDRES FELIPE USUGA</Titulo>
                    <Subtitulo>
                        Tecnico Especializado
                    </Subtitulo>
                    <Parrafo>
                        5 años de experiencia en la profesion, sus funciones como Tecnico son:
                        <Listas>
                            <li>Conocimiento de sistemas de encendido y electricidad de motocicletas.</li>
                            <li>Mantenimiento preventivo y correctivo de motocicletas.</li>
                            <li>Diagnóstico de problemas mecánicos y eléctricos.</li>
                            <li>Ajuste y sincronización de carburadores e inyección electrónica.</li>
                        </Listas>
                    </Parrafo>
                </Contenedor>
            </Contenedor>
        </Contenedor>
    );
}
export default Perfil;
const Contenedor=stylos.section`
`
const Titulo=stylos.h2`
`
const Subtitulo=stylos.h3`
`

const Parrafo=stylos.p`
`
const Foto=stylos.img`
`
const Listas=stylos.ul`
`
