
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";


// páginas
import Home from "./pages/Home";
import Alumnos from "./pages/Alumnos";
import Profesores from "./pages/Profesores";
import Cursos from "./pages/Cursos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/*Puedo agregar mas rutas conforma cree mas */}
        <Route path="/" element={<Home />} />
        <Route path="/alumnos" element={<Alumnos />} />
        <Route path="/profesores" element={<Profesores />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;