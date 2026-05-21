const CursoCard = ({ 
  nombreCurso, 
  codigoCurso, 
  creditos,
  descripcion,
  foto,
  onEditar,
  onEliminar
}) => { 

  const BASE_URL = "http://127.0.0.1:8000";

  // Retorna la imagen subida en Laravel o un marcador de posición si está vacío
  const imagenUrl = foto
    ? `${BASE_URL}/storage/${foto}`
    : 'https://via.placeholder.com/300x200?text=Curso+Sin+Imagen';

  return ( 
    <div className="col-md-4 col-lg-3 mb-3"> 
      <div className="card shadow-sm h-100"> 
        <img
          src={imagenUrl}
          className="card-img-top"
          alt="Curso"
          style={{ height: '180px', objectFit: 'cover' }}
        />

        <div className="card-body d-flex flex-column"> 
          <span className="badge bg-primary align-self-start mb-2">
            {creditos} {creditos === 1 ? 'Crédito' : 'Créditos'}
          </span>

          <h5 className="card-title text-dark mb-1">{nombreCurso}</h5> 
          <h6 className="card-subtitle mb-2 text-muted small">Código: {codigoCurso}</h6> 
          
          <p className="card-text text-secondary small flex-grow-1">
            {descripcion ? descripcion : 'Sin descripción disponible.'}
          </p>

          <div className="mt-3 d-flex justify-content-end border-top pt-2"> 
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

export default CursoCard;