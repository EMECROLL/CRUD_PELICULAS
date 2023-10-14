import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//? Importamos los componentes
import ComponenteShowPeliculas from './Peliculas/ShowPeliculas';
import ComponenteCreatePeliculas from './Peliculas/CreatePeliculas';
import ComponenteEditPeliculas from './Peliculas/EditPeliculas';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ComponenteShowPeliculas/>}></Route>
          <Route path='/crear' element={<ComponenteCreatePeliculas/>}></Route>
          <Route path='/editar/:id' element={<ComponenteEditPeliculas/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
