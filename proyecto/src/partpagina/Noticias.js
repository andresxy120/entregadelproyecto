import React from "react";
import stylos from "styled-components";

import noticia1 from "./imgnoticia/honda.jpg"
import noticia2 from "./imgnoticia/horario-de-atencion2.jpg"
import noticia3 from "./imgnoticia/images.jpg"
import noticia4 from "./imgnoticia/manzana.jpg"
import noticia5 from "./imgnoticia/mecanico-motos.jpg"

const Noticias=()=>{
    return(
        <Contenedor>
            <Contenedor>
                <Imagenes src={noticia1}/>
                <Fechas>03/11/2023</Fechas>
                <Titulo>Llegaron los nuevas pasta de frenos de honda</Titulo>
            </Contenedor>
            <Contenedor>
                <Imagenes src={noticia2}/>
                <Fechas>29/10/2023</Fechas>
                <Titulo>Los lunes festivos se presta atencion de las 8:00 am a 2:00pm </Titulo>
            </Contenedor>
            <Contenedor>
                <Imagenes src={noticia3}/>
                <Fechas>25/10/2023</Fechas>
                <Titulo>5% de Descuentos en acite para motos</Titulo>
            </Contenedor>
            <Contenedor>
                <Imagenes src={noticia4}/>
                <Fechas>22/10/2023</Fechas>
                <Titulo>10% en Descuentos en manzana de closh</Titulo>
            </Contenedor>
            <Contenedor>
                <Imagenes src={noticia5}/>
                <Fechas>15/10/2023</Fechas>
                <Titulo>Por la compra de acite para motos el cambio es gratis</Titulo>
            </Contenedor>
        </Contenedor>
    );
};
export default Noticias;
const Contenedor=stylos.section`
`
const Imagenes=stylos.img`
`
const Titulo=stylos.h1`
`
const Fechas=stylos.h6`
`