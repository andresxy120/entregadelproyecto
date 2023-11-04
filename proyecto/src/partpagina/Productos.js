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
        <Contenerdor>
          <Asaider>
            
          </Asaider>
        </Contenerdor>
    )
}
export default Productos;