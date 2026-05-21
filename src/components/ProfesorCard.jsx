const ProfesorCard = ({ 
  nombre, 
  especialidad, 
  email,
  telefono,
  foto,
  onEditar,
  onEliminar
}) => { 

  const BASE_URL = "http://127.0.0.1:8000";

  // Revisa si viene la ruta de la foto desde Laravel, de lo contrario pone una por defecto
  const imagenUrl = foto
    ? `${BASE_URL}/storage/${foto}`
    : 'https://via.placeholder.com/300x200?text=Sin+Foto';

  return ( 
    <div className="col-md-4 col-lg-3 mb-3"> 
      <div className="card shadow-sm h-100"> 
        <img
          src={imagenUrl}
          className="card-img-top"
          alt="Profesor"
          style={{ height: '220px', objectFit: 'cover' }}
        />

        <div className="card-body d-flex flex-column"> 
          <h5 className="card-title text-success mb-1">{nombre}</h5> 
          <span className="badge bg-light text-dark align-self-start mb-2 border">{especialidad}</span>
          
          <p className="card-text small text-muted mb-1"><strong>Email:</strong> {email}</p>
          {telefono && <p className="card-text small text-muted mb-3"><strong>Teléfono:</strong> {telefono}</p>}

          <div className="mt-auto d-flex justify-content-end"> 
            <button className="btn btn-sm btn-outline-primary me-2" onClick={onEditar}>
              Editar
            </button> 
            <button className="btn btn-sm btn-outline-danger" onClick={onEliminar}>
              Eliminar
            </button> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}; 

export default ProfesorCard;