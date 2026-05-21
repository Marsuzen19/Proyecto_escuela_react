import { useState } from 'react';

const AlumnoCard = ({ 
  nombre, 
  carrera, 
  estadoInicial = 'Inactivo', 
  foto,
  onEditar,
  onEliminar
}) => { 

  const [estado, setEstado] = useState(estadoInicial);

  const badgeColor = estado === 'Matriculado' ? 'bg-success' : 'bg-secondary'; 

  const cambiarEstado = () =>{
    setEstado(prev => prev === 'Matriculado' ? 'Inactivo' : 'Matriculado');
  }

  // URL base configurable
  const BASE_URL = "http://127.0.0.1:8000";

  const imagen = foto
    ? `${BASE_URL}/storage/${foto}`
    : 'https://via.placeholder.com/300x200?text=Sin+Imagen';

  return ( 
    //tamaño del card
    <div className="col-md-4 col-lg-4 mb-3"> 
      <div className="card shadow-sm h-100"> 

        {/* IMAGEN */}
        <img
          src={imagen}
          className="card-img-top"
          alt="Alumno"
          style={{ height: '200px', objectFit: 'cover' }}
        />

        <div className="card-body d-flex flex-column"> 
          <h5 className="card-title text-primary">{nombre}</h5> 
          <h6 className="card-subtitle mb-2 text-muted">{carrera}</h6> 

          <div className="mt-auto d-flex justify-content-between align-items-center"> 

            <span className={`badge ${badgeColor}`}>{estado}</span> 

            <div> 
              <button 
                className="btn btn-sm btn-outline-info me-2" 
                onClick={cambiarEstado}
              >
                Estado
              </button> 

              <button 
                className="btn btn-sm btn-outline-primary me-2"
                onClick={onEditar}
              >
                Editar
              </button> 

              <button 
                className="btn btn-sm btn-outline-danger"
                onClick={onEliminar}
              >
                Eliminar
              </button> 
            </div> 

          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}; 

export default AlumnoCard;