import React from "react";
import apariencia from "styled-components";

import imagene from './imgservicio/tecnico.jpg';
import seguridad from './imgservicio/seguridad.jpg';
import mantener from './imgservicio/mantenimiento.jpg';
import imagen1 from './imgservicio/reparo1.jpg';
import imagen2 from './imgservicio/reparo2.jpg';
import imagen3 from './imgservicio/reparo3.jpg';
import logo1 from './imgservicio/Yamaha.png';
import logo2 from './imgservicio/Bajaj.png';
import logo3 from './imgservicio/AKT.png';
import logo4 from './imgservicio/Suzuki.png';
import logo5 from './imgservicio/Honda.png';
import logo6 from './imgservicio/Hero.png';
import icono1 from './imgservicio/iconousua1.png';
import icono2 from './imgservicio/iconousua2.png';
import icono3 from './imgservicio/iconousua3.png';
import final from './imgservicio/usuariofinal.jpg';

const Servicio = () => {
  return (
    <ContenedorPrincipal className="principal">
      <Contenedor>
        <Lista>
          <li>
            <Titulo>Servicio complejo para su motocicleta</Titulo>
            <Parrafo>
              Nuestros asesores de motocicleta de fácil contacto le <br />
              explicarán cualquier mantenimiento o reparación <br />
              sugeridos. No tomarán ninguna medida a menos que las <br />
              apruebe primero. Nuestros técnicos de motocicleta<br />
              certificados por ASE están cuidando su motocicleta y su <br />
              presupuesto.
            </Parrafo>
          </li>
          <li>
            <Imagenes src={imagene} alt="imagen1" />
          </li>
        </Lista>

        <Titulo>
          Una lista de verificación para preparar su motocicleta para un largo viaje por carretera
        </Titulo>
        <Lista>
          <li>
            <Imagenes src={mantener} alt="imagen2" />
            <Subtitulo>Mantenimiento general</Subtitulo>
            <Parrafo>
              -Verifica el manual del propietario de tu motocicleta para conocer los intervalos de
              <br /> mantenimiento recomendados y asegúrate de que todo esté al día.
              -Realiza un cambio de aceite y filtros si es necesario.
              -Asegúrate de que los frenos estén en buen estado y ajusta las pastillas <br />
              o tambores si es necesario.
              -Comprueba el estado de la cadena, la tensión y la lubricación.
              -Revisa el sistema de escape en busca de fugas o daños.
              -Asegúrate de que los neumáticos estén en buen estado y con la presión <br />
              adecuada. Lleva una llanta de repuesto y las herramientas necesarias para cambiarla si <br />
              es posible.
            </Parrafo>
          </li>
          <li>
            <Imagenes src={seguridad} alt="imagen3" />
            <Subtitulo>Seguridad y visibilidad</Subtitulo>
            <Parrafo>
              -Asegúrate de que todas las luces, incluidos los faros, las luces <br />
              de freno y las luces direccionales, funcionen correctamente.
              -Limpia y ajusta los espejos retrovisores.
              -Asegúrate de tener un chaleco reflectante y elementos reflectantes en tu equipo.
              -Lleva un kit de herramientas básico, una linterna y una navaja multiusos.
            </Parrafo>
          </li>
        </Lista>
      </Contenedor>

      <Contenedor>
        <Titulo>¿Por qué elegir nuestro servicio?</Titulo>
        <Parrafo>
          La principal ventaja de la cooperación con el centro<br />
          de reparación de motocicleta es la ventajosa relación<br />
          calidad-precio.
        </Parrafo>
        <Titulo>Reparacion de motocicleta de alta calidad</Titulo>
        <Lista>
          <li>
            <Imagenes src={imagen1} alt="imagen4" />
          </li>
          <li>
            <Subtitulo>Reparación</Subtitulo>
            <Parrafo>
              La reparación de una motocicleta es un proceso<br />
              fundamental para mantener su seguridad, rendimiento y <br />
              durabilidad a lo largo del tiempo.
            </Parrafo>
          </li>
          <li>
            <Imagenes src={imagen2} alt="imagen5" />
          </li>
          <li>
            <Subtitulo>Cuidado de la motocicleta</Subtitulo>
            <Parrafo>
              El cuidado adecuado de la motocicleta es esencial<br />
              para garantizar su durabilidad, rendimiento y seguridad,<br />
              y para prevenir problemas mecánicos, eléctricos o de<br />
              otro tipo
            </Parrafo>
          </li>
          <li>
            <Imagenes src={imagen3} alt="imagen6" />
          </li>
          <li>
            <Subtitulo>Calidad</Subtitulo>
            <Parrafo>
              nivel de rendimiento, grado de perfección o cumplimiento<br />
              de estándares específicos que se aplican a un servicio.
            </Parrafo>
          </li>
        </Lista>
        <Lista>
          <li>
            <Imagenes src={logo1} alt="logo1" />
          </li>
          <li>
            <Imagenes src={logo2} alt="logo2" />
          </li>
          <li>
            <Imagenes src={logo3} alt="logo3" />
          </li>
          <li>
            <Imagenes src={logo4} alt="logo4" />
          </li>
          <li>
            <Imagenes src={logo5} alt="logo5" />
          </li>
          <li>
            <Imagenes src={logo6} alt="logo6" />
          </li>
        </Lista>
      </Contenedor>

      <Contenedor>
        <Titulo>Lo que dicen los clientes</Titulo>
        <Parrafo>
          Valoramos enormemente las relaciones sólidas y hemos visto los beneficios que<br />
          aportan a nuestro negocio. Los comentarios de los clientes son vitales para<br />
          ayudarnos a hacerlo bien.
        </Parrafo>
        <Lista>
          <li>
            <Contenedor>
              <Imagenes src={icono1} alt="icono1" />
              <Parrafo>
                El servicio en este taller de motocicletas <br />
                es excepcional! Llevo mi moto allí desde<br />
                hace años y nunca me han decepcionado.<br />
                Siempre son rápidos, amables y tienen precios<br />
                justos.
              </Parrafo>
              <Subtitulo>María123</Subtitulo>
            </Contenedor>
          </li>
          <li>
            <Contenedor>
              <Imagenes src={icono2} alt="icono2" />
              <Parrafo>
                Mi experiencia en este taller ha sido <br />
                mixta. El personal es amable, y han<br />
                realizado un buen trabajo en algunas ocasiones.<br />
                Sin embargo, en otras ocasiones he tenido<br />
                problemas con la duración de las reparaciones.
              </Parrafo>
              <Subtitulo>JuanMoto</Subtitulo>
            </Contenedor>
          </li>
          <li>
            <Contenedor>
              <Imagenes src={icono3} alt="icono3" />
              <Parrafo>
                No puedo recomendar este taller en absoluto. <br />
                Llevé mi moto para una reparación, <br />
                y después de esperar semanas, me entregaron<br />
                la moto con el mismo problema.
              </Parrafo>
              <Subtitulo>Descontento78</Subtitulo>
            </Contenedor>
          </li>
        </Lista>
        <Lista>
          <li>
            <Titulo>Envíanos un mensaje</Titulo>
            <Parrafo>Escríbenos tus inquietudes o problemas</Parrafo>
            <form>
              <Lista>
                <li>
                  <input type="text" placeholder="Ingrese su nombre" />
                </li>
                <li>
                  <input type="text" placeholder="Ingrese su email" />
                </li>
                <li>
                  <input type="text" placeholder="Ingrese tu mensaje" />
                </li>
                <li>
                  <input type="submit" />
                </li>
              </Lista>
            </form>
          </li>
          <li>
            <Imagenes src={final} alt="imagen7" />
          </li>
        </Lista>
      </Contenedor>
    </ContenedorPrincipal>
  );
};

export default Servicio;

const ContenedorPrincipal = apariencia.section``;
const Contenedor = apariencia.section``;
const Titulo = apariencia.h1``;
const Parrafo = apariencia.p``;
const Lista = apariencia.ul``;
const Imagenes = apariencia.img``;
const Subtitulo = apariencia.h2``;
