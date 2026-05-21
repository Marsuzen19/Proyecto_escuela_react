import { useState } from 'react';

const ProfesorForm = ({ recargarProfesores }) => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    dni: '',
    direccion: '',
    telefono: '',
    email: '',
    especialidad: ''
  });

  const [foto, setFoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarImagen = (e) => {
    const file = e.target.files[0];
    setFoto(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Mapear campos de texto al FormData
      Object.keys(formulario).forEach(key => {
        formData.append(key, formulario[key]);
      });

      // Adjuntar la foto si existe
      if (foto) {
        formData.append('foto', foto);
      }

      const respuesta = await fetch('http://127.0.0.1:8000/api/profesores', {
        method: 'POST',
        body: formData
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        alert('Profesor registrado exitosamente');
        
        // Limpiar formulario
        setFormulario({
          nombre: '',
          apellido: '',
          fecha_nacimiento: '',
          dni: '',
          direccion: '',
          telefono: '',
          email: '',
          especialidad: ''
        });
        setFoto(null);
        setPreview(null);

        recargarProfesores(); // Actualiza la lista en la página
      } else {
        console.log("Errores de validación:", datos.errors);
        alert('Error al guardar. Revisa la consola para ver los campos.');
      }

    } catch (error) {
      console.error('Error de conexión:', error);
      alert('No se pudo conectar con el servidor.');
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">Registrar Nuevo Profesor</h5>
      </div>

      <div className="card-body">
        <form onSubmit={manejarEnvio}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombres</label>
              <input type="text" className="form-control" name="nombre" value={formulario.nombre} onChange={manejarCambio} required />
            </div>

            <div className="col-md-6">
              <label className="form-label">Apellidos</label>
              <input type="text" className="form-control" name="apellido" value={formulario.apellido} onChange={manejarCambio} required />
            </div>

            <div className="col-md-4">
              <label className="form-label">DNI</label>
              <input type="text" className="form-control" name="dni" maxLength="8" value={formulario.dni} onChange={manejarCambio} required />
            </div>

            <div className="col-md-4">
              <label className="form-label">Fecha de Nacimiento</label>
              <input type="date" className="form-control" name="fecha_nacimiento" value={formulario.fecha_nacimiento} onChange={manejarCambio} required />
            </div>

            <div className="col-md-4">
              <label className="form-label">Especialidad</label>
              <input type="text" className="form-control" name="especialidad" placeholder="Ej. Desarrollo Web" value={formulario.especialidad} onChange={manejarCambio} required />
            </div>

            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={formulario.email} onChange={manejarCambio} required />
            </div>

            <div className="col-md-4">
              <label className="form-label">Dirección</label>
              <input type="text" className="form-control" name="direccion" value={formulario.direccion} onChange={manejarCambio} />
            </div>

            <div className="col-md-4">
              <label className="form-label">Teléfono</label>
              <input type="text" className="form-control" name="telefono" maxLength="9" value={formulario.telefono} onChange={manejarCambio} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Foto de Perfil</label>
              <input type="file" className="form-control" accept="image/*" onChange={manejarImagen} />
            </div>

            {preview && (
              <div className="col-md-6 d-flex align-items-center">
                <img src={preview} alt="Vista previa" className="img-fluid rounded border" style={{ height: '100px', objectFit: 'cover' }} />
              </div>
            )}

            <div className="col-12 text-end mt-3">
              <button type="submit" className="btn btn-success">
                Guardar Profesor
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfesorForm;