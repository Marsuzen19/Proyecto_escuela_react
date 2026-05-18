
// src/components/AlumnoCard.jsx 
// la const guarda 3 variables nombre,carrera,estado
const AlumnoCard = ({ nombre, carrera, estado }) => { 

  //Operador ternario: Aparece el simbolo de === ?
  /*Es como si dijera 
  if(estado==="Matriculado"){
    bd-success;
  }
    else{
        bd-secondary;
        }
  */
  const badgeColor = estado === 'Matriculado' ? 'bg-success' : 'bg-secondary'; 

  return ( 
    //md trabaja con columnas solo 12
    //mb= margin bottom margen inferior
<div className="col-md-4 mb-3"> 
    <div className="card shadow-sm h-100"> 
        <div className="card-body"> 
            <h5 className="card-title text-primary">{nombre}</h5> 
            <h6 className="card-subtitle mb-2 text-muted">{carrera}</h6> 
            <div className="d-flex justify-content-between align-items center"> 
                <span className={`badge ${badgeColor}`}>{estado}</span> 
                <div> 
                    <button className="btn btn-sm btn-outline-primary me-2">Editar</button> 
                    <button className="btn btn-sm btn-outline-danger">Eliminar</button> 
                </div> 
            </div> 
        </div> 
    </div> 
</div> 
  ); 
}; 
export default AlumnoCard;