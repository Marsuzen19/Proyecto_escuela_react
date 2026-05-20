import { useState } from 'react';

const AlumnoForm = ({ recargarAlumnos }) => {

  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    dni: '',
    direccion: '',
    telefono: '',
    email: '',
    estado_matricula: 'Matriculado',
    foto: null // ✅ NUEVO
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // ✅ Convertir a FormData
      for (let key in formulario) {
        formData.append(key, formulario[key]);
      }

      const respuesta = await fetch('http://127.0.0.1:8000/api/alumnos', {
        method: 'POST',
        body: formData // ❗ IMPORTANTE (sin headers)
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        alert('Alumno guardado exitosamente');

        setFormulario({
          nombre: '',
          apellido: '',
          fecha_nacimiento: '',
          dni: '',
          direccion: '',
          telefono: '',
          email: '',
          estado_matricula: 'Matriculado',
          foto: null
        });

        recargarAlumnos();
      } else {
        console.log("Errores:", datos.errors);
        alert('Error al guardar. Revisa consola.');
      }

    } catch (error) {
      console.error('Error de conexión:', error);
      alert('No se pudo conectar con el servidor.');
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">Registrar Nuevo Alumno</h5>
      </div>

      <div className="card-body">
        <form onSubmit={manejarEnvio}>
          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Nombres</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Apellidos</label>
              <input
                type="text"
                className="form-control"
                name="apellido"
                value={formulario.apellido}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">DNI</label>
              <input
                type="text"
                className="form-control"
                name="dni"
                value={formulario.dni}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Fecha de Nacimiento</label>
              <input
                type="date"
                className="form-control"
                name="fecha_nacimiento"
                value={formulario.fecha_nacimiento}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formulario.email}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Dirección</label>
              <input
                type="text"
                className="form-control"
                name="direccion"
                value={formulario.direccion}
                onChange={manejarCambio}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Teléfono</label>
              <input
                type="text"
                className="form-control"
                name="telefono"
                value={formulario.telefono}
                onChange={manejarCambio}
              />
            </div>

            {/* ✅ INPUT DE IMAGEN */}
            <div className="col-md-6">
              <label className="form-label">Foto</label>
              <input
                type="file"
                className="form-control"
                name="foto"
                onChange={(e) =>
                  setFormulario({
                    ...formulario,
                    foto: e.target.files[0]
                  })
                }
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Estado</label>
              <select
                className="form-select"
                name="estado_matricula"
                value={formulario.estado_matricula}
                onChange={manejarCambio}
              >
                <option value="Matriculado">Matriculado</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>

            <div className="col-12 text-end mt-3">
              <button type="submit" className="btn btn-primary">
                Guardar en MySQL
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AlumnoForm;