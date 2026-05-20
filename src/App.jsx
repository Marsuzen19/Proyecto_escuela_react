import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import AlumnoCard from "./components/AlumnoCard";
import AlumnoForm from "./components/AlumnoForm";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  const [alumnos, setAlumnos] = useState([]);

  const obtenerAlumnos = async () => {
    try {
      const respuesta = await fetch('http://127.0.0.1:8000/api/alumnos');
      const datos = await respuesta.json();
      setAlumnos(datos.data || datos);
    } catch (error) {
      console.error('Error al obtener los alumnos:', error);
    }
  };

  useEffect(() => {
    obtenerAlumnos();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        <AlumnoForm recargarAlumnos={obtenerAlumnos} />

        <div className="row mt-4">
          {alumnos.map((alumno) => (
            <AlumnoCard
              key={alumno.id_alumno}
              nombre={`${alumno.nombre} ${alumno.apellido}`}
              carrera={alumno.email}
              estadoInicial={alumno.estado_matricula}
              foto={alumno.foto} 
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;