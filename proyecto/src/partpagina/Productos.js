import React from "react";

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
        <div>
      <h1>Productos Disponibles</h1>
      <div className="productos-list">
        {productos.map((producto) => (
          <div className="producto" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio.toFixed(2)}</p>
            <button>Agregar al Carrito</button>
          </div>
        ))}
      </div>
    </div>
    )
}
export default Productos;