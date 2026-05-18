//componente principal o padre
//Aqui se llama a los componentes que creamos en la carpeta components
import Navbar from "./components/Navbar"
import AlumnoCard from "./components/AlumnoCard"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App(){
  return( 
    <>
    
      
      <Navbar/>
      <div className="container">
        <h1 className="mb-4"> Listado de Alumnos</h1>

        <div className="row">

          
          <AlumnoCard 
            nombre = "Josue Omar"
            carrera ="Informatica y desarrollo de aplicaciones web"
            estado ="Matriculado"
          /> 
          

          
          <AlumnoCard 
            nombre = "Alonso"
            carrera ="Informatica y desarrollo de aplicaciones web"
            estado ="Deshabilitado"
          />

          <AlumnoCard 
            nombre = "Tavara"
            carrera ="Informatica y desarrollo de aplicaciones web"
            estado ="Matriculado"
          />

          <AlumnoCard 
            nombre = "Andrea Zapata"
            carrera ="Informatica y desarrollo de aplicaciones web"
            estado ="Matriculado"
          />

          <AlumnoCard 
            nombre = "Rodrigo Ormeño"
            carrera ="Informatica y desarrollo de aplicaciones web"
            estado ="Matriculado"
          />

          <AlumnoCard 
            nombre = "Angel Ordaya"
            carrera ="Informatica y desarrollo de aplicaciones web"
            estado ="Matriculado"
          />

          <AlumnoCard 
            nombre = "James Rojas"
            carrera ="Informatica y desarrollo de aplicaciones web"
            estado ="Matriculado"
          />

          <AlumnoCard 
            nombre = "Angel Ordaya"
            carrera ="Informatica y desarrollo de aplicaciones web"
            estado ="Matriculado"
          />

          <AlumnoCard 
            nombre = "Andre Vega"
            carrera ="Informatica y desarrollo de aplicaciones web"
            estado ="Matriculado"
          />


          

        </div>

      </div>
      


    </>

  )
}


export default App