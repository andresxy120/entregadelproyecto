import React from "react";
import stilos from "styled-components";
import producto1 from './imgproducto/producto1.jpg'
import producto2 from './imgproducto/producto2.jpg'
import { Link, Outlet } from "react-router-dom";

const producid = [
  {
    titulo: "Producto 1",
    precio: 65.000,
    imagen: producto1,
    categorias: {
      id: "Motor",
      nombre: "Motor"
    }
  },
  {
    titulo: "Producto 2",
    precio: 80.000,
    imagen: producto2,
    categorias: {
      id: "Motor",
      nombre: "Motor"
    }
  },
  // Agrega más productos aquí
];

const Productos = () => {
  return (
    <Contenedor>
      <Contenedor>
        <nav>
          <Lista>
            <li><Boton className="">Todos los productos</Boton></li>
            <li><Boton id="motor">Motor</Boton></li>
            <li><Boton id="luces">Luces</Boton></li>
            <li><Boton id="accesorios">Accesorios</Boton></li>
            <li><Boton id="exterior">Exterior</Boton></li>
            <li><Boton id="diseño">Diseño</Boton></li>
            <li><Link to="/Carrito">carrito</Link></li>
          </Lista>
        </nav>
        <Outlet/>
      </Contenedor>
      <Titulo>Productos Disponibles</Titulo>
      <Contenedor className="productos-list">
        {producid.map((producto) => (
          <Contenedor className="producto" key={producto.categorias.id}>
            <Imagenes src={producto.imagen} alt={producto.categorias.nombre} />
            <Subtitulo>{producto.titulo}</Subtitulo>
            <Parrafo>Precio: ${producto.precio.toFixed(2)}</Parrafo>
            <Boton>Agregar al Carrito</Boton>
          </Contenedor>
        ))}
      </Contenedor>
    </Contenedor>
  );
}

export { producid };
export default Productos;

const Contenedor = stilos.section`
`
const Titulo = stilos.h1`
`
const Parrafo = stilos.p`
`
const Lista = stilos.ul`
`
const Imagenes = stilos.img`
`
const Subtitulo = stilos.h2`
`
const Boton = stilos.button`
`
