
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Productos from './partpagina/Productos';
import Carrito from './partpagina/Carrito';
import Header from './partpagina/Header'
import Inicio from './partpagina/Inicio';
import Servicio from './partpagina/Servicio';
function App() {
  return (
    <section className="App">
      <Routes>
          <Route path='/' element={<Header/>}>
              <Route path='/' element={<Inicio/>}></Route>
              <Route path='Productos' element={<Productos/>}></Route>
              <Route path='Servicio' element={<Servicio/>}></Route>
              <Route path='Carrito' element={<Carrito/>}></Route>
              <Route path='*' element={<Inicio/>}></Route>
          </Route>
      </Routes>
    </section>
  );
}

export default App;
