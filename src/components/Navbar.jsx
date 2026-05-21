//Agregamos las importaciones que hemos hecho

import { Link } from 'react-router-dom';
import logoMatricula from '../assets/logomatricula.jpg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img 
            src={logoMatricula}
            alt="Logo"
            className="rounded-circle"
            style={{
              width: 'clamp(45px, 8vw, 75px)',
              height: 'clamp(45px, 8vw, 75px)'
            }}
          />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">

          <ul className="navbar-nav ms-auto text-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/especializaciones">Especializaciones</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>

            {/* DROPDOWN */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Gestión Académica
              </a>

              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="/alumnos">Alumnos</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profesores">Profesores</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cursos">Cursos</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;