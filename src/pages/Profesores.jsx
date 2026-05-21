import { useEffect, useState } from "react";
import ProfesorForm from "../components/ProfesorForm";
import ProfesorCard from "../components/ProfesorCard";

const Profesores = () => {
  const [profesores, setProfesores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const obtenerProfesores = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://127.0.0.1:8000/api/profesores");

      if (!res.ok) {
        throw new Error("Error al obtener el listado de profesores");
      }

      const data = await res.json();
      // Tu controlador retorna directo el array ordenado descendentemente
      setProfesores(data);

    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar los datos de los profesores");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerProfesores();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Gestión de Profesores</h2>

      {/* Formulario de registro */}
      <ProfesorForm recargarProfesores={obtenerProfesores} />

      {/* Estados de carga y error */}
      {loading && <p>Cargando registros...</p>}
      {error && <p className="text-danger">{error}</p>}

      {/* Mensaje de contingencia */}
      {!loading && profesores.length === 0 && (
        <p>No hay profesores registrados en el sistema actualmente.</p>
      )}

      {/* Mapeo de tarjetas */}
      <div className="row mt-4">
        {profesores.map((p) => (
          <ProfesorCard
            key={p.id_profesor}
            nombre={`${p.nombre} ${p.apellido}`}
            especialidad={p.especialidad}
            email={p.email}
            telefono={p.telefono}
            foto={p.foto}
            onEditar={() => console.log('Editar ID:', p.id_profesor)}
            onEliminar={() => console.log('Eliminar ID:', p.id_profesor)}
          />
        ))}
      </div>
    </div>
  );
};

export default Profesores;