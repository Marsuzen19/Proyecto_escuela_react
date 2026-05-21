import { useEffect, useState } from "react";
import CursoForm from "../components/CursoForm";
import CursoCard from "../components/CursoCard";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const obtenerCursos = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://127.0.0.1:8000/api/cursos");

      if (!res.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const data = await res.json();
      setCursos(data);

    } catch (err) {
      console.error(err);
      setError("No se pudo obtener el catálogo de cursos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerCursos();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Gestión de Cursos</h2>
      <p className="text-muted">Administra las materias y cargas de créditos del sistema académico.</p>

      {/* Formulario de Inserción */}
      <CursoForm recargarCursos={obtenerCursos} />

      {/* Controladores de Estado Visual */}
      {loading && <div className="text-center my-4"><p>Cargando cursos disponibles...</p></div>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && cursos.length === 0 && (
        <div className="alert alert-warning text-center" role="alert">
          No hay cursos registrados actualmente en la base de datos.
        </div>
      )}

      {/* Grilla de Visualización */}
      <div className="row mt-4">
        {cursos.map((c) => (
          <CursoCard
            key={c.id_curso}
            nombreCurso={c.nombre_curso}
            codigoCurso={c.codigo_curso}
            creditos={c.creditos}
            descripcion={c.descripcion}
            foto={c.foto}
            onEditar={() => console.log('Editar ID:', c.id_curso)}
            onEliminar={() => console.log('Eliminar ID:', c.id_curso)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cursos;