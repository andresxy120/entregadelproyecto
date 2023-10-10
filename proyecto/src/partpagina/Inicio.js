import React from "react";
import styled from "styled-components"
import fondo from './imagenes/fondomoto.jpg'
import imgportada from './imagenes/piloto.jpg'
import imgportada1 from './imagenes//lampara-faro.jpg'
import icono1 from './imagenes/localizacion.png'
import icono2 from './imagenes/moto.png'
import icono3 from './imagenes/trabajo-en-equipo.png'
import foto1 from './imagenes/imagen-muestra-motocicleta-ducati-negra-naranja.jpg'
import foto2 from './imagenes/foto-motocicleta-retro-hecha-medida-contra-rascacielos.jpg'
import foto3 from './imagenes/motocicleta-gris-negra-casco-rojo.jpg'
import galeria1 from './imagenes/galeria 1.jpg'
import galeria2 from './imagenes/galeria 2.jpg'
import galeria3 from './imagenes/galeria 3.jpg'
import galeria4 from './imagenes/galeria 4.jpg'
import galeria5 from './imagenes/galeria 5.jpg'
import galeria6 from './imagenes/galeria 6.jpg'
import icono4 from './imagenes/hablar-burbuja.png'
import icono5 from './imagenes/llamada-telefonica.png'
import icono6 from './imagenes/correo-electronico.png'
const Inicio=()=>{
    return(
       
        <Contenedor className="principal">
            <Contenedor className="portada">
            <Titulos className="portada">SERVICIO COMPLETO DE MOTOCICLETAS</Titulos>
                <Parrafo className="portada">Como propietario de una motocicleta, es su deber legal asegurarse de que <br/> esté en condiciones de circular y no represente un peligro para usted,<br/> los pasajeros, otros usuarios de la vía o el público en general.</Parrafo>
            </Contenedor>
            <Contenedor className="introduccion">
                <Listas className="conten1">
                <li><Imagenes className="imgportada" src={imgportada} alt=""/></li>
                <li><Titulos>Hemos ampliado <br/>nuestros <br/><b>servicios para</b><br/><b>incluir</b> <br/> almacenamiento <br/>de <br/>motocicletas</Titulos></li>
                <li><Imagenes className="imgportada1" src={imgportada1} alt=""/>
                <p>Hace casi 20 años, nos dimos cuenta de que no <br/>existía una  asistencia en carretera segura <br/> diseñada únicamente para motocicletas. Después <br/> de haber visto demasiadas bicicletas encadenadas, <br/> peligrosamente, a las barras de remolque de las <br/> grúas regulares, y una extensa investigación de <br/>mercado, comenzamos nuestra empresa ...</p></li>
                </Listas>
            </Contenedor>
            <Contenedor className="contenido">
                <ul>
                    <li>
                    <h1><b>Servicios</b> de coches de alquiler </h1>
                    <p>Encuentre la mejor tarifa de coche de alquiler <br/> posible. Compare tarifas en todo el mundo y ahorre hasta un 60% en ofertas de más de 1.053 empresas de alquiler de coches.</p>
                    </li>
                    <li><img src={icono1} alt="icono1"/>
                    <h2>ubicación</h2>
                    </li>
                    <li><img src={icono2} alt="icono2"/>
                    <h2>20+MOTOCICLETAS</h2>
                    </li>
                    <li>
                    <img src={icono3} alt="icono3"/>
                    <h2>Usuarios felices</h2>
                    </li>
                </ul>
            </Contenedor>
            <Contenedor className="foto">
                <section><img src={foto1} alt="foto1"/></section>
                <section><img src={foto2} alt="foto2"/></section>
                <section><img src={foto3} alt="foto3"/></section>
            </Contenedor>
            <Contenedor className="galeria">
                <h1>Nuestra <b>Galería</b></h1>
                <ul>
                    <li><img src={galeria1} alt="galeria1"/></li>
                    <li><img src={galeria2} alt="galeria2"/></li>
                    <li><img src={galeria3} alt="galeria3"/></li>
                    <li><img src={galeria4} alt="galeria4"/></li>
                    <li><img src={galeria5} alt="galeria5"/></li>
                    <li><img src={galeria6} alt="galeria6"/></li>
                </ul>
                <button>aprende mas</button>
            </Contenedor>
            <Contenedor>
                <h1>Contáctenos</h1>
                <ul>
                    <li><img src={icono4} alt="icono4"/>
                        <h1>Habla a</h1>
                        <h2>27 13 Lowe Haven</h2>
                    </li>
                    <li>
                        <img src={icono5} alt="icono5"/>
                        <h1>teléfono</h1>
                        <h2>111 343 43 43</h2>
                    </li>
                    <li>
                        <img src={icono6} alt="icono6"/>
                        <h1>correo electrónico</h1>
                        <h2>business@info.com</h2>
                    </li>
                </ul>
            </Contenedor>
        </Contenedor>
        
    )
}
export default Inicio;

const Contenedor = styled.section`
    &.portada{
        margin: 40px 0;
        background-image: url(${fondo});
        background-size: cover; /* Ajusta la imagen al tamaño del contenedor */
        background-repeat: no-repeat; /* Evita la repetición de la imagen */
        background-position: center center;
        padding: 300px 0;
    }
`
const Titulos=styled.h1`
    &.portada{
        color: #FFFFFF;
    }
`
const Parrafo=styled.p`
    &.portada{
        color: #FFFFFF;
        font-size: 25px;
    }
    
`
const Listas=styled.ul
`   &.conten1{
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
    }
    
`
const Imagenes=styled.img`
    &.imgportada{
        width: 300px;
        height: 500px;
    }
    &.imgportada1{
        width: 300px;
        height: 300px;
    }
`
 
