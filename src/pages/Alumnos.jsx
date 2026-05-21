import { useEffect, useState } from "react";
import AlumnoForm from "../components/AlumnoForm";
import AlumnoCard from "../components/AlumnoCard";

const Alumnos = () => {

  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true); //  loading
  const [error, setError] = useState(null);     //  error

  const obtenerAlumnos = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://127.0.0.1:8000/api/alumnos");

      if (!res.ok) {
        throw new Error("Error al obtener alumnos");
      }

      const data = await res.json();

      //  compatible con Laravel (data o directo)
      setAlumnos(data.data || data);

    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar los alumnos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerAlumnos();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Gestión de Alumnos</h2>

      <AlumnoForm recargarAlumnos={obtenerAlumnos} />

      {/*  LOADING */}
      {loading && <p>Cargando alumnos...</p>}

      {/*  ERROR */}
      {error && <p className="text-danger">{error}</p>}

      {/* SIN DATOS */}
      {!loading && alumnos.length === 0 && (
        <p>No hay alumnos registrados</p>
      )}

      {/* LISTA */}
      <div className="row mt-4">
        {alumnos.map((a) => (
          <AlumnoCard
            key={a.id_alumno}
            nombre={`${a.nombre} ${a.apellido}`}
            carrera={a.email}
            estadoInicial={a.estado_matricula}
            foto={a.foto}
          />
        ))}
      </div>
    </div>
  );
};

export default Alumnos;