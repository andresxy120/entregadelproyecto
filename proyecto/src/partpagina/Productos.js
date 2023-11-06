import React from "react";
import stilos from "styled-components";
import producto1 from './imgproducto/producto1.jpg'
import producto2 from './imgproducto/producto2.jpg'
const Productos=()=>{
    const productos = [
        {
          id: 1,
          nombre: "Producto 1",
          precio: 10.99,
          imagen: producto1,
        },
        {
          id: 2,
          nombre: "Producto 2",
          precio: 19.99,
          imagen: producto2,
        },
        // Agrega más productos aquí
      ];
    return(
      <Contenedor>
        <Contenedor>
        <nav>
                <ul>
                    <li><button class="">Todos los productos</button></li>
                    <li><button>Motor</button></li>
                    <li><button>Luces</button></li>
                    <li><button>Accesorios</button></li>
                    <li><button>Exterior</button></li>
                    <li><button>Diseño</button></li>
                    <li><a href="./carrito.html"></a><span class="numerito">0</span></li>
                </ul>
            </nav>
        </Contenedor>
      <Titulo>Productos Disponibles</Titulo>
      <Contenedor className="productos-list">
        {productos.map((producto) => (
          <Contenedor className="producto" key={producto.id}>
            <Imagenes src={producto.imagen} alt={producto.nombre} />
            <Subtitulo>{producto.nombre}</Subtitulo>
            <Parrafo>Precio: ${producto.precio.toFixed(2)}</Parrafo>
            <Boton>Agregar al Carrito</Boton>
          </Contenedor>
        ))}
      </Contenedor>
    </Contenedor>
    )
}
export default Productos;

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