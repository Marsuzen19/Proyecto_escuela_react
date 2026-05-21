import { useState } from 'react';

const CursoForm = ({ recargarCursos }) => {
  const [formulario, setFormulario] = useState({
    nombre_curso: '',
    codigo_curso: '',
    creditos: '',
    descripcion: ''
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

      // Mapear campos de texto
      Object.keys(formulario).forEach(key => {
        formData.append(key, formulario[key]);
      });

      // Adjuntar foto si fue seleccionada
      if (foto) {
        formData.append('foto', foto);
      }

      const respuesta = await fetch('http://127.0.0.1:8000/api/cursos', {
        method: 'POST',
        body: formData
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        alert('Curso registrado exitosamente');
        
        // Resetear estados del componente
        setFormulario({
          nombre_curso: '',
          codigo_curso: '',
          creditos: '',
          descripcion: ''
        });
        setFoto(null);
        setPreview(null);

        recargarCursos(); // Llama la función del padre para actualizar la grilla
      } else {
        console.log("Errores de validación Laravel:", datos.errors);
        alert('Error al guardar el curso. Verifica si el código ya existe.');
      }

    } catch (error) {
      console.error('Error de conexión:', error);
      alert('No se pudo establecer conexión con el servidor.');
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">Añadir Nuevo Asignatura / Curso</h5>
      </div>

      <div className="card-body">
        <form onSubmit={manejarEnvio}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombre del Curso</label>
              <input type="text" className="form-control" name="nombre_curso" value={formulario.nombre_curso} onChange={manejarCambio} required />
            </div>

            <div className="col-md-3">
              <label className="form-label">Código del Curso</label>
              <input type="text" className="form-control" name="codigo_curso" placeholder="Ej. INF-401" value={formulario.codigo_curso} onChange={manejarCambio} required />
            </div>

            <div className="col-md-3">
              <label className="form-label">Créditos</label>
              <input type="number" className="form-control" name="creditos" min="1" max="10" value={formulario.creditos} onChange={manejarCambio} required />
            </div>

            <div className="col-md-12">
              <label className="form-label">Descripción</label>
              <textarea className="form-control" name="descripcion" rows="2" placeholder="Breve resumen del contenido del curso..." value={formulario.descripcion} onChange={manejarCambio}></textarea>
            </div>

            <div className="col-md-6">
              <label className="form-label">Imagen de Portada</label>
              <input type="file" className="form-control" accept="image/*" onChange={manejarImagen} />
            </div>

            {preview && (
              <div className="col-md-6 d-flex align-items-center">
                <img src={preview} alt="Vista previa portada" className="img-fluid rounded border" style={{ height: '110px', objectFit: 'cover' }} />
              </div>
            )}

            <div className="col-12 text-end mt-3">
              <button type="submit" className="btn btn-primary">
                Guardar Curso
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CursoForm;