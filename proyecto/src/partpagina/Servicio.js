import React  from "react";
import apariencia from "styled-components";

const Servicio =()=>{
    return(
        <Contenedor className="principal">
            <Contenedor>
                <Titulo>
                Servicio complejo para su automóvil
                   
                </Titulo>
                <Parrafo>
                Nuestros asesores de automóviles de fácil contacto le <br/>
                explicarán cualquier mantenimiento o reparación <br/> 
                sugeridos. No tomarán ninguna medida a menos que las <br/>
                apruebe primero. Nuestros técnicos de motocicleta<br/>
                certificados por ASE están cuidando su motocicleta y su <br/>
                presupuesto.
                </Parrafo>
                <Titulo>
                <center>Una lista de verificación para preparar su automóvil para un largo viaje por carretera</center>
                </Titulo>
                <Lista>
                    <li>
                        <Imagenes/>
                        <Subtitulo>
                        </Subtitulo>
                        <Parrafo>
                        </Parrafo>
                    </li>
                    <li>
                        <Imagenes/>
                        <Subtitulo>
                        </Subtitulo>
                        <Parrafo>
                        </Parrafo>
                    </li>
                </Lista>
            </Contenedor>
            <Contenedor>
                <Titulo>
                ¿Por qué elegir nuestro servicio?
                </Titulo>
                <Parrafo>
                La principal ventaja de la cooperación con el centro de reparación de automóviles es la ventajosa relación calidad-precio.
                </Parrafo>
                <Titulo>
                Restauración de coches de alta calidad
                </Titulo>
                <Lista>
                    <li>
                        <Imagenes/>
                    </li>
                    <li>
                        <Subtitulo>
                        </Subtitulo>
                        <Parrafo>
                        </Parrafo>
                    </li>
                    <li>
                        <Imagenes/>
                    </li>
                    <li>
                        <Subtitulo>
                        </Subtitulo>
                        <Parrafo>
                        </Parrafo>
                    </li>
                    <li>
                        <Imagenes/>
                    </li>
                    <li>
                        <Subtitulo>
                        </Subtitulo>
                        <Parrafo>
                        </Parrafo>
                    </li>
                </Lista>
                <Lista>
                    <li>
                        <Imagenes/>
                    </li>
                    <li>
                        <Imagenes/>
                    </li>
                    <li>
                        <Imagenes/>
                    </li>
                    <li>
                        <Imagenes/>
                    </li>
                    <li>
                        <Imagenes/>
                    </li>
                    <li>
                        <Imagenes/>
                    </li>
                    <li>
                        <Imagenes/>
                    </li>
                </Lista>
            </Contenedor>
            <Contenedor>
                <Titulo>
                Lo que dicen los clientes
                </Titulo>
                <Parrafo>
                Valoramos enormemente las relaciones sólidas y hemos visto los beneficios que aportan a nuestro negocio. Los comentarios de los clientes son vitales para ayudarnos a hacerlo bien.
                </Parrafo>
                <Lista>
                    <li>
                        <Contenedor>
                            <Imagenes/>
                            <Parrafo>
                            </Parrafo>
                            <Subtitulo>
                            </Subtitulo>
                        </Contenedor>
                    </li>
                    <li>
                        <Contenedor>
                            <Imagenes/>
                            <Parrafo>
                            </Parrafo>
                            <Subtitulo>
                            </Subtitulo>
                        </Contenedor>
                    </li>
                    <li>
                        <Contenedor>
                            <Imagenes/>
                            <Parrafo>
                            </Parrafo>
                            <Subtitulo>
                            </Subtitulo>
                        </Contenedor>
                    </li>
                </Lista>
                <Lista>
                    <li>
                        <Titulo>
                        </Titulo>
                        <Parrafo>
                        </Parrafo>
                        <form>
                        <Lista>
                            <li>
                                <input type="text">Ingrese su nombre</input>
                            </li>
                            <li>
                                <input type="text">Ingrese su email</input>
                            </li>
                            <li>
                                <input type="text">Ingrese tu mensaje</input>
                            </li>
                            <li>
                                <input type="submit"></input>
                            </li>
                        </Lista>
                        </form>
                    </li>
                    <li>

                    </li>
                </Lista>
            </Contenedor>
        </Contenedor>
    
    )
}
export default Servicio;

const Contenedor=apariencia.section`
`
const Titulo=apariencia.h1`
`
const Parrafo=apariencia.p`
`
const Lista=apariencia.ul`
`
const Imagenes=apariencia.img`
`
const Subtitulo=apariencia.h2`
`